import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoticiasService } from './services/noticias.service';
import { MainnewService } from './services/mainnew.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { HotnewsComponent } from './components/hotnews/hotnews.component';
import { RecentnewsComponent } from './components/recentnews/recentnews.component';
import { MainnewComponent } from './components/mainnew/mainnew.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { PhotonewsComponent } from './components/photonews/photonews.component';
import { RecentnewComponent } from './components/recentnew/recentnew.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TitleComponent,
    HotnewsComponent,
    RecentnewsComponent,
    MainnewComponent,
    EditorialComponent,
    PhotonewsComponent,
    RecentnewComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NoticiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
