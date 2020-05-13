export const dateToHours = date => {
  const currentDate = Date.now();
  const incomingDate = new Date(date).getTime();

  return Math.floor((currentDate - incomingDate) / 1000 / 3600);
};
