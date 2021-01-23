import moment from 'moment';

export function dateToTimestamp(date) {
  return moment(date, 'YYYY-MM-DD').utc().unix();
}

export function generateExpirationTimestamp(seconds) {
  return moment().unix() + seconds;
}

export function getAge(birthDate) {
  return moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'years', true);
}

export function getCurrentTimestamp() {
  return moment().unix();
}

export function getCurrentYear() {
  return moment().format('YYYY');
}

export function getDownloadDate() {
  return moment().format('YYYY_MM_DD');
}

export function secondsToDuration(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.ceil((duration % 3600) / 60);

  const outputDuration = [];

  if (hours !== 0) {
    outputDuration.push(`${hours}h`);
  }

  if (minutes !== 0) {
    outputDuration.push(`${minutes}m`);
  }

  return outputDuration.join(' ');
}

export function timestampToMonth(timestamp) {
  return moment.unix(timestamp).utc().local().format('M');
}

export function timestampToYear(timestamp) {
  return moment.unix(timestamp).utc().local().format('YYYY');
}

export function timestampToDate(timestamp) {
  return moment.unix(timestamp).utc().local().format('YYYY-MM-DD');
}

export function timestampToExpandedDate(timestamp) {
  return moment.unix(timestamp).utc().local().format('MMM D, YYYY');
}

export function timestampToExpandedTime(timestamp) {
  return moment.unix(timestamp).utc().local().format('h:mm:ss a');
}

export function timestampToMonthDay(timestamp) {
  return moment.unix(timestamp).utc().local().format('MMM D');
}

export function timestampToShortDate(timestamp) {
  return moment.unix(timestamp).utc().local().format('M/D');
}

export function timestampToTime(timestamp) {
  return moment.unix(timestamp).utc().local().format('h:mm a');
}
