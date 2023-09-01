import { Component, OnInit } from '@angular/core';
import { photoProps } from '../photo/photo';
import { PhotoService } from '../photo/photo.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: photoProps[] = [];

  constructor(private photoService: PhotoService,
      private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {

    const username = this.activatedRoute.snapshot.params['userName']
    this.photoService.listFromUser('flavio').subscribe((photos) => {
      this.photos = photos;
    });
  }
}
