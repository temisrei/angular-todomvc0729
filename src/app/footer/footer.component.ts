import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  // tslint:disable-next-line
  tooMore: boolean = false;

  // tslint:disable-next-line:no-input-rename
  @Input('data') todos: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.tooMore = (this.todos.length > 5);
  }

}
