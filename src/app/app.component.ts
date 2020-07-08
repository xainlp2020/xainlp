import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xai-web';

  active_tab = 'home'

  setActiveTab(tab)
  {
    this.active_tab = tab
  }

  getHighlight(tab)
  {
    if(tab === this.active_tab)
    {
      return "w3-light-grey"
    }
    else{
      return "w3-indigo"
    }
  }
  
}
