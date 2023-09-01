import { HttpClient } from '@angular/common/http';
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
}
