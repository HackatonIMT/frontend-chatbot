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
}
