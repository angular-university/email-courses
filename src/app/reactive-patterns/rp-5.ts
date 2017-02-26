
import {ActivatedRoute, Router} from "@angular/router";
interface CourseDetail{}

type CoursesService = any;
type LessonsService = any;
type Lesson = any;

import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Observable} from "rxjs";



@Component({
    selector: 'app-lesson-detail',
    templateUrl: './lesson-detail.component.html'
})
export class LessonDetailComponent implements OnInit {

    lesson:Lesson;

    constructor(private route:ActivatedRoute,
                private router:Router,
                private lessonsService:LessonsService) {
    }

    ngOnInit() {
        this.route.params.switchMap(params => {
            const lessonUrl = params['id'];
            return this.lessonsService.findLessonByUrl(lessonUrl);
        })
        .subscribe(lesson => this.lesson = lesson);
    }
}


type htmlTemplate = any;
type MessagesService = any;
type CouponService = any;
const stripeToken = '';


@Component({
    selector: 'coupon-button',
    template: `...`
})
export class CouponButton {

    @Input()
    couponCode:string;

    @Input()
    buttonText;

    @Output()
    couponBought = new EventEmitter();

    constructor( private messagesService: MessagesService,
                 private couponService: CouponService) {
    }

    buyCoupon() {
        this.couponService.purchaseCoupon(this.couponCode, stripeToken)
            .subscribe(
                () => {
                    this.messagesService.showSuccessMessage(
                        'Enrollment successful! Please enjoy the course.');
                    this.couponBought.emit(null);
                },
                () => {
                    this.messagesService.showErrorMessage('payment rejected. ');
                });
    }
}