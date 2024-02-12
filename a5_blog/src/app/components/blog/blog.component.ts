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
      title: 'Little robot Gizmo and Whiskers',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/14/16/39/robot-8449206_960_720.jpg',
      content:
        'In the heart of a cozy home, an adorable little robot named Gizmo embarked on a mission to tidy up. With its big, expressive eyes focused and tiny arms at the ready, Gizmo set about organizing a jumble of toys. But each time Gizmo sorted a toy, its playful pet cat, Whiskers, would pounce, scattering them anew. The scene was a comical dance of order and chaos, with Gizmo determinedly picking up toys and Whiskers gleefully undoing all the hard work. In the end, Gizmo decided that playing with Whiskers was much more fun than cleaning up, turning a chore into a delightful game for two.',
      date: '02/12/2024',
    },
    {
      title: 'The Case of the Polar Intruder',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_960_720.jpg',
      content:
        "In the cozy town of Snowy Peaks, the local bakery's famous chocolate cakes started mysteriously disappearing. The prime suspect? A cheeky polar bear seen loitering nearby. Enter Detective Paws, a clever little polar bear with a knack for sweets and mysteries. Following a trail of chocolate crumbs and snowy paw prints, Detective Paws discovered the real thief: a family of mischievous raccoons using the polar bear's naps as their chance to swipe the cakes. With a gentle growl and a wag of his fluffy tail, Paws forgave the raccoons, and together, they shared the remaining cake, turning a caper into a celebration.",
      date: '02/10/2024',
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
      this.posts.unshift({ ...this.newPost }); //!!!!!!!!!!!!!!
      this.newPost = { title: '', imageUrl: '', content: '', date: '' };
    } else {
      alert('Make sure you fill in all required fields.');
    }
  }
}
