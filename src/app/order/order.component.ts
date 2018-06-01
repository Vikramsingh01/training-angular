import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  breakfastDishList: string[] = ["Idli", "Poha", "Upma"];
  lunchDishList: string[] = ["Roti", "Mutter Panner", "Rice"];
  menuType = 'breakfast';
  timerFlag: boolean = true;
  timer;
  priceList: number[] = [30, 40, 50];
  dishSelected: string;
  myStyle: {};
  color;
  @Input() backgroundColor;
  constructor() { 
    
  }

  ngOnInit() {
  }
  selectDish(dish){
    this.dishSelected = dish;
  }
  stopStart() {
    
    if(this.timerFlag){
        this.timer = setInterval(()=>{
          if(this.menuType == 'breakfast'){
            this.menuType = 'lunch';
          }else{
            this.menuType = 'breakfast';
          }
        }, 1000);
      }else{
        clearInterval(this.timer);
      }
      this.timerFlag = !this.timerFlag;
  }

  setStyle() {
    this.myStyle = {
      'font-weight': 'bold',
      'font-size': '24px',
      'color': this.generateColor()
    };
  }
  generateColor() {
    this.color = '#';
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(let i = 0; i<6;i++) {
      this.color += letters[Math.floor(Math.random()*16)];
    }
    return this.color;
  }
  
}
