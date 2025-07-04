import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input()
  cardPhoto: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardLink: string = '';
  @Input()
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
