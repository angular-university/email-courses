


interface CourseDetail{}

type CoursesService = any;


import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";



@Component({
    selector: 'course-detail',
    template: `

    <h2>{{courseDetail?.description}}</h2>
    
    <div class="lessons-list-container v-h-center-block-parent">
        <table class="table lessons-list card card-strong">
            <tbody>
            <tr *ngFor="let lesson of courseDetail?.lessons">
                <td class="lesson-title">{{lesson.description}}</td>
                <td class="duration">
                    <i class="md-icon duration-icon">access_time</i>
                    <span>{{lesson.duration}}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

`})
export class CourseDetailComponent {

    @Input()
    courseDetail:CourseDetail;

}
