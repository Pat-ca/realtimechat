import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.messageEmitter.unsubscribe();
  }
  private messageEmitter : any;
  private client = 'Patrick';
  messages: Message[];
  content:string;

  @ViewChild('chatbox', {static: false}) chatbox: ElementRef;
    constructor(private chatService: ChatService) {  
  }

  ngOnInit() {
    const self = this;
    this.messages= [];
    this.messageEmitter = this.chatService.getServerMessages(this.client).subscribe(
        m => {
          self.messages.push(m);
          self.scrollToBottom();
        }
    );
  }
  sendMessage(content:string){
    const message = new Message();
    message.id = "1";
    message.name = "Patrick";
    message.sequenceNo = 1;
    message.from ="client";
    message.sentTime = new Date();
    message.content = content;
    this.content = null;
    this.messages.push(message);
    this.scrollToBottom();
  }
  private scrollToBottom(){
    this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
}
   //
}
