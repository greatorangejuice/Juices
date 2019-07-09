import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [Validators.required, this.checkLength]),
      }),
      country: new FormControl('by'),
      answer: new FormControl('yes'),
    });
  }

  onSubmit() {
    console.log('Submitted!', this.form);
  }
  // FIX error object!
  checkLength(control: FormControl) {
    if (control.value.lenght <= 4) {
      return {
        'lenghtError': true,
      };
    }
    return null;
  }
}
