const randomColor = () => {
  while (true) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    console.log("Here r", r);
    if (luminance <80) {
      return `rgb(${r},${g},${b})`;
    }
  }
};

const formateDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (date) {
    const temp = new Date(date);

    return ` ${temp.getDate()} ${
      months[temp.getMonth()]
    } ${temp.getFullYear()}, ${weekdays[temp.getDay()]}`;
  }
};

export { randomColor, formateDate };
