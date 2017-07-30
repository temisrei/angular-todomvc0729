import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line
  tooMore: boolean = false;
  // tslint:disable-next-line
  filterType: string = 'All';

  private _todos: any[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('data')
  set todos(value) {
    this._todos = value;
    this.tooMore = this.todos.length > 5;
  }
  get todos() {
    return this._todos;
  }

  @Output() onClearBtnClick = new EventEmitter();
  @Output() filterTypeChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeFilterType(value) {
    this.filterType = value;
    this.filterTypeChanged.emit(value);
  }

}
