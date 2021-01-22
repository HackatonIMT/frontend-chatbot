import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {IntentService} from "../services/intent.service";
import {NbMenuItem} from "@nebular/theme";

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
    // this.intentService.getIntents().subscribe((data: Intent[]) => {
    //   this.intents = data;
    // });
    const data: Promise<void | Array<MyObj>> = this.getData().then((data) => {
      console.log(data);
      this.menu = [
        {
          title: 'Accueil',
          icon: 'home-outline',
          link: '/pages/dashboard',
          home: true,
        },
        {
          title: 'THÈMES',
          group: true,
        },
      ];

      let topics = [];
      for (let topic of data["topics"]) {
        let newTopic = {};
        if(topic["subs"] == []) {
          newTopic = {
            title: topic["topic"],
            icon: 'grid-outline',
            link: '/pages/tables/smart-table',
            queryParams: {code: topic["code"]},
          };
          topics.push(newTopic)
        } else {
          let topicChildren = []
          for (let subtopic of topic["subs"]) {
            let newSubTopic = {
              title: subtopic["topic"],
              icon: 'grid-outline',
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
          topics.push(newTopic);
        }
      }
      console.log("MY TOPICS !");
      console.log(topics);

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
                  // link: '/pages/tables/smart-table',
                },
                {
                  title: 'Exemple 1.2',
                  // link: '/pages/tables/tree-grid',
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
              // link: '/auth/login',
            },
            {
              title: 'Exemple 2',
              // link: '/auth/register',
            },
          ],
        }, );
      // this.source.load([data]);
      this.menu = [
        {
          title: 'Accueil',
          icon: 'home-outline',
          link: '/pages/dashboard',
          home: true,
        },
        {
          title: 'THÈMES',
          group: true,
        },
        {
          title: 'Intersemestre',
          icon: 'grid-outline',
          children: [
            {
              title: 'Affectation',
              link: '/pages/tables/smart-table',
              queryParams: {code: '1'},
            },
            {
              title: 'Compétences',
              link: '/pages/tables/smart-table',
            },
            {
              title: 'Contact',
              link: '/pages/tables/smart-table',
            },
            {
              title: 'Format',
              link: '/pages/tables/tree-grid',
            },
            {
              title: 'Inscription',
              children: [
                {
                  title: 'Creation',
                  link: '/pages/tables/smart-table',
                },
                {
                  title: 'Info',
                  link: '/pages/tables/tree-grid',
                },
              ],
            },
            {
              title: 'Lieu',
              link: '/pages/tables/tree-grid',
            },
            {
              title: 'Sujet',
              link: '/pages/tables/tree-grid',
            },
          ],
        },
        {
          title: 'Transfert de Crédits',
          icon: 'shuffle-2-outline',
          children: [
            {
              title: '404',
              icon: 'grid-outline',
              children: [
                {
                  title: 'Smart Table',
                  link: '/pages/tables/smart-table',
                },
                {
                  title: 'Tree Grid',
                  link: '/pages/tables/tree-grid',
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
              title: 'Login',
              link: '/auth/login',
            },
            {
              title: 'Register',
              link: '/auth/register',
            },
            {
              title: 'Request Password',
              link: '/auth/request-password',
            },
            {
              title: 'Reset Password',
              link: '/auth/reset-password',
            },
          ],
        },
      ];
    });

  }

  async getData() {
    // this.intentService.getIntents()
    return this.intentService.getIntent("14858e10-896f-49f8-984d-9581921ab203").toPromise();
    // return this.data;
  }

}
