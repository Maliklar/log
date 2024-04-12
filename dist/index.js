export var Color;
(function (Color) {
    Color["FgBlack"] = "\u001B[30m";
    Color["FgRed"] = "\u001B[31m";
    Color["FgGreen"] = "\u001B[32m";
    Color["FgYellow"] = "\u001B[33m";
    Color["FgBlue"] = "\u001B[34m";
    Color["FgMagenta"] = "\u001B[35m";
    Color["FgCyan"] = "\u001B[36m";
    Color["FgWhite"] = "\u001B[37m";
    Color["FgGray"] = "\u001B[90m";
    Color["BgBlack"] = "\u001B[40m";
    Color["BgRed"] = "\u001B[41m";
    Color["BgGreen"] = "\u001B[42m";
    Color["BgYellow"] = "\u001B[43m";
    Color["BgBlue"] = "\u001B[44m";
    Color["BgMagenta"] = "\u001B[45m";
    Color["BgCyan"] = "\u001B[46m";
    Color["BgWhite"] = "\u001B[47m";
    Color["BgGray"] = "\u001B[100m";
})(Color || (Color = {}));
export var Font;
(function (Font) {
    Font["Bright"] = "\u001B[1m";
    Font["Dim"] = "\u001B[2m";
    Font["Underscore"] = "\u001B[4m";
    Font["Blink"] = "\u001B[5m";
    Font["Reverse"] = "\u001B[7m";
    Font["Hidden"] = "\u001B[8m";
    Font["Italic"] = "\u001B[3m";
    Font["Strikethrough"] = "\u001B[9m";
    Font["Bold"] = "\u001B[1m";
})(Font || (Font = {}));
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
};
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
};
export const font = {
    blink: Font.Blink,
    dim: Font.Dim,
    hidden: Font.Hidden,
    reverse: Font.Reverse,
    underscore: Font.Underscore,
    italic: Font.Italic,
    strikethrough: Font.Strikethrough,
    bold: Font.Bold,
};
export default class Log {
    /**
     *
     * @param s String to print
     */
    static log(s) {
        const END = "\x1b[0m";
        const arr = [this.fgC, this.bgC, this.f].filter((i) => !!i);
        if (arr)
            console.log(...arr, s, END);
        else
            console.log(s);
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
    static color(c) {
        if (c in fgColors)
            this.fgC = fgColors[c];
        return this;
    }
    /**
     *
     * @param c String containing a color
     * @returns Instance of static Log class
     * @description Sets the text's background color
     * @example bgColor("green")
     */
    static bgColor(c) {
        if (c in bgColors)
            this.bgC = bgColors[c];
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
    static style(f) {
        if (f in font)
            this.f = font[f];
        return this;
    }
    static createList() {
        return new LogList();
    }
}
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
