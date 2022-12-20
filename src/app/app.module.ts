import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [AppComponent, AddUserComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
