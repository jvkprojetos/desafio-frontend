import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/app.reducer';
import { detailsVideos } from 'src/app/core/store/app.selectors';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.css']
})
export class CardVideoComponent implements OnInit {

  mostPopularVideos$ = this.store.select(detailsVideos)

  constructor(private store: Store<{ app: State  }>) { }

  ngOnInit(): void {}

}
