
import {Component, Injectable} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {Http} from "@angular/http";

type User = any;
//type UserService = any;



@Component({
    selector: 'home',
    template: `
<div class='main'>
     <user-detail  [user]=" user$ | async "></user-detail>
</div>`
})
export class HomeComponent {

    user$: Observable<User>;

    constructor(private userService: UserService) {
        this.user$ = userService.user$;
    }
}



@Injectable()
export class UserService {

    private subject = new BehaviorSubject<User>(null);

    user$: Observable<User> = this.subject.asObservable()
        .filter(user => !!user);

    constructor(private http: Http) {
        http.get('/users')
            .map(res => res.json())
            .subscribe( user => this.subject.next(user));
    }

}