const days = function (days) {
  const addDays = require("date-fns/addDays");
  const result = addDays(new Date(2020, 7, 22), days);
  return result;
};
module.exports = days;
