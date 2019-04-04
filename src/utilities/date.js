const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getDayOfMonth = (date) => {
  const jsDate = new Date(date);
  return jsDate.getDate();
};

export const getDayOfWeek = (date) => {
  const jsDate = new Date(date);
  return DAYS[jsDate.getDay()];
};

export const getMonth = (date) => {
  const jsDate = new Date(date);
  return MONTHS[jsDate.getMonth()];
};

export const convertToDate = (date) => {
  return new Date(date);
};
