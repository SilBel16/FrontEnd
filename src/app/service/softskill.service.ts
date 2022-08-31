import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Softskill } from '../model/softskill';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {
  ssURL = 'https://backendslb.herokuapp.com/softskill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Softskill[]> {
    return this.httpClient.get<Softskill[]>(this.ssURL + 'lista');
  }

  public detail(id: number): Observable<Softskill>{
    return this.httpClient.get<Softskill>(this.ssURL + `detail/${id}`) 
  }

  public save(softskill: Softskill): Observable<any> {
    return this.httpClient.post<any>(this.ssURL + 'create', softskill);
  }

  public update(id: number, softskill: Softskill): Observable<any>{
    return this.httpClient.put<any>(this.ssURL + `update/${id}`, softskill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.ssURL + `delete/${id}`);
  }
}


