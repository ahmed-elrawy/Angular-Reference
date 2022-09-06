import { Component } from '@angular/core';

@Component({
  selector: 'two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent {
  userName?:string
  imgURL="https://via.placeholder.com/150"
  value1 = "";
  value2 = "";  
  bananaInABox=""
  ngModelChange=""
  
  handleInput(event: Event) {
    this.value1 = (event.target as HTMLInputElement).value;
    console.log( this.value1 );
    
  }

}