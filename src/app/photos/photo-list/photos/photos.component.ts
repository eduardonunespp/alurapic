import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { photoProps } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: photoProps[] = []
  rows: any = []

  constructor() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photos']) {
      this.rows = this.groupColumns(this.photos);
    }
  }
  
  groupColumns(photos: photoProps[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3 ){
      newRows.push(photos.slice(index, index + 3))
    }

    return newRows
  }
  

}
