import { Color } from "./colors";

const bgColors = {
  Black: Color.BgBlack,
  Red: Color.BgRed,
  Green: Color.BgGreen,
  Yellow: Color.BgYellow,
  Blue: Color.BgBlue,
  Magenta: Color.BgMagenta,
  Cyan: Color.BgCyan,
  White: Color.BgWhite,
  Gray: Color.BgGray,
};
const fgColors = {
  Black: Color.FgBlack,
  Red: Color.FgRed,
  Green: Color.FgGreen,
  Yellow: Color.FgYellow,
  Blue: Color.FgBlue,
  Magenta: Color.FgMagenta,
  Cyan: Color.FgCyan,
  White: Color.FgWhite,
  Gray: Color.FgGray,
};

export default class Log {
  static c: Color;
  static colorSet = bgColors;

  /**
   *
   * @param c Color for the string
   * @returns instance of static Log class
   */
  static color(c: Color) {
    this.c = c;
    return this;
  }

  /**
   *
   * @param s String to print
   */
  static log(s: string) {
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
  static error(s: string) {
    console.log(this.colorSet.Red, s);
  }
  /**
   *
   * @param s String to print
   * @description Prints an warning message
   */
  static warning(s: string) {
    console.log(this.colorSet.Yellow, s);
  }

  /**
   *
   * @param s String to print
   * @description Prints an progress message
   */
  static progress(s: string) {
    console.log(this.colorSet.Blue, s);
  }

  /**
   *
   * @param s String to print
   * @description Prints an success message
   */
  static success(s: string) {
    console.log(this.colorSet.Green, s);
  }

  static createList() {
    return new LogList();
  }
}

class LogList {
  list: string[] = [];

  public add(s: string) {
    return this.list.push(s).toString();
  }
  public log() {
    this.list.forEach((s, i) => {
      console.log(`${i + 1}- ${s}`);
    });
  }
}
