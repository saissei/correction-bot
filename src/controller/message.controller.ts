import { FastifyReply, FastifyRequest } from "fastify";
import { LineInteractor } from "../interactor/line.interactor";
import { LineMessageModel } from "../model/lineMessageModel";
import { MessageModel } from "../model/messageModel";
import { LinePresenter } from "../presenter/line.presenter";
import { ReplyMessage } from "../presenter/ReplyMessage";
const lineClient = LinePresenter.init();

export class MessageController {
  public static async handle (req: FastifyRequest, rep: FastifyReply): Promise<void> {
    const signature = req.headers['x-line-signature'];
    const body = req.body;
    if (typeof signature !== 'string') {
      ReplyMessage.unauthorized(rep);
      return;
    }
    const messageModel = MessageModel.check(body);

    const isBot = LineInteractor.botCheck(messageModel);
    if (isBot) {
      ReplyMessage.success(rep, 'OK');
      return;
    }


    const verify = LineInteractor.signatureCheck(messageModel, signature);

    if (!verify) {
      ReplyMessage.unauthorized(rep);
      return;
    }



    if (!LineInteractor.messageTypeCheck(messageModel)) {
      return;
    }

    const textMessage = LineMessageModel.messageToLineMessage(messageModel);
    await lineClient.sendTextMessage(messageModel, textMessage);
    ReplyMessage.success(rep, 'OK');
  }
}
