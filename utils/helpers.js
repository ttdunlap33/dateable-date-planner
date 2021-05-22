module.exports = {
    // TODO: Create a custom helper 'format_date' that takes in a timestamp,
    // adds five years to the date, and formats it as M/D/YYYY
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5}}`
    },
  };