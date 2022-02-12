import { DataObject } from "@themost/data";

class UserEvent extends DataObject {

    /**
     * The identifier of this item
     */
    public id?: string;
    /**
     * The name of the recipient - user or group- that is going to be notified by this event
     */
    public recipient?: string;
    /**
     * The identifier of the client application which may be the target of this event
     */
    public client?: string;
    /**
     * The scope of this user event
     */
    public scope?: string;
    /**
     * The date on which this item was created.
     */
    public dateCreated?: Date;

    async getRecipient(): Promise<DataObject> {
        if (this.recipient == null) {
            return null;
        }
        return await this.context.model('Account').where('name').equal(this.recipient).silent().getTypedItem();
    }
}

export {
    UserEvent
}