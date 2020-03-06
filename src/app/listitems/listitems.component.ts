import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {ActivatedRoute, Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnInit {
  private route: ActivatedRoute;
  private router: Router;
  todolist = []
  private todoListUrl = 'http://localhost:8080/api/todo/listitems';
  private checkItemUrl = 'http://localhost:8080/api/todo/check-item';
  private removeItemUrl = 'http://localhost:8080/api/todo/remove-item';
  constructor(private http: HttpClient) {
    
  }

  getTodoList() {
   return this.http.get(this.todoListUrl).subscribe((data: any[])=>{
     console.log(data);
     this.todolist = data;
     console.log(this.todolist)
   })  ;
 }

  ngOnInit(): void {
    this.getTodoList();
  }

  onCheckItemChange( event) {
    console.log(event);
    console.log((event.target as Element).id);
    this.http.put(this.checkItemUrl+"?itemId="+(event.target as Element).id, null).subscribe(
      (response) => {
       
      }
    );
    window.location.reload();
  }

  onRemoveItem( itemid) {
    console.log(itemid);
    let httpParams = new HttpParams();

    let options = { params: httpParams };
    console.log(this.removeItemUrl+"?itemId="+itemid);
    this.http.delete(this.removeItemUrl+"?itemId="+itemid,  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe((response)=>{
    });
    window.location.reload();

  }

}
