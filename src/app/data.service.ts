import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  menuItems: string[] = ['Idli', 'Poha', 'Upma'];
  private basrUrl: string = 'http://localhost:5555/products';
  constructor(private http: Http) { }

  addItem(item) {
    return this.http.post(this.basrUrl, item);
  }

  getItems() {
    return this.http.get(this.basrUrl);
  }
  getItem(id) {
    return this.http.get(this.basrUrl+"/"+id);
  }

  updateItem(item, id) {
    return this.http.put(this.basrUrl+"/"+id, item);
  }

  deleteItem(id) {
    return this.http.delete(this.basrUrl+"/"+id);
  }
}
