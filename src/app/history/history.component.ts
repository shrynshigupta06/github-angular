import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  historyElements: any;
  tableData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.historyElements = localStorage;
    for (let i = 0; i < this.historyElements.length; i++) {
      let key = this.historyElements.key(i);
      let value = this.historyElements.getItem(key);
      this.tableData.push([key, JSON.parse(value)]);
    }
  }

  clearHistory() {
    // clear history logic
    localStorage.clear();
    this.tableData = [];
  }

  openUserAccount(row: any) {
    window.open(row[1].html_url, '_blank');
  }
}
