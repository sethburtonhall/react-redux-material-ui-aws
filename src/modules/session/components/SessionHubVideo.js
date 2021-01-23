import React, { useState, useRef } from 'react';
import axios from 'axios';
import * as Chime from 'amazon-chime-sdk-js';
// import {API} from 'aws-amplify';

// function getData() {
//   const apiName = 'SoleTalkChime';
//   const path = '/meeting';
//   // const myInit = { // OPTIONAL
//   //   headers: {}, // OPTIONAL
//   // };

//   return API.get(apiName, path, myInit);
// }

const SessionHubVideo = () => {
  const [meetingResponse, setMeetingResponse] = useState();
  const [attendeeResponse, setAttendeeResponse] = useState();
  const [callCreated, setCallCreated] = useState(false);
  const videoElement = useRef();

  // (const startCall = async function () {
  //   const response = await getData();
  //   setMeetingResponse(response.data.meetingResponse);
  //   setAttendeeResponse(response.data.attendee);
  //   setCallCreated(true);
  //   console.log(response);
  // })();

  const startCall = async () => {
    const response = await axios.get(
      'https://qj210zzh2m.execute-api.us-east-1.amazonaws.com/dev/meeting'
    );
    // const response = await getData();
    setMeetingResponse(response.data.meetingResponse);
    setAttendeeResponse(response.data.attendee);
    setCallCreated(true);
    console.log(response);
  };

  const joinVideoCall = async () => {
    const logger = new Chime.ConsoleLogger('ChimeMeetingLogs', Chime.LogLevel.INFO);
    const deviceController = new Chime.DefaultDeviceController(logger);
    const configuration = new Chime.MeetingSessionConfiguration(meetingResponse, attendeeResponse);
    const meetingSession = new Chime.DefaultMeetingSession(configuration, logger, deviceController);

    const observer = {
      audioVideoDidStart: () => {
        meetingSession.audioVideo.startLocalVideoTile();
      },
      videoTileDidUpdate: (tileState) => {
        meetingSession.audioVideo.bindVideoElement(tileState.tileId, videoElement.current);
      },
    };

    meetingSession.audioVideo.addObserver(observer);
    const firstVideoDeviceId = (await meetingSession.audioVideo.listVideoInputDevices())[0]
      .deviceId;
    await meetingSession.audioVideo.chooseVideoInputDevice(firstVideoDeviceId);
    meetingSession.audioVideo.start();
  };

  return (
    <div className="App">
      <header className="App-header">
        <video ref={videoElement}></video>
        <button disabled={!callCreated} onClick={joinVideoCall}>
          {' '}
          join call
        </button>
        <button onClick={startCall}>start call</button>
      </header>
    </div>
  );
};

export default SessionHubVideo;
