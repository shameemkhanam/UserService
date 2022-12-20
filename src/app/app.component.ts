import { Component, OnInit } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService, LoggerService],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'UserService';

  // constructor(private userservice: UserService, private loggerService: LoggerService) {}
  constructor(private userservice: UserService) {}

  userSs: { name: string; status: string }[] = [];

  ngOnInit() {
    this.userSs = this.userservice.users;
  }
}
