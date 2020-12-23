import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { posts } from '../models/posts.model';


@Injectable()
export class PostsService {

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get<posts>('https://jsonplaceholder.typicode.com/posts')
    }

    getPostsByID(id) {
        return this.http.get<posts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}