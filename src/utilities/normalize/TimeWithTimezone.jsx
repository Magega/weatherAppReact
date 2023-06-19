export const getTimeWithTimeZone = (timeZoneOffset, timestamp) => {
  const realDate = new Date(timestamp * 1000);
  realDate.setSeconds(realDate.getSeconds() + timeZoneOffset);
  const realTime = realDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return realTime;
};
