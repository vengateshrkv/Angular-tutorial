import  { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})

export class ChildComponent {
    @Input('parentData') public name;
    @Output() public childEvent = new EventEmitter<String>();

    constructor() {
    }

    ngOnInit() {
        console.log(this.name)
    }
    callParent() {
        this.childEvent.emit('From Child1')
    }
   
}