"use strict";

import Fastify from "fastify";
import * as dotenv from "dotenv";
import helmet from 'fastify-helmet';
import LineMessage from '../routes/lineMessage';
dotenv.config();

// Require the framework

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.register(helmet);
app.register(LineMessage, {prefix: '/'});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.listen(3000, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
})
