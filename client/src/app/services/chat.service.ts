import { Injectable } from '@angular/core';
import { Observable, interval  } from 'rxjs';
import { Message } from '../models/message';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() {
   

   }
  getServerMessages(client: string): Observable<Message>{
    console.log('getServerMessages');

    return interval(2000).pipe(
      tap(value => console.log(value)),
      map((value) =>{
          let m =  new Message();
          m.id = value.toString();
          m.name = "Operator";
          m.from ="server";
          m.sequenceNo = value;
          m.sentTime = new Date();
          m.content = 'Hello ' + client + '  '+ value;
          return m;
      })
    );
  }
}
