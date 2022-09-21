import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  titles = []

  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.tabComponents);
  }

  ngAfterContentInit(): void {
    this.titles = this.tabComponents.map((tabComp) => tabComp.title);
  }

}
