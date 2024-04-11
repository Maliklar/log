export enum Color {
  FgBlack = "\x1b[30m%s\x1b[0m",
  FgRed = "\x1b[31m%s\x1b[0m",
  FgGreen = "\x1b[32m%s\x1b[0m",
  FgYellow = "\x1b[33m%s\x1b[0m",
  FgBlue = "\x1b[34m%s\x1b[0m",
  FgMagenta = "\x1b[35m%s\x1b[0m",
  FgCyan = "\x1b[36m%s\x1b[0m",
  FgWhite = "\x1b[37m%s\x1b[0m",
  FgGray = "\x1b[90m%s\x1b[0m",

  BgBlack = "\x1b[40m%s\x1b[0m",
  BgRed = "\x1b[41m%s\x1b[0m",
  BgGreen = "\x1b[42m%s\x1b[0m",
  BgYellow = "\x1b[43m%s\x1b[0m",
  BgBlue = "\x1b[44m%s\x1b[0m",
  BgMagenta = "\x1b[45m%s\x1b[0m",
  BgCyan = "\x1b[46m%s\x1b[0m",
  BgWhite = "\x1b[47m%s\x1b[0m",
  BgGray = "\x1b[100m%s\x1b[0m",
}

export enum Font {
  Reset = "\x1b[0m%s\x1b[0m",
  Bright = "\x1b[1m%s\x1b[0m",
  Dim = "\x1b[2m%s\x1b[0m",
  Underscore = "\x1b[4m%s\x1b[0m",
  Blink = "\x1b[5m%s\x1b[0m",
  Reverse = "\x1b[7m%s\x1b[0m",
  Hidden = "\x1b[8m%s\x1b[0m",
  Italic = "\x1b[3m",
  Strikethrough = "\x1b[9m",
  Bold = "\x1b[1m",
}

export const bgColors = {
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
export const fgColors = {
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
export const font = {
  Reset: Font.Reset,
  Blink: Font.Blink,
  Dim: Font.Dim,
  Hidden: Font.Hidden,
  Reverse: Font.Reverse,
  Underscore: Font.Underscore,
  Italic: Font.Italic,
  Strikethrough: Font.Strikethrough,
  Bold: Font.Bold,
};
