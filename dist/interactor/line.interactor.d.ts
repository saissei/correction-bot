import { MessageModel } from "../model/messageModel";
export declare class LineInteractor {
    static signatureCheck(messageModel: MessageModel, signature: string): boolean;
    static botCheck(messageModel: MessageModel): boolean;
    static messageTypeCheck(messageModel: MessageModel): boolean;
}
