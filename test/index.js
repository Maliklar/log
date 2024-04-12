import Log, { Color } from "node-fancy-log";
import { Font } from "node-fancy-log";

// Log.blink().log("HI");
Log.italic().log("HI");
Log.color(Color.BgRed).italic().log("Red");
console.log(Color.BgRed + Font.Italic, "Malik");
