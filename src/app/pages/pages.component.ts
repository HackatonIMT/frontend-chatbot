import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {IntentService} from "../services/intent.service";

interface MyObj {
  myString: string;
  myNumber: number;
}

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  constructor(private intentService: IntentService) {
  }

  ngOnInit(): void {
    this.getData().then((data) => {
      this.menu = [
        {
          title: 'Accueil',
          icon: 'home-outline',
          link: '/pages/forms/buttons',
          home: true,
        },
        {
          title: 'THÈMES',
          group: true,
        },
      ];

      let topics = [];
      if (data["topics"])
      for (let topic of data["topics"]) {
        let newTopic = {};
        if(topic["subs"] == []) {
          newTopic = {
            title: topic["topic"],
            icon: 'grid-outline',
            link: '/pages/tables/smart-table',
            queryParams: {code: topic["code"]},
          };
          topics.push(newTopic);
        } else {
          let topicChildren = [];
          for (let subtopic of topic["subs"]) {
            let newSubTopic = {
              title: subtopic["topic"],
              link: '/pages/tables/smart-table',
              queryParams: {code: subtopic["code"]},
            };
            topicChildren.push(newSubTopic);
          }
          newTopic = {
            title: topic["topic"],
            icon: 'grid-outline',
            children: topicChildren
          };
          // @ts-ignore
          this.menu.push(newTopic);
        }
      }

      this.menu.push({
          title: 'Transfert de Crédits',
          icon: 'shuffle-2-outline',
          children: [
            {
              title: 'Exemple 1',
              icon: 'grid-outline',
              children: [
                {
                  title: 'Exemple 1.1',
                  link: '/pages/tables/smart-table',
                  queryParams: {code: "14858e10-896f-49f8-984d-9581921ab203"},
                },
                {
                  title: 'Exemple 1.2',
                  link: '/pages/tables/smart-table',
                  queryParams: {code: "14858e10-896f-49f8-984d-9581921ab203"},
                },
              ],
            },
          ],
        },
        {
          title: 'Communication',
          icon: 'message-circle-outline',
          children: [
            {
              title: 'Exemple 1',
              link: '/pages/tables/smart-table',
              queryParams: {code: "14858e10-896f-49f8-984d-9581921ab203"},
            },
            {
              title: 'Exemple 2',
              link: '/pages/tables/smart-table',
              queryParams: {code: "14858e10-896f-49f8-984d-9581921ab203"},
            },
          ],
        }, );
    });

  }

  async getData() {
    // this.intentService.getIntents()
    return this.intentService.getTopics().toPromise();
    // return this.data;
  }

}
