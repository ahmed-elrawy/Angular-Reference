import { Component, ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('phone') myFone?:ElementRef<HTMLInputElement>
  onClick(value:string) {
    console.log(value)
    console.log(this.myFone?.nativeElement.value);
    
  }
  click(){
  }
}
