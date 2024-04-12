export declare enum Color {
    FgBlack = "\u001B[30m",
    FgRed = "\u001B[31m",
    FgGreen = "\u001B[32m",
    FgYellow = "\u001B[33m",
    FgBlue = "\u001B[34m",
    FgMagenta = "\u001B[35m",
    FgCyan = "\u001B[36m",
    FgWhite = "\u001B[37m",
    FgGray = "\u001B[90m",
    BgBlack = "\u001B[40m",
    BgRed = "\u001B[41m",
    BgGreen = "\u001B[42m",
    BgYellow = "\u001B[43m",
    BgBlue = "\u001B[44m",
    BgMagenta = "\u001B[45m",
    BgCyan = "\u001B[46m",
    BgWhite = "\u001B[47m",
    BgGray = "\u001B[100m"
}
export declare enum Font {
    Bright = "\u001B[1m",
    Dim = "\u001B[2m",
    Underscore = "\u001B[4m",
    Blink = "\u001B[5m",
    Reverse = "\u001B[7m",
    Hidden = "\u001B[8m",
    Italic = "\u001B[3m",
    Strikethrough = "\u001B[9m",
    Bold = "\u001B[1m"
}
export declare const bgColors: {
    readonly black: Color.BgBlack;
    readonly red: Color.BgRed;
    readonly green: Color.BgGreen;
    readonly yellow: Color.BgYellow;
    readonly blue: Color.BgBlue;
    readonly magenta: Color.BgMagenta;
    readonly cyan: Color.BgCyan;
    readonly white: Color.BgWhite;
    readonly gray: Color.BgGray;
};
export declare const fgColors: {
    readonly black: Color.FgBlack;
    readonly red: Color.FgRed;
    readonly green: Color.FgGreen;
    readonly yellow: Color.FgYellow;
    readonly blue: Color.FgBlue;
    readonly magenta: Color.FgMagenta;
    readonly cyan: Color.FgCyan;
    readonly white: Color.FgWhite;
    readonly gray: Color.FgGray;
};
export declare const font: {
    readonly blink: Font.Blink;
    readonly dim: Font.Dim;
    readonly hidden: Font.Hidden;
    readonly reverse: Font.Reverse;
    readonly underscore: Font.Underscore;
    readonly italic: Font.Italic;
    readonly strikethrough: Font.Strikethrough;
    readonly bold: Font.Bright;
};
type InputStyle = "blink" | "dim" | "hidden" | "reverse" | "underscore" | "italic" | "strikethrough" | "bold";
type InputColor = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";
export default class Log {
    static fgC: Color | undefined;
    static bgC: Color | undefined;
    static f: Font | undefined;
    /**
     *
     * @param s String to print
     */
    static log(s: string): void;
    /**
     *
     * @param c String containing a color
     * @returns Instance of static Log class
     * @description Sets the text color
     * @example color("green")
     */
    static color(c: InputColor): typeof Log;
    /**
     *
     * @param c String containing a color
     * @returns Instance of static Log class
     * @description Sets the text's background color
     * @example bgColor("green")
     */
    static bgColor(c: InputColor): typeof Log;
    /**
     * @description Sets the font style to blink
     * @returns Instance of static Log class
     */
    static blink(): typeof Log;
    /**
     * @description Sets the font style to dim
     * @returns Instance of static Log class
     */
    static dim(): typeof Log;
    /**
     * @description Sets the font style to hidden
     * @returns Instance of static Log class
     */
    static hidden(): typeof Log;
    /**
     * @description Sets the font style to reverse
     * @returns Instance of static Log class
     */
    static reverse(): typeof Log;
    /**
     * @description Sets the font style to underscore
     * @returns Instance of static Log class
     */
    static underscore(): typeof Log;
    /**
     * @description Sets the font style to italic
     * @returns Instance of static Log class
     */
    static italic(): typeof Log;
    /**
     * @description Sets the font style to strikethrough
     * @returns Instance of static Log class
     */
    static strike(): typeof Log;
    /**
     * @description Sets the font style to bold
     * @returns Instance of static Log class
     */
    static bold(): typeof Log;
    /**
     *
     * @param f InputStyle string
     * @description Sets the font style
     * @returns Instance of static Log class
     * @example style("bold").log("Hello");
     */
    static style(f: InputStyle): typeof Log;
    static createList(): LogList;
}
declare class LogList extends Log {
    list: string[];
    add(s: string): string;
    log(): void;
}
export {};
