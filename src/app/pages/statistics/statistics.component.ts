import { Component } from '@angular/core';
import { Player } from './models/player.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public players: Player[] = [
    {
      name: 'Trentino Volley',
      achievementNum: 347,
      achievementName: 'Most points',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjv_Ux0mnLXBcqI_pJyzwY0TKDglwHjvDo1uVIXZFpA&s',
      color: '#008149',
    },
    {
      name: 'CV Guaguas',
      achievementNum: 22,
      achievementName: 'Most match points',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYUJkHALp3JoBvAHuAvH1oxE77piDyFzYpWe6pBGTRQ&s',
      color: '#ffd900',
    },
    {
      name: 'Ziraat Bankasi VS Jastrzebski',
      achievementNum: 227,
      achievementName: 'Most points in one match',
      img: 'https://cdn.oddspedia.bg/media/en/1x1/ziraat-bankasi-jastrzebski-wegiel-8408891.png',
      color: '#ffd900',
    }
  ]
}
