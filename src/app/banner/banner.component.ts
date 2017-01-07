import { Component, enableProdMode } from  '@angular/core';
enableProdMode();

@Component({
    selector: 'banner',
    styleUrls: ['./banner.component.css'],
    templateUrl: 'banner.component.html'
})
export class BannerComponent {
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:any[] = [];
    public activeSlideIndex: number;

    public constructor() {
        for (let i = 0; i < 3; i++) {
            this.addSlide();
        }
    }

    public addSlide():void {
        let index = this.slides.length;
        this.slides.push({
            image: `./../../../assets/img/category0${index+1}.jpg`
            // text: `${['AAAA', 'BBBB', 'CCCC'][this.slides.length % 3]}`
        });
    }

}

