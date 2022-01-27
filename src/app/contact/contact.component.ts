import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Contact } from '../model/contact';
import { SenderContactService } from '../services/sender-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name!:FormControl;
  subject!:FormControl;
  email!:FormControl;
  content!:FormControl;
  submit:boolean = false;
  invalid:boolean = false;
  contact!:Contact;

  constructor(private sender:SenderContactService) { }

  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.subject = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  onSubmit(event:Event): void {
    event.preventDefault();
    this.submit = true;
    if(this.email.invalid || this.name.invalid || this.subject.invalid || this.content.invalid) {
      this.invalid = true;
    } else {
      const contact = this.createContact();
      this.sender.setContact(contact).send();
      this.invalid = false;
      this.clearFieds();
    }
  }

  private clearFieds(): void {
    this.name.setValue('');
    this.email.setValue('');
    this.subject.setValue('');
    this.content.setValue('');
  }

  private createContact(): Contact {
    const contact = new Contact(
      this.name.value, 
      this.email.value, 
      this.subject.value, 
      this.content.value
    );
    return contact;
  }

}
