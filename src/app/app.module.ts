import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookCatalogComponent } from './book-catalog/book-catalog.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'details/:id', component: BookDetailsComponent },
  // other routes...
];





@NgModule({
  declarations: [
    AppComponent,
    BookCatalogComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
