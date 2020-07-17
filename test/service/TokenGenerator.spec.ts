import { TokenGeneratorService } from '../../src/service/TokenGeneratorService'

describe('TokenGenerator', () => {
    it('should be string', async () => {
        const tokenGenerator = new TokenGeneratorService()
        let token: string = await tokenGenerator.generateToken(64);
        expect(typeof 'token').toBe('string');
    });

    it('should be 64 character length', async () => {
        const tokenGenerator = new TokenGeneratorService()
        let token: string = await tokenGenerator.generateToken(64);
        expect(token.length).toEqual(64);
    });
});