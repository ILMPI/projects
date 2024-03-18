import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser.interface';
import { HelperService } from '../../services/helper.service';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  user: IUser = {
    _id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    image: '',
  }


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public helper: HelperService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const _id = params['_id'];
      this.userService.getUser(_id).subscribe({
        next: (user: any) => {
          this.user = user;
          console.log('User data recieved successfully:', this.user);
        },
        error: error => console.log('Error getting user details:', error)
      });
    });
  }


}
