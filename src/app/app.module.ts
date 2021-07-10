import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Start App Custom Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskComponent } from './component/task/task.component';
import { FooterComponent } from './component/footer/footer.component';
import { TaskService } from './service/task.service';
import { SettingComponent } from './component/setting/setting.component';
import { NoteListComponent } from './component/note-list/note-list.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { HomeComponent } from './component/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'createTask',
    component: CreateTaskComponent,
  },
  {
    path: 'noteList',
    component: NoteListComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    FooterComponent,
    SettingComponent,
    NoteListComponent,
    CreateTaskComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
