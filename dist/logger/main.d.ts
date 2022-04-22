import 'winston-daily-rotate-file';
export default class LocalLogger {
    private appName;
    private logger;
    constructor();
    debug(message: string): void;
    info(message: string): void;
    warn(message: unknown): void;
    error(message: unknown): void;
}
