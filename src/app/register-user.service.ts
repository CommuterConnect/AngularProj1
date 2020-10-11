import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from 'src/assets/Person';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  _url = "http://localhost:8080/savePerson";
  constructor(private _httpClient: HttpClient) { }

  register(userData){
    console.log('from service'+ userData);
    return this._httpClient.post<any>(this._url,userData);
  }
  // _urlByEmail = "http://localhost:8080/GetPersonByEmail/dixi@g.com";
  GetPersonByEmail(emailData): Observable<any>{
    console.log(emailData);
    return this._httpClient.get<any>("http://localhost:8080/GetPersonByEmail/"+emailData);
  }

  deletePerson(id): Observable<any>{
    return this._httpClient.delete<any>("http://localhost:8080/deletePerson/"+id);
  }
}
