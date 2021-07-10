import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskComponent } from './component/task/task.component';
import { FooterComponent } from './component/footer/footer.component';
import { TaskService } from './service/task.service';
@NgModule({
  declarations: [AppComponent, HeaderComponent, TaskComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
