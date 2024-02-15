// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import {HeaderComponent} from "./component/partials/header/header.component";
// import { HomeComponent} from "./component/pages/home/home.component";
// import { SearchComponent} from "./component/partials/search/search.component";
// import { TagsComponent} from "./component/partials/tags/tags.component";
// import { FoodPageComponent} from "./component/pages/food-page/food-page.component";
// import { CartPageComponent} from "./component/pages/cart-page/cart-page.component";
// import { TitleComponent} from "./component/partials/title/title.component";
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { MenuComponent } from './menu/menu.component';
// import { BookEventComponent } from './bookevent/bookevent.component';
// import { LoginComponent } from './login/login.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import {HttpClientModule} from "@angular/common/http";
// import { OtpService} from "./services/otp.service";
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     HomeComponent,
//     SearchComponent,
//     TagsComponent,
//     FoodPageComponent,
//     CartPageComponent,
//     TitleComponent,
//     AboutusComponent,
//     MenuComponent,
//     BookEventComponent,
//     LoginComponent,
//     CheckoutComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//
//
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./component/partials/header/header.component";
import { HomeComponent} from "./component/pages/home/home.component";
import { SearchComponent} from "./component/partials/search/search.component";
import { TagsComponent} from "./component/partials/tags/tags.component";
import { FoodPageComponent} from "./component/pages/food-page/food-page.component";
import { CartPageComponent} from "./component/pages/cart-page/cart-page.component";
import { TitleComponent} from "./component/partials/title/title.component";
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { BookEventComponent } from './bookevent/bookevent.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OtpService } from './services/otp.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    AboutusComponent,
    MenuComponent,
    BookEventComponent,
    LoginComponent,
    CheckoutComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      // Add other routes here
    ]),
    FormsModule,

  ],
  providers: [OtpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
