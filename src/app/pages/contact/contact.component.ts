import { Email } from './../../models/email.model';
import { EmailApiServiceService } from './../../service/email-api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myform: FormGroup;
  // public email: Email;
  constructor(private fb: FormBuilder, private emailService: EmailApiServiceService) {
    this.myform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      comments: ['', Validators.required]
    });

  }
  sendMail() {
    const email = new Email();
    email.name = this.myform.get('name').value;
    email.email = this.myform.value.email;
    email.subject = this.myform.value.subject;
    email.comments = this.myform.value.comments;
    console.log(email);

  }

  ngOnInit() {
  }

}
