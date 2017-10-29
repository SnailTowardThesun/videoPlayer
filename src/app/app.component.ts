import { Component, OnInit } from '@angular/core';
import 'flv.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    if (flvjs.isSupported()) {
      const videoElement = <HTMLAudioElement>document.getElementById('videoElement');
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://192.168.1.250:8080/live/livestream.flv'
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }
}
