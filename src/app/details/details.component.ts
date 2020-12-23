import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [PostsService]
})
export class DetailsComponent implements OnInit {
  postsDetails: any;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {

      this.postsService.getPostsByID(params.id).subscribe(res => {
        this.postsDetails = res
      })

    });
  }

}
