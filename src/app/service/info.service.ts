import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infoURL = 'http://localhost:8080/info/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Info[]> {
    return this.httpClient.get<Info[]>(this.infoURL + 'lista');
  }

  public detail(id: number): Observable<Info>{
    return this.httpClient.get<Info>(this.infoURL + `detail/${id}`) 
  }

  public save(info: Info): Observable<any> {
    return this.httpClient.post<any>(this.infoURL + 'create', info);
  }

  public update(id: number, info: Info): Observable<any>{
    return this.httpClient.put<any>(this.infoURL + `update/${id}`, info);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.infoURL + `delete/${id}`);
  }
}
