import { FastifyReply } from 'fastify';
export declare class ReplyMessage {
    static unauthorized(reply: FastifyReply): void;
    static notFount(reply: FastifyReply): void;
    static success(reply: FastifyReply, message: string): void;
}
