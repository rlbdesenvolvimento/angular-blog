import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  image:string = '';
  title:string = '';

  @Input()
  id:string = '0';

  ngOnInit(): void {
    this.setValuesToComponent(Number(this.id))
  }

  setValuesToComponent(id:number){
    const result = dataFake.filter(article => article.id == id)[0]

    this.image = result.image
    this.title = result.title
  }
}
