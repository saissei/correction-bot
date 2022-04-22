export declare type Source = {
    type: string;
    userId: string;
};
export declare type Message = {
    id: string;
    type: string;
    text: string;
};
export declare type EventMessage = {
    replyToken: string;
    type: string;
    timestamp: number;
    source: Source;
    message: Message;
};
export declare type Events = {
    destination: string;
    events: EventMessage[];
};
export declare class MessageModel {
    private message;
    private static validate;
    static check(message: unknown): MessageModel;
    private constructor();
    toString(): string;
    toJson(): Events;
    destination(): string;
    replyToken(): string;
    userId(): string;
    parse(): string;
    messageType(): string;
}
