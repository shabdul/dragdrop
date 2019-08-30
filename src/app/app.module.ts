import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { DragdropService} from './dragdrop.service';
import { MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent
    ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatCardModule
  ],
  providers: [DragdropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
