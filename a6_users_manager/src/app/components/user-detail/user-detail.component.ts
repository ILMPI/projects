import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser.interface';
import Swal from 'sweetalert2';
import { HelperService } from '../../services/helper.service';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
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
    private router: Router,
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


  editUser(_id: string): void {
    this.router.navigate(['/updateuser', _id]);
  }

  /*deleteConfirm(_id: string): void {
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
            this.goBack()
            // Additional actions like navigating away or updating a list
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
  */

}
