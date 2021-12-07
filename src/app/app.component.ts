import {Component, OnInit} from '@angular/core';
import {AngularFireMessaging} from "@angular/fire/messaging";
import {HttpClient} from "@angular/common/http";
import {Message} from "./models/message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fcm-demo-front';
  messages: Array<Message> = [];


  constructor(private msg: AngularFireMessaging, private http: HttpClient) { }

  ngOnInit():void {

    this.msg.requestToken.subscribe(token => {

      // console.log(token);

      // truyền dữ liệu token về server "http://localhost:8080/notification/token"
      this.http.post<any>("http://localhost:8080/notification/token",{"token":token})
        .subscribe(data => {
        })

      this.http.post('http://localhost:8080/notification', {
        target: token,
        title: 'hello world',
        message: 'First notification',
      }).subscribe(() => {  });

      this.http.post('http://localhost:8080/topic/subscription', {
        topic: 'weather',
        subscriber: token
      }).subscribe(() => {  });


    }, error => {

      console.log(error);

    });

    this.msg.onMessage((payload) => {

      let notification = payload.notification;

      this.messages.push({title: notification.title, body: notification.body, iconUrl: notification.icon});
    });


  }




}
