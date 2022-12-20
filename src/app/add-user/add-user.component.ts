import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService]
})
export class AddUserComponent {
  username: string = "";
  status: string = "active";

  constructor(private userservice: UserService) {
    
  }

  addUser() {
    this.userservice.addNewUser(this.username, this.status);
    console.log(this.userservice.users);
  }
}
