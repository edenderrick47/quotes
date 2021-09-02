import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to amazing quotes';
  quotes:Quote[] = [
    new Quote (1,'Natasha','Rise Up','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,1,12),0,0),

    new Quote (2,'Natasha','Work','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2020,7,14),0,0),

    new Quote (3,'Imran','Rock n Roll','Life is what happens when you are busy making other plans','John Lennon',
    new Date(2020,6,3),0,0),

    new Quote (4,'Natasha','Human spirit','Spread love everywhere you go. Let no one ever come to you without leaving happier.','Mother Theresa', new Date(2021,1,12),0,0),


   new Quote (5,'Natasha','Never Back Down','When you reach the end of your rope, tie a knot in it and hang on.','Franklin D. Roosevelt', new Date(2021,1,12),0,0),

new Quote (6,'Natasha','Life','If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt', new Date(2021,1,12),0,0),

  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
