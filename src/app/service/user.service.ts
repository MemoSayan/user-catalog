import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interface/user.interface';
import { Response } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'http://randomuser.me/api';

  //import http client
  constructor(private http: HttpClient) { }

  //todo:fecth users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map((resp: Response) => this.processResponse(resp))
    );
  }

  //todo: fecth one user using the user id UUID.
  getUser(userid: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?userid=${userid}`).pipe(
      map((resp: Response) => this.processResponse(resp))
    );
  }

  private processResponse(resp: Response): Response {
    return {
      info: { ...resp.info },
      results: resp.results.map((user: any) => (<User>{
        userid: user.login.uuid,
        firstname: user.name.first,
        lastname: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
          address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.state} ${user.location.country}`,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: {
          latitude: +user.location.coordinates.latitude,
          longitude: +user.location.coordinates.longitude
        }
      }))
    };
  }

}
