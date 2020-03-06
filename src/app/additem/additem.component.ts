import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  item;
  itemForm;
  todolist =new Array();
  submitUrl = "http://localhost:8080/api/todo/add-item";

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      title:['', Validators.required],
      description:''
    });
    console.log(this.itemForm.value);
  }

  ngOnInit(): void {
    
  }

  onSubmit(item){
    if (this.itemForm.invalid) {      
      return;
    }
    console.log(item);      
    console.log(this.submitUrl);
    this.http.post(this.submitUrl, item).subscribe(data => {
      console.log(data);
    },
    err => {
        console.log('Error: ' + err.error);
    });
    this.itemForm.reset();
    return;
  }

}
