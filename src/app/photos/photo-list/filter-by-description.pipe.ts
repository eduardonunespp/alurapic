import { Pipe, PipeTransform } from "@angular/core";
import { photoProps } from "../photo/photo";

@Pipe({
   name: 'filterByDescription' 
})

export class FilterByDescription implements PipeTransform {

    transform(photos: photoProps[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLocaleLowerCase()

        if(descriptionQuery){
            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery))
        }else{
            return photos
        }
    }



}