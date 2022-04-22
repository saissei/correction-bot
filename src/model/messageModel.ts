export type Source = {
  type: string;
  userId: string;
}

export type Message = {
  id: string;
  type: string;
  text: string;
}

export type EventMessage = {
  replyToken: string;
    type: string;
    timestamp: number;
    source: Source;
    message: Message;
}

export type Events = {
  events: EventMessage[];
};

export class MessageModel {
  private message: Events;
  private static validate (e: unknown): asserts e is Events {
    if (!e || e === null || typeof e !== 'object') return;
    if ((e as Events).events === undefined) return;
  }
  public static check(message: unknown): MessageModel {
    this.validate(message);
    return new MessageModel(message);
  }
  private constructor(message: Events) {
    this.message = message;
  }

  public toString (): string {
    return JSON.stringify(this.message);
  }

  public toJson (): Events {
    return this.message;
  }

  public replyToken (): string {
    return this.message.events[0].replyToken;
  }

  public userId (): string {
    return this.message.events[0].source.userId;
  }

  public parse (): string {
    return this.message.events[0].message.text.replace(/\n/, '');
  }

  public messageType (): string {
    return this.message.events[0].type;
  }
}
