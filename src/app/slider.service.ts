import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {
    translateY: string = 'translateY(0px)';
    slides: any[] = [
        { active: true, color: 'blue' },
        { active: false, color: 'green' },
        { active: false, color: 'pink' },
        { active: false, color: 'yellow' },
        { active: false, color: 'red' },
        { active: false, color: 'violet' },
    ]
    constructor() { }
    getPos() {
        return this.slides.findIndex(slide => slide.active);
    }
    setTranslateY() {
        this.translateY = `translateY(-${this.getPos() * 200}px)`
    }
    go(slide) {
        let currentSlide = this.slides[this.getPos()]
        currentSlide.active = false
        slide.active = true;
        this.setTranslateY()
    }
    next() {
        console.log(this.getPos(), "get position");
        let currentSlide = this.slides[this.getPos()]
        let nextSlide = this.slides[this.getPos() + 1]
        if (nextSlide) {
            currentSlide.active = false
            nextSlide.active = true
        }
        this.setTranslateY()
        if (!nextSlide) {
            console.log('condition chal rhi hai..??');
            currentSlide.active = false;
            currentSlide = this.slides[0];
            currentSlide.active = true;
        }
        this.setTranslateY()
    }
    previous() {
        let currentSlide = this.slides[this.getPos()]
        let previousSlide = this.slides[this.getPos() - 1]
        if (previousSlide) {
            currentSlide.active = false
            previousSlide.active = true
        }
        this.setTranslateY()
        if (!previousSlide) {
            console.log('condition chal rhi hai..??');
            currentSlide.active = false;
            currentSlide = this.slides[this.slides.length - 1];
            currentSlide.active = true;
        }
        this.setTranslateY()
    }

}
 