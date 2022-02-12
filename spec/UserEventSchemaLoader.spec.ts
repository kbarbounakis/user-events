import { ConfigurationBase } from '@themost/common';
import { UserEventSchemaLoader } from '../src';
describe('UserEventSchemaLoader', () => {
    it('should create instance', async () => {
        const service = new UserEventSchemaLoader(new ConfigurationBase());
    });
});