/**
 * Created by xiadong.deng on 2017/1/4.
 */
import "./rxjs-extensions"

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {MenuComponent} from './menu/menu.component'

@NgModule({
    imports:[BrowserModule],
    declarations:[MenuComponent, AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

