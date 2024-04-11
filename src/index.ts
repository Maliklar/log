import { bgColors, Color, fgColors, Font, font } from "./constants";

export default class Log {
  static c: Color;
  static colorSet = bgColors;
  static f: Font;

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
