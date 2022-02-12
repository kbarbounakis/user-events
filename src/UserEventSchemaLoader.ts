import { ConfigurationBase } from '@themost/common';
import { FileSchemaLoaderStrategy } from '@themost/data';

class UserEventSchemaLoader extends FileSchemaLoaderStrategy {
    
    constructor(configuration: ConfigurationBase) {
        super(configuration);
    }
}

export {
    UserEventSchemaLoader
}