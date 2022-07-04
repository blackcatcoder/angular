import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUserNames: string[] = ['vi'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        //'username': new FormControl(null, Validators.required),
        'username': new FormControl(null, [Validators.required, this.forBiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // 1:
    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    // 2:
    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );

    // set default value for form
    this.signupForm.setValue({
      'userData': {
        'username': 'max',
        'email': 'test1@gmail.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    // set a part of a form
    this.signupForm.patchValue(
      {
        'userData': {
          'username': 'max2'
        }
      }
    );

  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(){
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  getHobbies(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forBiddenName(control: FormControl) { //{[s: string]: boolean}
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  // no correct i will comback this later
  // forbiddenEmail(control: FormControl): Promise<any> | Observable<any>{
  //   const promise = new Promise<any>(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         if(control.value === 'test@test.com'){
  //           resolve({'emailIsForbidden': true});
  //         }else{
  //           resolve(null);
  //         }
  //       }, 800);
  //     });
  //   return promise;
  // }

}
