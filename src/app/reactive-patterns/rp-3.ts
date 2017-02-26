


interface CourseDetail{}

type CoursesService = any;


import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    template: ` <main class="l-main l-sample-app">
    <div>
        <div class="main-container">
            <div class="list">
                <course-detail [courseDetail]="course$ | async">
                </course-detail>
            </div>
        </div>
    </div>
</main>`})
export class AppComponent implements OnInit {

    course$: Observable<CourseDetail>;

    constructor(private coursesService:CoursesService) {
    }

    ngOnInit() {
        this.course$ = this.coursesService.loadCourseDetail(1);
    }
}




