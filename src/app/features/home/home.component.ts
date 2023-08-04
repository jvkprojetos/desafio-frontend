import { Component, OnInit } from '@angular/core';
import { Snippet } from "src/app/core/models/Snippet";
import { VideoApiService } from 'src/app/core/services/video-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  search(value: string) {
  }
}
