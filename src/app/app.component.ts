import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('form', {static: false}) form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'by';

  formData = {};
  isSubmitted = false;

  submitForm() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    console.log(this.form);
    this.form.resetForm();
  }

  addRandEmail() {
    const randomEmail = 'test@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randomEmail,
    //   },
    //   country: '',
    //   answer: 'yes',
    // });
    this.form.form.patchValue({
      user: {email: randomEmail},
    });
  }
}
