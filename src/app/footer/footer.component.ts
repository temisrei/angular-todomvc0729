import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line
  tooMore: boolean = false;

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

  @Output() clearComplete = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  doClear() {
    this.clearComplete.emit();
  }

}
