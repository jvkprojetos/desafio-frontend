import { Component, OnInit, Input } from '@angular/core';
import { Snippet } from 'src/app/core/models/Snippet';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.css']
})
export class CardVideoComponent implements OnInit {

  @Input() snippets!: Array<Snippet>;
  constructor() { }

  ngOnInit(): void {
  }

}
