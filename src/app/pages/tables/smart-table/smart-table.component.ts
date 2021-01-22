import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      training_phrases: {
        title: 'Questions',
        type: 'string',
      },
      // username: {
      //   title: 'Username',
      //   type: 'string',
      // },
      // email: {
      //   title: 'E-mail',
      //   type: 'string',
      // },
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
    },
  };

  settingsAnswers = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      messages: {
        title: 'Réponses',
        type: 'string',
      },
      // username: {
      //   title: 'Username',
      //   type: 'string',
      // },
      // email: {
      //   title: 'E-mail',
      //   type: 'string',
      // },
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  sourceAnswers: LocalDataSource = new LocalDataSource();
  queryParam = '';

  constructor(private service: SmartTableData, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((queryParams: Params) => {
      this.queryParam = queryParams['code'];
      console.log('## code'+this.queryParam);
    });
    const data = this.service.getData().then((data) => {
      console.log(data);
      this.source.load([data]);
      this.sourceAnswers.load([data]);
    });
    // console.log(data);
    // this.source.load([data]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
