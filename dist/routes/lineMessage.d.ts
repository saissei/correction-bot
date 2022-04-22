import { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
declare const _default: (server: FastifyInstance<Server, IncomingMessage, ServerResponse>, opts: RouteShorthandOptions, next: (err?: Error | undefined) => void) => void;
export default _default;
