import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPost } from '../intefaces/post.interface';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(post: any): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `${environment?.['fbDbUrl']}/posts.json`,
      post,
    );
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
  getById(id: string): Observable<IPost> {
    return this.http
      .get<IPost>(`${environment?.['fbDbUrl']}/posts/${id}.json`)
      .pipe(
        map((post) => {
          const newPost: IPost = { ...post, id };
          return newPost;
        }),
      );
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(
      `${environment?.['fbDbUrl']}/posts/${post.id}.json`,
      post,
    );
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(
      `${environment?.['fbDbUrl']}/posts/${id}.json`,
    );
  }
}
