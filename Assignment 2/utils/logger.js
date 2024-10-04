import winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ timestamp, level, message }) => `[${timestamp}] ${level} ${message}`);

winston.addColors({
    error: "bold red",
    warn: "bold yellow",
    info: "bold cyan",
    debug: "bold magenta"
});

const logger = winston.createLogger({
    format: combine(
        colorize({ all: true }),
        timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
        logFormat
    ),
    transports: [
        new winston.transports.File({ filename: "Assignment 2/log/combined.log" }),
        new winston.transports.File({ filename: "Assignment 2/log/error.log", level: "error" }),
        new winston.transports.Console({ format: combine(logFormat, colorize({ all: true })) })
    ]
});

export default logger;