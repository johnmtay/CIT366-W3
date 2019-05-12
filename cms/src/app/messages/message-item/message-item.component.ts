import { Component, OnInit, Input} from '@angular/core';
import { Message } from '../message.model';


@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  messages: Message[] = [
    new Message('Bro. Jackson', 'jacksonk@byuil.edu', 'https://web.byui.edu/Directory/Employee/jacksonk.jpg', 'null'),
    new Message('Bro. Barzee', 'barzeer@byui.edu', 'https://web.byui.edu/Directory/Employee/barzeer.jpg', 'nul')
  ];
  constructor() { }

  ngOnInit() {
  }

}
