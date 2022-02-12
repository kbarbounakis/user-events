import { DataObject } from "@themost/data";

class UserEvent extends DataObject {

    /**
     * The identifier of this item
     */
    public id?: string;
    /**
     * An additional type for the item
     */
    public additionalType?: string;
    /**
     * An additional type for the item
     */
    public sameAs?: string;
    /**
     * The name of the sender of this event
     */
    public sender?: string;
    /**
     * The name of the recipient - user or group- that is going to be notified by this event
     */
    public recipient?: string;
    /**
    * The name of the sender of this event
    */
    public subject?: string;
    /**
   * The name of the sender of this event
   */
    public body?: string;
    /**
     * A URL formatted string which represents the subject matter of this item
     */
    public about?: string;
    /**
     * The identifier of the client application which may be the target of this event
     */
    public client?: string;
    /**
     * The scope of this user event
     */
    public scope?: string;
    /**
     * The date/time at which the event was sent to the recipient 
     */
    public dateSent?: Date;
    /**
     * The date/time at which this event will be expired
     */
    public expiresAt?: Date;
    /**
     * The date/time at which this item was created
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