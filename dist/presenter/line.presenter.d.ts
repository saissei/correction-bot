import { TextMessage } from '@line/bot-sdk';
import { MessageModel } from '../model/messageModel';
export declare class LinePresenter {
    private lineClient;
    static init(): LinePresenter;
    private constructor();
    sendTextMessage(messageModel: MessageModel, textMessage: TextMessage): Promise<void>;
}
