import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, FormsModule, DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  newPost: IPost = { title: '', imageUrl: '', content: '', date: '' };
  posts: IPost[] = [
    {
      title: 'Little Robot',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/14/16/39/robot-8449206_960_720.jpg',
      content: 'This is the cute image of a little robot companion.',
      date: '12/02/2024',
    },
    {
      title: 'The white bear',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_960_720.jpg',
      content: 'This is the white bear criminal.',
      date: '13/02/2024',
    },
  ];
  imageError(event: any) {
    event.target.src = '../../assets/images/No-Image-Placeholder.svg';
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
      this.newPost = { title: '', imageUrl: '', content: '', date: '' };
    } else {
      alert('Make sure you fill in all required fields.');
    }
  }
}
