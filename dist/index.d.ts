export declare enum Color {
    FgBlack = "\u001B[30m%s\u001B[0m",
    FgRed = "\u001B[31m%s\u001B[0m",
    FgGreen = "\u001B[32m%s\u001B[0m",
    FgYellow = "\u001B[33m%s\u001B[0m",
    FgBlue = "\u001B[34m%s\u001B[0m",
    FgMagenta = "\u001B[35m%s\u001B[0m",
    FgCyan = "\u001B[36m%s\u001B[0m",
    FgWhite = "\u001B[37m%s\u001B[0m",
    FgGray = "\u001B[90m%s\u001B[0m",
    BgBlack = "\u001B[40m%s\u001B[0m",
    BgRed = "\u001B[41m%s\u001B[0m",
    BgGreen = "\u001B[42m%s\u001B[0m",
    BgYellow = "\u001B[43m%s\u001B[0m",
    BgBlue = "\u001B[44m%s\u001B[0m",
    BgMagenta = "\u001B[45m%s\u001B[0m",
    BgCyan = "\u001B[46m%s\u001B[0m",
    BgWhite = "\u001B[47m%s\u001B[0m",
    BgGray = "\u001B[100m%s\u001B[0m"
}
export declare enum Font {
    Reset = "\u001B[0m%s\u001B[0m",
    Bright = "\u001B[1m%s\u001B[0m",
    Dim = "\u001B[2m%s\u001B[0m",
    Underscore = "\u001B[4m%s\u001B[0m",
    Blink = "\u001B[5m%s\u001B[0m",
    Reverse = "\u001B[7m%s\u001B[0m",
    Hidden = "\u001B[8m%s\u001B[0m",
    Italic = "\u001B[3m%s\u001B[0m",
    Strikethrough = "\u001B[9m%s\u001B[0m",
    Bold = "\u001B[1m%s\u001B[0m"
}
export declare const bgColors: {
    Black: Color;
    Red: Color;
    Green: Color;
    Yellow: Color;
    Blue: Color;
    Magenta: Color;
    Cyan: Color;
    White: Color;
    Gray: Color;
};
export declare const fgColors: {
    Black: Color;
    Red: Color;
    Green: Color;
    Yellow: Color;
    Blue: Color;
    Magenta: Color;
    Cyan: Color;
    White: Color;
    Gray: Color;
};
export declare const font: {
    Reset: Font;
    Blink: Font;
    Dim: Font;
    Hidden: Font;
    Reverse: Font;
    Underscore: Font;
    Italic: Font;
    Strikethrough: Font;
    Bold: Font;
};
export default class Log {
    static c: Color | undefined;
    static colorSet: {
        Black: Color;
        Red: Color;
        Green: Color;
        Yellow: Color;
        Blue: Color;
        Magenta: Color;
        Cyan: Color;
        White: Color;
        Gray: Color;
    };
    static f: Font | undefined;
    /**
     *
     * @param c Color for the string
     * @returns instance of static Log class
     */
    static color(c: Color): typeof Log;
    /**
     *
     * @param s String to print
     */
    static log(s: string): void;
    /**
     * @description background color
     */
    static bg(c?: Color): void;
    /**
     * @description foreground color
     */
    static fr(c?: Color): void;
    /**
     *
     * @param s String to print
     * @description Prints an error message
     */
    static error(s: string): void;
    /**
     *
     * @param s String to print
     * @description Prints an warning message
     */
    static warning(s: string): void;
    /**
     *
     * @param s String to print
     * @description Prints an progress message
     */
    static progress(s: string): void;
    /**
     *
     * @param s String to print
     * @description Prints an success message
     */
    static success(s: string): void;
    static reset(): typeof Log;
    static blink(): typeof Log;
    static dim(): typeof Log;
    static hidden(): typeof Log;
    static reverse(): typeof Log;
    static underscore(): typeof Log;
    static italic(): typeof Log;
    static strike(): typeof Log;
    static bold(): typeof Log;
    static style(f: Font): void;
    static clear(): void;
    static createList(): LogList;
}
declare class LogList extends Log {
    list: string[];
    add(s: string): string;
    log(): void;
}
export {};
