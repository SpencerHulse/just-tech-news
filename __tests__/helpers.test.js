const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

test("format_plural() returns plural words when appropriate", () => {
  const word = "comment";
  const one = 1;
  const two = 2;
  const many = 3;

  expect(format_plural(word, one)).toBe("comment");
  expect(format_plural(word, two)).toBe("comments");
  expect(format_plural(word, many)).toBe("comments");
});

test("format_url() should return shortened URL without www", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/abcdefg/");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
