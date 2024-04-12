export enum Color {
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
  FgGray = "\x1b[90m",

  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m",
  BgGray = "\x1b[100m",
}

export enum Font {
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
  Italic = "\x1b[3m",
  Strikethrough = "\x1b[9m",
  Bold = "\x1b[1m",
}

export const bgColors = {
  black: Color.BgBlack,
  red: Color.BgRed,
  green: Color.BgGreen,
  yellow: Color.BgYellow,
  blue: Color.BgBlue,
  magenta: Color.BgMagenta,
  cyan: Color.BgCyan,
  white: Color.BgWhite,
  gray: Color.BgGray,
} as const;
export const fgColors = {
  black: Color.FgBlack,
  red: Color.FgRed,
  green: Color.FgGreen,
  yellow: Color.FgYellow,
  blue: Color.FgBlue,
  magenta: Color.FgMagenta,
  cyan: Color.FgCyan,
  white: Color.FgWhite,
  gray: Color.FgGray,
} as const;
export const font = {
  blink: Font.Blink,
  dim: Font.Dim,
  hidden: Font.Hidden,
  reverse: Font.Reverse,
  underscore: Font.Underscore,
  italic: Font.Italic,
  strikethrough: Font.Strikethrough,
  bold: Font.Bold,
} as const;

type InputStyle =
  | "blink"
  | "dim"
  | "hidden"
  | "reverse"
  | "underscore"
  | "italic"
  | "strikethrough"
  | "bold";

type InputColor =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray";
export default class Log {
  static fgC: Color | undefined;
  static bgC: Color | undefined;
  static f: Font | undefined;

  /**
   *
   * @param s String to print
   */
  static log(s: string) {
    const END = "\x1b[0m";

    const arr = [this.fgC, this.bgC, this.f].filter((i) => !!i);
    if (arr) console.log(...arr, s, END);
    else console.log(s);
    this.fgC = undefined;
    this.bgC = undefined;
    this.f = undefined;
  }

  /**
   *
   * @param c String containing a color
   * @returns Instance of static Log class
   * @description Sets the text color
   * @example color("green")
   */
  static color(c: InputColor) {
    if (c in fgColors) this.fgC = fgColors[c];
    return this;
  }

  /**
   *
   * @param c String containing a color
   * @returns Instance of static Log class
   * @description Sets the text's background color
   * @example bgColor("green")
   */
  static bgColor(c: InputColor) {
    if (c in bgColors) this.bgC = bgColors[c];
    return this;
  }

  /**
   * @description Sets the font style to blink
   * @returns Instance of static Log class
   */
  static blink() {
    this.f = font.blink;
    return this;
  }

  /**
   * @description Sets the font style to dim
   * @returns Instance of static Log class
   */
  static dim() {
    this.f = font.dim;
    return this;
  }

  /**
   * @description Sets the font style to hidden
   * @returns Instance of static Log class
   */
  static hidden() {
    this.f = font.hidden;
    return this;
  }

  /**
   * @description Sets the font style to reverse
   * @returns Instance of static Log class
   */
  static reverse() {
    this.f = font.reverse;
    return this;
  }

  /**
   * @description Sets the font style to underscore
   * @returns Instance of static Log class
   */
  static underscore() {
    this.f = font.underscore;
    return this;
  }

  /**
   * @description Sets the font style to italic
   * @returns Instance of static Log class
   */
  static italic() {
    this.f = font.italic;
    return this;
  }

  /**
   * @description Sets the font style to strikethrough
   * @returns Instance of static Log class
   */
  static strike() {
    this.f = font.strikethrough;
    return this;
  }

  /**
   * @description Sets the font style to bold
   * @returns Instance of static Log class
   */
  static bold() {
    this.f = font.bold;
    return this;
  }
  /**
   *
   * @param f InputStyle string
   * @description Sets the font style
   * @returns Instance of static Log class
   * @example style("bold").log("Hello");
   */
  static style(f: InputStyle) {
    if (f in font) this.f = font[f];
    return this;
  }

  static createList() {
    return new LogList();
  }
}

class LogList extends Log {
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
