import { Component, OnInit } from '@angular/core';
import { Snippet } from 'src/app/core/models/Snippet';
import { VideoApiService } from 'src/app/core/services/video-api.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {

  mostPopularVideos: Array<Snippet> = [];
  
  constructor(private videoApiService: VideoApiService) { }

  ngOnInit(): void {
    this.videoApiService.getMostPopular().subscribe((items) => {
      items.items?.forEach((item) => {
        if(item.snippet)
          this.mostPopularVideos.push(item.snippet);
      })
    });
  }

}
