import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IndividualMsgComponent } from '../../shared/components/individual-msg/individual-msg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatSlideToggleModule, FormsModule, MatFormFieldModule, MatInputModule, IndividualMsgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  readonly panelOpenState = signal(false);
  check1 = false;

  message = '';

  messageData = [
    {
      sender: 'self',
      content: 'Hello, how are you?',
      timestamp: new Date('2023-10-01T10:00:00Z')
    },
    {
      sender: 'other',
      content: 'I am good, thank you! How about you?',
      timestamp: new Date('2023-10-01T10:05:00Z')
    },
    {
      sender: 'self',
      content: 'I am doing well, thanks for asking.',
      timestamp: new Date('2023-10-01T10:10:00Z')
    },
    {
      sender: 'other',
      content: 'That\'s great to hear!',
      timestamp: new Date('2023-10-01T10:15:00Z')
    },
    {
      sender: 'self',
      content: 'Yes, it is. Have a good day!',
      timestamp: new Date('2023-10-01T10:20:00Z')
    },
    {
      sender: 'other',
      content: 'Good morning!',
      timestamp: new Date('2023-10-01T08:00:00Z')
    },
    {
      sender: 'self',
      content: 'Good morning! How was your weekend?',
      timestamp: new Date('2023-10-01T08:05:00Z')
    },
    {
      sender: 'other',
      content: 'It was great, thanks for asking. How about yours?',
      timestamp: new Date('2023-10-01T08:10:00Z')
    },
    {
      sender: 'self',
      content: 'It was good too. I went hiking.',
      timestamp: new Date('2023-10-01T08:15:00Z')
    },
    {
      sender: 'other',
      content: 'That sounds amazing! Where did you go?',
      timestamp: new Date('2023-10-01T08:20:00Z')
    },
    {
      sender: 'self',
      content: 'We went to the mountains. The view was breathtaking.',
      timestamp: new Date('2023-10-01T08:25:00Z')
    },
    {
      sender: 'other',
      content: 'Wow, that must have been incredible. I wish I could have been there.',
      timestamp: new Date('2023-10-01T08:30:00Z')
    },
    {
      sender: 'self',
      content: 'It was really nice. Let\'s plan a trip together sometime.',
      timestamp: new Date('2023-10-01T08:35:00Z')
    },
    {
      sender: 'other',
      content: 'That sounds like a great idea! When do you have time?',
      timestamp: new Date('2023-10-01T08:40:00Z')
    },
    {
      sender: 'self',
      content: 'I\'m free next month. How about that?',
      timestamp: new Date('2023-10-01T08:45:00Z')
    },
    {
      sender: 'other',
      content: 'That works for me. Let\'s do it!',
      timestamp: new Date('2023-10-01T08:50:00Z')
    }
  ];

  resizeTextarea(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = '24px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  sendMessage() {
    console.log('Message sent:', this.message);
  }

  onToggleClick(event: Event) {
    event.stopPropagation();
    // Additional logic if needed
  }

}
