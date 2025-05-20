import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  constructor(private postdata:PostServiceService){}

// Call POST
  createPost() {
    const newPost = { title: 'New Post', body: 'Post content', userId: 1 };
    this.postdata.addPost(newPost).subscribe(response => {
      console.log('Post Created:', response);
    });
  }

  // Call PUT
  updatePost() {
    const updatedPost = { id: 1, title: 'Updated Title', body: 'Updated Content', userId: 1 };
    this.postdata.updatePost(1, updatedPost).subscribe(response => {
      console.log('Post Updated:', response);
    });
  }

  // Call DELETE
  deletePost() {
    this.postdata.deletePost(1).subscribe(response => {
      console.log('Post Deleted:', response);
    });
  }

}
