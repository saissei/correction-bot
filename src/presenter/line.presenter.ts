import { Client, TextMessage } from '@line/bot-sdk';
import { MessageModel } from '../model/messageModel';

export class LinePresenter {
  private lineClient: Client;
  public static init (): LinePresenter {
    const channelAccessToken = process.env.channelAccessToken;
    const channelSecret = process.env.channelSecret;
    if (!channelAccessToken || !channelSecret) {
      throw new Error('Configuration information is missing')
    };

    const lineClient: Client = new Client({channelAccessToken, channelSecret});
    return new LinePresenter(lineClient);
  }
  private constructor(lineClient: Client) {
    this.lineClient = lineClient;
  }

  public async sendTextMessage(messageModel: MessageModel, textMessage: TextMessage): Promise<void> {
    const client = this.lineClient;
    const replyToken = messageModel.replyToken();
    await client.replyMessage(replyToken, textMessage);
  }

}
