import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { SenderInterface } from './interface/senderInterface';

@Injectable({
  providedIn: 'root'
})
export class SenderContactService implements SenderInterface {

  private contact?:Contact;
  private to?:string;

  constructor() { }

  public setContact(contact:Contact): this {
    this.contact = contact;
    return this;
  }

  public setTo(to:string):this {
    this.to = to;
    return this;
  }

  public send(): boolean {
    if(this.contact !== undefined && this.to !== undefined) {
      return true;
    } else {
      throw new Error('Invalid data or invalid value of to');
    }
  }

}
