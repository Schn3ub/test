import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input()init: Client;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  public stateclient = Stateclient;
  public form: FormGroup;
  constructor( private fb: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }
  private createForm(){
    this.form = this.fb.group({
      name: [this.init.name,
        Validators.required],
      email: [this.init.email,
        Validators.required],
      image: [this.init.image],
      state: [this.init.state]
    });
  }
  public onClick(){
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
