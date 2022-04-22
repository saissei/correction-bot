"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
const app_root_path_1 = __importDefault(require("app-root-path"));
class LocalLogger {
    constructor() {
        this.appName = process.env.npm_package_name;
        this.logger = winston_1.default.createLogger({
            format: winston_1.default.format.combine(winston_1.default.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),
            defaultMeta: { service: this.appName },
            transports: [
                new winston_1.default.transports.Console({ format: winston_1.default.format.simple() }),
                new winston_1.default.transports.DailyRotateFile({
                    filename: `${this.appName}-%DATE%.log`,
                    datePattern: 'YYYYMMDDHH',
                    dirname: `${app_root_path_1.default}/logs/`,
                    zippedArchive: true,
                    maxFiles: '6m',
                    handleExceptions: true,
                })
            ]
        });
        this.logger.exceptions.unhandle();
        this.logger.setMaxListeners(0);
    }
    debug(message) {
        const logMessage = {
            level: 'debug',
            message
        };
        this.logger.log(logMessage);
    }
    info(message) {
        const logMessage = {
            level: 'info',
            message
        };
        this.logger.log(logMessage);
    }
    warn(message) {
        const logMessage = {
            level: 'warn',
            message
        };
        this.logger.warn(logMessage);
    }
    error(message) {
        const logMessage = {
            level: 'error',
            message
        };
        this.logger.error(logMessage);
    }
}
exports.default = LocalLogger;
//# sourceMappingURL=main.js.map