import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ISendUser } from '../../interfaces/isend-user.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  userForm = new FormGroup({
    _id: new FormControl(''), // Include _id for updates
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''), // Include if part of ISendUser
    password: new FormControl(''), // Include if part of ISendUser
    image: new FormControl(''),
  });

  isUpdating: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['_id'];
      this.isUpdating = !!userId; // Set isUpdating based on the presence of a user ID
      if (this.isUpdating) {
        this.userService.getUser(userId).subscribe(user => {
          this.userForm.patchValue(user); // Populate form with existing user data
          this.userForm.get('_id')?.setValue(userId); // Set _id for updates
        });
      }
    });
  }

  onSubmit() {
    // Ensure all required fields are accounted for and have default values if necessary
    const formValue: Partial<ISendUser> = {
      first_name: this.userForm.value.first_name || '',
      last_name: this.userForm.value.last_name || '',
      email: this.userForm.value.email || '',
      username: this.userForm.value.username || undefined,  // Handle optional fields
      password: this.userForm.value.password || undefined,  // Handle optional fields
      image: this.userForm.value.image || ''
    };
  
    if (this.userForm.value._id) {
      const updateUserPayload: ISendUser = { ...formValue, _id: this.userForm.value._id } as ISendUser;
      this.userService.updateUser(updateUserPayload).subscribe({
        next: (response) => console.log('User updated:', response),
        error: (error) => console.error('Error updating user:', error)
      });
    } else {
      const createUserPayload: ISendUser = formValue as ISendUser;
      this.userService.createUser(createUserPayload).subscribe({
        next: (response) => console.log('New user created:', response),
        error: (error) => console.error('Error creating new user:', error)
      });
    }
  }
  


  






  




  
 // onSubmit() {
  //   if (this.isUpdating) {
  //     const userId = this.route.snapshot.params['_id'];
  //     this.userService.updateUser(userId, this.userForm.value).subscribe({
  //       next: (response) => {
  //         Swal.fire({
  //           title: '¡Actualizado!',
  //           text: `El usuario ${this.userForm.value.name} ${this.userForm.value.surname} ha sido actualizado con éxito.`,
  //           icon: 'success',
  //           confirmButtonColor: '#3085d6',
  //           confirmButtonText: 'Aceptar'
  //         });
  //       },
  //       error: (error) => {
  //         Swal.fire({
  //           title: 'Error',
  //           text: 'Ha ocurrido un error al actualizar el usuario.',
  //           icon: 'error',
  //           confirmButtonColor: '#d33',
  //           confirmButtonText: 'Aceptar'
  //         });
  //       }
  //     });
  //   } else {
  //     // New user creation
  //     this.userService.createUser(this.userForm.value).subscribe({
  //       next: (response) => {
  //         // Success response handling
  //         Swal.fire({
  //           title: '¡Usuario Creado!',
  //           html: `El usuario <b>${this.userForm.first_name} ${this.userForm.last_name}</b> ha sido creado con éxito. ¡Diviértete, ya eres uno de nosotros!`,
  //           icon: 'success',
  //           confirmButtonColor: '#FF69B4', // Pink color for the button
  //           confirmButtonText: 'Aceptar'
  //         });
  //         console.log('Nuevo usuario creado:', response);
  //       },
  //       error: (error) => {
  //         // Error response handling
  //         Swal.fire({
  //           title: 'Error',
  //           text: 'Ha ocurrido un error al crear el usuario.',
  //           icon: 'error',
  //           confirmButtonColor: '#d33',
  //           confirmButtonText: 'Aceptar'
  //         });
  //       }
  //     });
  //   }
 // }
  
  


}
