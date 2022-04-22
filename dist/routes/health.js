"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Health = void 0;
class Health {
    static check(req, rep) {
        rep.header('Content-Type', 'application/json').status(200).send('OK');
    }
}
exports.Health = Health;
//# sourceMappingURL=health.js.map