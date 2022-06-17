import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './app.model';

@Injectable()
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categoryList: CategoryModel | undefined;
  filterTerm: string = '';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getCategoryList().subscribe((data: CategoryModel) => this.categoryList = { ...data });
  }
  getCategoryList() {
    return this.http.get<CategoryModel>('https://api.publicapis.org/categories');
  }

}
