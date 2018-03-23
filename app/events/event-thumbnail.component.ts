import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>date: {{event.date}}</div>
        <div [ngClass] = "getStartTimeClass()" [ngSwitch]="event?.time">time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
          </div>
          <div>price: \${{event.price}}</div>
        <div>

            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            
        </div>
        
    </div>
  `,
            .green {color: #003300 !important; }
            .bold { font-weight: bold;}
  styles: [`.pad-left {margin-left: 10px;}
            .well div {color: #bbb;}`]
})

export class EventThumbnailComponent {

  @Input() event: any;
  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
    }
    return '';
    
  }
  
 
}