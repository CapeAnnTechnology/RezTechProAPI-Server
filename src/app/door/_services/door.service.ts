import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../shared/_services';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { RoomModel } from './../../shared/_models/room.model';
import { DoorModel } from './../../shared/_models/door.model';

@Injectable()
export class DoorService {

  private apiUrl = environment.API_URI;  // URL to web api

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private get _authHeader(): string {
    return `Bearer ${this.auth.accessToken}`;
  }

    // GET RSVPs by event ID
  getDoorsByRoomId$(roomId: string): Observable<DoorModel[]> {
    return this.http
      .get<DoorModel[]>(`${this.apiUrl}room/${roomId}/doors`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET an room by ID
  getRoomById$(id: string): Observable<RoomModel> {
    return this.http
      .get<RoomModel>(`${this.apiUrl}room/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return ObservableThrowError(errorMsg);
  }

}
