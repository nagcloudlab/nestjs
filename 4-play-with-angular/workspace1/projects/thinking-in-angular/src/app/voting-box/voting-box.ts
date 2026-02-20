import { Component } from '@angular/core';
import { VotingItem } from '../voting-item/voting-item';
import { VotingTable } from '../voting-table/voting-table';

@Component({
  selector: 'app-voting-box',
  imports: [
    VotingItem,
    VotingTable
  ],
  templateUrl: './voting-box.html',
  styleUrl: './voting-box.css',
})
export class VotingBox {

  // state
  votingLines: Array<any> = [
    { item: 'dmk', likes: 0, dislikes: 0 },
    { item: 'admk', likes: 0, dislikes: 0 },
    { item: 'tvk', likes: 0, dislikes: 0 },
  ];

  handleVote(event: any) {
    let { item, type } = event;
    console.log(`VotingBox: ${item} - ${type}`);
    let votingLine = this.votingLines.find(line => line.item === item);
    if (votingLine) {
      if (type === 'like') {
        votingLine.likes++;
      } else if (type === 'dislike') {
        votingLine.dislikes++;
      }
    }
  }

}
