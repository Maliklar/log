// src/constants.ts
var bgColors = {
  Black: "\x1B[40m%s\x1B[0m" /* BgBlack */,
  Red: "\x1B[41m%s\x1B[0m" /* BgRed */,
  Green: "\x1B[42m%s\x1B[0m" /* BgGreen */,
  Yellow: "\x1B[43m%s\x1B[0m" /* BgYellow */,
  Blue: "\x1B[44m%s\x1B[0m" /* BgBlue */,
  Magenta: "\x1B[45m%s\x1B[0m" /* BgMagenta */,
  Cyan: "\x1B[46m%s\x1B[0m" /* BgCyan */,
  White: "\x1B[47m%s\x1B[0m" /* BgWhite */,
  Gray: "\x1B[100m%s\x1B[0m" /* BgGray */
};
var fgColors = {
  Black: "\x1B[30m%s\x1B[0m" /* FgBlack */,
  Red: "\x1B[31m%s\x1B[0m" /* FgRed */,
  Green: "\x1B[32m%s\x1B[0m" /* FgGreen */,
  Yellow: "\x1B[33m%s\x1B[0m" /* FgYellow */,
  Blue: "\x1B[34m%s\x1B[0m" /* FgBlue */,
  Magenta: "\x1B[35m%s\x1B[0m" /* FgMagenta */,
  Cyan: "\x1B[36m%s\x1B[0m" /* FgCyan */,
  White: "\x1B[37m%s\x1B[0m" /* FgWhite */,
  Gray: "\x1B[90m%s\x1B[0m" /* FgGray */
};
var font = {
  Reset: "\x1B[0m%s\x1B[0m" /* Reset */,
  Blink: "\x1B[5m%s\x1B[0m" /* Blink */,
  Dim: "\x1B[2m%s\x1B[0m" /* Dim */,
  Hidden: "\x1B[8m%s\x1B[0m" /* Hidden */,
  Reverse: "\x1B[7m%s\x1B[0m" /* Reverse */,
  Underscore: "\x1B[4m%s\x1B[0m" /* Underscore */,
  Italic: "\x1B[3m" /* Italic */,
  Strikethrough: "\x1B[9m" /* Strikethrough */,
  Bold: "\x1B[1m" /* Bold */
};

// src/index.ts
var Log = class {
  static c;
  static colorSet = bgColors;
  static f;
  /**
   *
   * @param c Color for the string
   * @returns instance of static Log class
   */
  static color(c) {
    this.c = c;
    return this;
  }
  /**
   *
   * @param s String to print
   */
  static log(s) {
    console.log(s);
  }
  /**
   * @description background color
   */
  static bg() {
    this.colorSet = bgColors;
  }
  /**
   * @description foreground color
   */
  static fr() {
    this.colorSet = fgColors;
  }
  /**
   *
   * @param s String to print
   * @description Prints an error message
   */
  static error(s) {
    console.log(this.colorSet.Red, s);
  }
  /**
   *
   * @param s String to print
   * @description Prints an warning message
   */
  static warning(s) {
    console.log(this.colorSet.Yellow, s);
  }
  /**
   *
   * @param s String to print
   * @description Prints an progress message
   */
  static progress(s) {
    console.log(this.colorSet.Blue, s);
  }
  /**
   *
   * @param s String to print
   * @description Prints an success message
   */
  static success(s) {
    console.log(this.colorSet.Green, s);
  }
  static createList() {
    return new LogList();
  }
  static reset() {
    this.f = font.Reset;
    return this;
  }
  static blink() {
    this.f = font.Blink;
    return this;
  }
  static dim() {
    this.f = font.Dim;
    return this;
  }
  static hidden() {
    this.f = font.Hidden;
    return this;
  }
  static reverse() {
    this.f = font.Reverse;
    return this;
  }
  static underscore() {
    this.f = font.Underscore;
    return this;
  }
  static italic() {
    this.f = font.Italic;
    return this;
  }
  static strike() {
    this.f = font.Strikethrough;
    return this;
  }
  static bold() {
    this.f = font.Bold;
    return this;
  }
};
var LogList = class {
  list = [];
  add(s) {
    return this.list.push(s).toString();
  }
  log() {
    this.list.forEach((s, i) => {
      console.log(`${i + 1}- ${s}`);
    });
  }
};
export {
  Log as default
};
//# sourceMappingURL=index.mjs.map