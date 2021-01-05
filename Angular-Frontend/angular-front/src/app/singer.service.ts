import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Singer } from './singer';

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  private baseURL = "http://localhost:8080/home/singers";
  private deleteURL = "http://localhost:8080/home/singer";
  constructor(private httpClient: HttpClient) { }

  getSingerList(): Observable<Singer[]> {
    return this.httpClient.get<Singer[]>(this.baseURL);
  }

  createSinger(singer: Singer): Observable<Object> {
    return this.httpClient.post(this.baseURL, singer);
  }

  getSingerById(id: number): Observable<Singer> {
    return this.httpClient.get<Singer>(`${this.baseURL}/${id}`);
  }
  updateSinger(id: number, singer: Singer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, singer);
  }
  deleteSinger(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }

}
