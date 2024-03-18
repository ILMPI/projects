import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private router: Router,
    private service: UserService,
  ) { }



  deleteConfirm(_id: string, redirectToHome: boolean = false): void {
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
        this.service.deleteUser(_id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'The user has been deleted.', 'success');
            if (redirectToHome) {
              this.router.navigate(['/home']);
            }
          },
          error: (error) => {
            Swal.fire('Error!', 'There was an issue deleting the user: ' + error.message, 'error');
          }
        });
      }
    });
  }






}
