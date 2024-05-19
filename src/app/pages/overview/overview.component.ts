import { Component } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { Team } from './models/team.model';

const ELEMENT_DATA: Team[] = [
  {position: 1, name: 'Trentino', points: 11, numberOfMatches: 3, wins: 3, losses: 0},
  {position: 2, name: 'Jastrzębski Węgiel', points: 11, numberOfMatches: 3, wins: 2, losses: 1},
  {position: 3, name: 'Lube', points: 9, numberOfMatches: 2, wins: 1, losses: 1},
  {position: 4, name: 'Ziraat Bankasi', points: 17, numberOfMatches: 2, wins: 1, losses: 1},
  {position: 5, name: 'CV Guaguas', points: 22, numberOfMatches: 2, wins: 1, losses: 1},
  {position: 6, name: 'Piacenza', points: 3, numberOfMatches: 1, wins: 0, losses: 1},
  {position: 7, name: 'Halkbank', points: 7, numberOfMatches: 2, wins: 1, losses: 1},
  {position: 8, name: 'Berlin RV', points: 6, numberOfMatches: 2, wins: 1, losses: 1},
  {position: 9, name: 'Praha', points: 8, numberOfMatches: 1, wins: 0, losses: 1},
  {position: 10, name: 'ZAKSA', points: 3, numberOfMatches: 1, wins: 0, losses: 1},
  {position: 11, name: 'Tours VB', points: 1, numberOfMatches: 1, wins: 0, losses: 1},
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  displayedColumns: string[] = ['position','name', 'points', 'numberOfMatches', 'wins', 'losses'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteClick(row: Team) {
    const filteredArray = this.dataSource.data.filter(el => el.name !== row.name);
    this.dataSource = new MatTableDataSource(filteredArray);
  }
}
