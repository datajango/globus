import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'glb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() disabled: boolean;
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.click.emit();
  }

}
