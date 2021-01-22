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
      confirmCreate: true,
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
      training_phrases: {
        title: 'Questions',
        type: 'string',
      },
    },
  };

  settingsAnswers = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
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
      messages: {
        title: 'Réponses',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  sourceAnswers: LocalDataSource = new LocalDataSource();
  queryParam = '';

  constructor(private service: SmartTableData, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((queryParams: Params) => {
      this.queryParam = queryParams['code'];
      console.log('## code'+this.queryParam);
      console.log("constructor get data");
      const data = this.service.getData(this.queryParam).then((data) => {
        console.log(data);
        // @ts-ignore
        this.source.load(data["questions"]);
        // @ts-ignore
        this.sourceAnswers.load(data["answers"]);
      });
    });

    // console.log(data);
    // this.source.load([data]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Confirmer la suppression ?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateQuestionConfirm(event): void {
    if (window.confirm('Confirmer la création d\'une nouvelle question ?')) {
      const data = this.service.sendQuestion(this.queryParam, event.newData).then((data) => {
        console.log(data);
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onCreateAnswerConfirm(event): void {
    if (window.confirm('Confirmer la création d\'une nouvelle réponse ?')) {
      const data = this.service.sendAnswer(this.queryParam, event.newData).then((data) => {
        console.log(data);
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

}
