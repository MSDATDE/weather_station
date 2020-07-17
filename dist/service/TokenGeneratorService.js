"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGeneratorService = void 0;
class TokenGeneratorService {
    async generateToken(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let token = '';
        for (var i = 0; i < length; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }
        return token;
    }
}
exports.TokenGeneratorService = TokenGeneratorService;
