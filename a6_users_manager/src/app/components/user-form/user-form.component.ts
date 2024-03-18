import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
    user: any = {};
    userForm: FormGroup;
    formTitle: string = 'New User'; // Default title
    editButtonText: string = 'Edit';
    addButtonText: string = 'Save';
  
    constructor(
      private fb: FormBuilder,
      private userService: UserService, 
      private router: Router,
      private route: ActivatedRoute) {
        this.userForm = this.fb.group({
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(8)]]
        });
      }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const _id = params['_id'];
      if (_id) {
        this.userService.getUser(_id).subscribe(user => {
          this.user = user;
          this.formTitle = 'Edit User';
        });
      }
    });
  }


  onSubmit(): void {
    const operation = this.user._id ? 'updateUser' : 'createUser';
    this.userService[operation](this.user).subscribe({
      next: (response) => {
        console.log(response);
        if (operation === 'createUser') {
          Swal.fire('Created!', `The user ${response.first_name} ${response.last_name} was successfully created!`, 'success');
        } else {
          Swal.fire('Updated!', `The user ${response.first_name} ${response.last_name} was successfully updated!`, 'success');
        }
        this.router.navigate(['/home']);
      },
      error: (error) => {
        Swal.fire('Error!', `Something went wrong! Error: ${error.message}`, 'error');
      }
    });
  }


  }
  

