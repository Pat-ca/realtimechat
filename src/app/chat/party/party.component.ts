import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})

export class PartyComponent implements OnInit {
  @Input() message: Message;
  constructor() { }

  ngOnInit() {
  }

}
