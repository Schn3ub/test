import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  @Input() init: Prestation;
  @Output() submited: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public states = State;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta,
      Validators.required],
      client: [this.init.client,
      Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      comments: [this.init.comments],
      state: [this.init.state]
    });
  }

public onClick() {
  console.log(this.form.value);
  this.submited.emit(this.form.value);
}

}
