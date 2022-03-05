const format_date = (date) => {
  return `${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getDate()}/${new Date(date).getFullYear()}`;
};

const format_plural = (word, number) => {
  if (number !== 1) {
    return `${word}s`;
  }
  return word;
};

const format_url = (url) => {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split("/")[0]
    .split("?")[0];
};

module.exports = { format_date, format_plural, format_url };
