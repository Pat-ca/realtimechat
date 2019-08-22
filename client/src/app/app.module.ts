import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { PartyComponent } from './chat/party/party.component';


// const appRoutes: Routes = [
//   { path: 'fullscreen', component: FullScreenComponent },
//   { path: 'partialscreen',  component: PartialScreenComponent },
//   { path: '',
//     redirectTo: '/fullscreen',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PartyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
