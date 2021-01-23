var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

const AWS = require('aws-sdk')
const { v4: uuid } = require('uuid')
const cors = require('cors')
const region = 'us-east-1'

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

console.log('test')

const chime = new AWS.Chime({ region })
chime.endpoint = new AWS.Endpoint(
  'https://service.chime.aws.amazon.com/console'
)

app.get('/meeting', async (req, res) => {
  try {
    const response = {}
    response.meetingResponse = await chime
      .createMeeting({
        ClientRequestToken: uuid(),
        MediaRegion: region
      })
      .promise()

    response.attendee = await chime
      .createAttendee({
        MeetingId: response.meetingResponse.Meeting.MeetingId,
        ExternalUserId: uuid()
      })
      .promise()

    res.send(response)
  } catch (err) {
    res.send(err)
  }
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
