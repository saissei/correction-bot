import { TextMessage } from "@line/bot-sdk";
import { MessageModel } from "./messageModel";
export declare class LineMessageModel {
    static messageToLineMessage(messageModel: MessageModel): TextMessage;
}
