import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChatPage {
  messages: any[] = [];
  newMessage: string = '';
  loading: boolean = false;

  constructor() {}

  sendMessage() {
    if (!this.newMessage.trim()) return;

    // Add user message
    this.messages.push({
      content: this.newMessage,
      role: 'user',
      timestamp: new Date()
    });

    const userMessage = this.newMessage;
    this.newMessage = '';
    this.loading = true;

    // Simulate AI response
    setTimeout(() => {
      this.messages.push({
        content: `You said: ${userMessage}`,
        role: 'assistant',
        timestamp: new Date()
      });
      this.loading = false;
    }, 1000);
  }
}