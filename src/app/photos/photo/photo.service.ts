import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { photoProps } from './photo'


const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string) {
    return this.http.get<photoProps[]>(`${API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString())

    return this.http.get<photoProps[]>(`${API}/${userName}/photos`, { params });
  }
}
