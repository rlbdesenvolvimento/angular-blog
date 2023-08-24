import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  idBigCard:string = '0';
  idSmallCard1:string = '0';
  idSmallCard2:string = '0';
  idSmallCard3:string = '0';

  ngOnInit(): void {
    this.idBigCard = this.generateRandomId();
    this.idSmallCard1 = this.generateRandomId();
    this.idSmallCard2 = this.generateRandomId();
    this.idSmallCard3 = this.generateRandomId();
  }
  generateRandomId(): string {
    let id = (Math.floor(Math.random() * 6) + 1).toString();
    if (id == this.idBigCard || id == this.idSmallCard1 || id == this.idSmallCard2 || id == this.idSmallCard3) {
      id = this.generateRandomId();
    }
    return id;
  }

}
