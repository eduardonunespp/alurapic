// import { Injectable } from "@angular/core";
// import { PhotoService } from "../photo/photo.service";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { photoProps } from "../photo/photo";
// import { Observable } from "rxjs";

// @Injectable({ providedIn: 'root' })

// export class PhotoListResolver implements Resolve<Observable<photoProps[]>> {
//     constructor(private service: PhotoService){

//     }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<photoProps[]> {
//         const userName = route.params['userName'];
//         return this.service.listFromUser(userName)
//     }
// }