import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser.interface';
import Swal from 'sweetalert2';
import { HelperService } from '../../services/helper.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private userService = inject(UserService);  
  users: IUser[] = [];

  constructor(
    private router: Router,
    public helper: HelperService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next:(users:any)=>{
        this.users = users.results;
        console.log('data recieved succesfully')
      },
      error: (error) => console.log('Error getting data:',error)
    })
  }

  editUser(_id: string): void {
    this.router.navigate(['/updateuser', _id]);
  }

deleteConfirm(_id: string): void {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.deleteUser(_id).subscribe({
        next: () => {
          Swal.fire(
            'Deleted!',
            'The user has been deleted.',
            'success'
          );
        },
        error: (error) => {
          Swal.fire(
            'Error!',
            'There was an issue deleting the user: ' + error.message,
            'error'
          );
        }
      });
    }
  });
}


}
