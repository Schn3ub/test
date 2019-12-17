import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private pCollection$: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}/prestations`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }
  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection$;
  }
  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection$ = col;
  }

  }

