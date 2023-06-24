import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'video-streaming-site';

  videoList = [
    { title: 'Hot stuff You Want to See', src: 'assets/videos/rickroll.mp4' },
    // Add as many videos as you want
  ];
}
