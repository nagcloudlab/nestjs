import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voting-table',
  imports: [
    NgClass
  ],
  templateUrl: './voting-table.html',
  styleUrl: './voting-table.css',
})
export class VotingTable {

  @Input("votingLines") votingLines: Array<any> = [];

}
