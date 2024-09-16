import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_angular_project_Ep8';
  responseData$: Observable<any> | undefined;
  loadData : Boolean = false;
  constructor(private http: HttpClient){}
    
  getData(){
      this.responseData$ = this.http.get('https://jsonplaceholder.typicode.com/users');
        this.loadData = true;
    }
  }