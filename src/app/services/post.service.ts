import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPost } from '../intefaces/post.interface';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(post: any): Observable<any> {
    return this.http.post(`${environment?.['fbDbUrl']}/posts.json`, post);
  }

  getAllPost(): Observable<IPost[]> {
    return this.http
      .get<{ [key: string]: IPost }>(`${environment?.['fbDbUrl']}/posts.json`)
      .pipe(
        map((res) => {
          return Object.keys(res).map((key) => ({
            ...res[key],
            id: key,
          }));
        }),
      );
  }
}
