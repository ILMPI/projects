import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser.interface';
import { HelperService } from '../../services/helper.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
 // private userService = inject(UserService); 
   
  users: IUser[] = [];

  constructor(
    public helper: HelperService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next:(users:any)=>{
        this.users = users.results;
        console.log(users);
        console.log('data recieved succesfully')
      },
      error: (error) => console.log('Error getting data:',error)
    })
  }

}
