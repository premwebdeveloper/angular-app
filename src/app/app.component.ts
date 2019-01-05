import { Component, OnInit } from '@angular/core';
import * as 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTimeStatus';

  public ngOnInit()
  {
    $(document).ready(function(){

    });
  }

}
