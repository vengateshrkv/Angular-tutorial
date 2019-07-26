import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   name: new FormControl('Benedict',Validators.required,
      // Validators.minLength(4)),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });
    this.myForm = this.fb.group({
      name: ['Benedict', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

}
