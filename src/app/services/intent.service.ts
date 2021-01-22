import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class IntentService {
  private url = 'intents';

  constructor(private serverService: ServerService) { }

  getIntents = () => {
    return this.serverService.get(this.url);
  }

  getIntent = (id) => {
    const url = `${this.url}/${id}`;
    return this.serverService.get(url);
  }

  getTopics() {
    return this.serverService.get('topics');
  }

  addQuestion = (id, question) => {
    const url = `${this.url}/${id}`;
    const data = question;
    return this.serverService.put(url, data);
  }

  addAnswer = (id, answer) => {
    const url = `${this.url}/${id}`;
    const data = answer;
    return this.serverService.put(url, data);
  }

  removeAnswer = (id, text) => {
    const url = `${this.url}/${id}/answer`;
    return this.serverService.delete(url);
  }
}
