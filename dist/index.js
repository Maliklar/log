export var Color;
(function (Color) {
    Color["FgBlack"] = "\u001B[30m%s\u001B[0m";
    Color["FgRed"] = "\u001B[31m%s\u001B[0m";
    Color["FgGreen"] = "\u001B[32m%s\u001B[0m";
    Color["FgYellow"] = "\u001B[33m%s\u001B[0m";
    Color["FgBlue"] = "\u001B[34m%s\u001B[0m";
    Color["FgMagenta"] = "\u001B[35m%s\u001B[0m";
    Color["FgCyan"] = "\u001B[36m%s\u001B[0m";
    Color["FgWhite"] = "\u001B[37m%s\u001B[0m";
    Color["FgGray"] = "\u001B[90m%s\u001B[0m";
    Color["BgBlack"] = "\u001B[40m%s\u001B[0m";
    Color["BgRed"] = "\u001B[41m%s\u001B[0m";
    Color["BgGreen"] = "\u001B[42m%s\u001B[0m";
    Color["BgYellow"] = "\u001B[43m%s\u001B[0m";
    Color["BgBlue"] = "\u001B[44m%s\u001B[0m";
    Color["BgMagenta"] = "\u001B[45m%s\u001B[0m";
    Color["BgCyan"] = "\u001B[46m%s\u001B[0m";
    Color["BgWhite"] = "\u001B[47m%s\u001B[0m";
    Color["BgGray"] = "\u001B[100m%s\u001B[0m";
})(Color || (Color = {}));
export var Font;
(function (Font) {
    Font["Reset"] = "\u001B[0m%s\u001B[0m";
    Font["Bright"] = "\u001B[1m%s\u001B[0m";
    Font["Dim"] = "\u001B[2m%s\u001B[0m";
    Font["Underscore"] = "\u001B[4m%s\u001B[0m";
    Font["Blink"] = "\u001B[5m%s\u001B[0m";
    Font["Reverse"] = "\u001B[7m%s\u001B[0m";
    Font["Hidden"] = "\u001B[8m%s\u001B[0m";
    Font["Italic"] = "\u001B[3m";
    Font["Strikethrough"] = "\u001B[9m";
    Font["Bold"] = "\u001B[1m";
})(Font || (Font = {}));
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
class Log {
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
    static createList() {
        return new LogList();
    }
}
Log.colorSet = bgColors;
export default Log;
class LogList extends Log {
    constructor() {
        super(...arguments);
        this.list = [];
    }
    add(s) {
        return this.list.push(s).toString();
    }
    log() {
        this.list.forEach((s, i) => {
            console.log(`${i + 1}- ${s}`);
        });
    }
}
