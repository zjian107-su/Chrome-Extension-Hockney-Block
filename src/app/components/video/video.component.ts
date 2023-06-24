import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() title: string = 'Video';
  @Input() src: string = 'video/rickroll.mp4';

  constructor() {}

  ngOnInit(): void {}
}
