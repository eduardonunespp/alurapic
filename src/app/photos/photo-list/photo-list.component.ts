import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { photoProps } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: photoProps[] = [];
  filter = new FormControl<string>('');
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true
  currentPage: number = 1
  userName: string = ''

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.userName = this.activatedRoute.snapshot.params['userName']
    this.photoService.listFromUser('flavio').subscribe((photos) => {
      this.photos = photos;
    });

    this.debounce = this.activatedRoute.snapshot.data['photos'];
    this.debounce.pipe(debounceTime(500)).subscribe((filter) => {
      this.filter.setValue(filter);
    });
  }

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos)
    })
    if(!this.photos.length){
      this.hasMore = false
    }
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }
}
