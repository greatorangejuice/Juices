import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component ({
  selector: 'app-videos',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})

export class VideosComponent implements OnInit, OnChanges {

  @Input() book: string = null;
  ngOnInit(): void {
    console.log('testVideos');
  }

  ngOnChanges(): void {
    console.log(this.book);
  }
}
