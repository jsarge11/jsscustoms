module.exports = {
  formatDate: function (date) {
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    return (
      hour + ':' + min + ', ' + monthNames[monthIndex] + ' ' + day + ' ' + year
    );
  },
};
