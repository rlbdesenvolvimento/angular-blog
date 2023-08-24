import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  image:string = '';
  title:string = '';
  description:string = '';

  @Input()
  id:string = '0';

  ngOnInit(): void {
    this.setValuesToComponent(Number(this.id))
  }

  setValuesToComponent(id:number){
    const result = dataFake.filter(article => article.id == id)[0]

    console.log(result)
    this.image = result.image
    this.title = result.title
    this.description = result.content.substring(0, 200) + "..."
  }
}
