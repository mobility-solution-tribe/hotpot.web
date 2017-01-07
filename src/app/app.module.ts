/**
 * Created by xiadong.deng on 2017/1/4.
 */
import "./rxjs-extensions"

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { CarouselModule } from 'ng2-bootstrap/carousel';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BannerComponent} from "./banner/banner.component";

@NgModule({
    imports:[
        BrowserModule,
        CarouselModule.forRoot()],
    declarations:[
        MenuComponent,
        BannerComponent,
        AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

