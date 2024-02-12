import { Component } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  newPost: IPost = { title: '', imageUrl: '', content: '', date: new Date() };
  posts: IPost[] = [
    {
      title: 'Little Robot',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/14/16/39/robot-8449206_960_720.jpg',
      content: 'This is the cute image of a little robot companion.',
      date: new Date(),
    },
    {
      title: 'The white bear',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_960_720.jpg',
      content: 'This is the white bear criminal.',
      date: new Date(),
    },
  ];
  imageError(event: any) {
    event.target.src = '../assets/images/No-Image-Placeholder.svg';
    event.target.alt = 'No Image Available';
  }

  addPost() {
    if (
      this.newPost.title &&
      this.newPost.imageUrl &&
      this.newPost.content &&
      this.newPost.date
    ) {
      this.posts.push({ ...this.newPost });
      this.newPost = { title: '', imageUrl: '', content: '', date: new Date() };
    } else {
      alert('Make sure you fill in all required fields.');
    }
  }
}
