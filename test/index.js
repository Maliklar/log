import Log from "node-fancy-log";

Log.blink().log("HI");
Log.color("red").log("HI");
Log.color("green").bgColor("green").bold().log("HI");
// console.log("\x1b[31m" + "\x1b[45m", "HI", "\x1b[0m", "\x1b[31m");
// console.log("\x1b[33m%s\x1b[0m", "hi!");
// const list = Log.createList();
// list.add("sdfasdf");
// list.log();
