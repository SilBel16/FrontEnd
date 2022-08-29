import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  redURL = 'http://localhost:8080/redes/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Redes[]> {
    return this.httpClient.get<Redes[]>(this.redURL + 'lista');
  }

  public detail(id: number): Observable<Redes>{
    return this.httpClient.get<Redes>(this.redURL + `detail/${id}`) 
  }

  public save(redes: Redes): Observable<any> {
    return this.httpClient.post<any>(this.redURL + 'create', redes);
  }

  public update(id: number, redes: Redes): Observable<any>{
    return this.httpClient.put<any>(this.redURL + `update/${id}`, redes);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.redURL + `delete/${id}`);
  }
}


