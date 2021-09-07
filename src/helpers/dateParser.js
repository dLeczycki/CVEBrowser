export const parseDate = (date) => {
  // yyyy-MM-dd'T'HH:mm:ss:SSS z
  const year = date.getFullYear().toString();

  let month = date.getMonth().toString();
  if (month.length === 1) month = `0${month}`;

  let day = date.getDay().toString();
  if (day.length === 1) day = `0${day}`;

  return `${year}-${month}-${day}T00:00:00:000 UTC-05:00`;
};
