import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voting-item',
  imports: [],
  templateUrl: './voting-item.html',
  styleUrl: './voting-item.css',
})
export class VotingItem {

  @Input("item") item: string = '';
  @Output() vote = new EventEmitter<any>();

  handleVote(type: string) {
    console.log(`VotingItem: ${this.item} - ${type}`);
    this.vote.emit({
      item: this.item,
      type: type
    });
  }

}
