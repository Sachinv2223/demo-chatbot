import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-msg',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './individual-msg.component.html',
  styleUrl: './individual-msg.component.scss'
})
export class IndividualMsgComponent {

  @Input() message: any;

}
