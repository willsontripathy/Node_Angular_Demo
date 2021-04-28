import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, DefaultHttpUrlGenerator, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "../Models/employee.model";

@Injectable({ providedIn: 'root' })
export class PostService extends DefaultDataService<Post> {
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('Post', serviceElementsFactory);
//   }
constructor(http: HttpClient, httpUrlGenerator: DefaultHttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);
  }
  getAll():Observable<Post[]>{
      return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
          map((data:Post[]) => data.filter(d => d.id > 50))
      );
  }
}