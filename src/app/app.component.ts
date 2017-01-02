/**
 * Created by xiadong.deng on 2017/1/3.
 */
import { Component }          from '@angular/core';

@Component({
    selector: 'main-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}