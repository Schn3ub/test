import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/models/login';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  @Input()init: Login;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm(){
    this.form = this.fb.group({
      login: [this.init.login,
        Validators.required],
      passwd: [this.init.passwd,
        Validators.required],
      });
  }
  public onClick(){
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
