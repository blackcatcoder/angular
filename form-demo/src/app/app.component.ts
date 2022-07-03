import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  signupForm!: NgForm;
  defaultQuestion = 'pet'
  answer: string = "";
  title = 'form-demo';
  genders = ['male', 'female'];
  user = {
    userName: "",
    email: "",
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    // option 1 -> entire form
    // this.signupForm?.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // })

    // option 2 -> a part form
    this.signupForm?.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });

  }

  //onSubmit(form: NgForm){
    //console.log("submit")
    //console.log(form);
  //}

  onSubmit(){
    console.log(this.signupForm);
    this.user.userName = this.signupForm.value.userData.userName;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.email;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    console.log(this.user);

    this.signupForm.reset();
  }

}
 