export class  Event {
  constructor(
    public uid?: string,
    public name?: string,
    public allergies?: string,
    public category?: string,
    public date?: Date,
    public time?: string,
    public meal?: string,
    public price?: number,
    public shop?: boolean,
    public visitNumber?: number,
    public visiter?: number,
    public addressee?: string,
    public whoCooks?: string,
    public whoShops?: string,
    public registrationperiod?: Date,
    public confirmationdate?: Date,
  ) {
  }
}
