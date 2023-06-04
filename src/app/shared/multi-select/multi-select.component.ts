import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  public userInput = '';
  public showOptions = false;
  public multiselectOpt: string[] = []

  @Input() options: string[] = [];
  @Input() className: string = '';
  @Input() placeholder: string = 'Enter something...';
  @Input() value: string = '';

  @Output() onSelect = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    this.multiselectOpt = this.options;
  }

  handleUserInput(event: any) {
    const input = event.target as HTMLInputElement;
    this.userInput = input.value;
    if(!this.userInput) {
      this.showOptions = false;
      return;
    }

    this.multiselectOpt = this.filterOptionsAsPerUserInput();
    this.showOptions = true;
  }

  filterOptionsAsPerUserInput() {
    return this.options.filter((opt: any) => {
      if(opt.toUpperCase().indexOf(this.userInput.toUpperCase()) !== -1) {
        return opt
      }
    })
  }

  handleSelect(opt: string) {
    this.onSelect.emit(opt);
    this.showOptions = false;
    this.multiselectOpt = this.options;
  }


}
