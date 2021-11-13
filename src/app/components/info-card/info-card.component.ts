import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/models/InfoCard';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input()
  infoCard: Partial<InfoCard> = {}


  constructor() { }

  ngOnInit(): void {
  }

}
