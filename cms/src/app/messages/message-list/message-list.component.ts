import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'How are you?','Hi. How are you?', 'Michael'),
    new Message('2', 'Hope you are doing well', 'Hey, hope you are doing well.', 'Jim'),
    new Message('3', 'Are you free?','When can you meet?', 'Pam'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
