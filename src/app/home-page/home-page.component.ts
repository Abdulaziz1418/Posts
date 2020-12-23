import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [PostsService]
})
export class HomePageComponent implements OnInit {
  posts: any;
  page = 1;
  pageSize = 10;
  collectionSize;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res
      this.collectionSize = this.posts.length;
    })
  }

  openPostsDetails(id) {
    this.router.navigate(['/details/', id]);
  }

}
