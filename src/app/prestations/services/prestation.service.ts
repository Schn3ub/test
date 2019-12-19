import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private pCollection$: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  // example observables and unsubscribe()
  public obs$ = new Observable((observers) => {
    observers.next(['chris', 'antony', 'cedric']);
  });
  // example observables and multicaste subscription
  public obs2$ = new Observable((observers) => {
    observers.next(Math.random());
  });
  // example observable chaud and unicast subscription
  public subject$ = new Subject();

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
// update collection
public update(item: Prestation, state: State) {
  const obj = {...item};
  obj.state = state;
  return this.http.patch(`${this.urlApi}/prestations/${item.id}`, obj);
}

public add(item: Prestation){
  return this.http.post(`${this.urlApi}/prestations`, item);
}

/* this.obs2$.subscribe((data) => {
  console.log(data);
});
this.obs2$.subscribe((data) => {
  console.log(data);
});
this.subject$.subscribe((data) => {
  console.log(data);
});
this.subject$.subscribe((data) => {
  console.log(data);
});
this.subject$.next(Math.random()); */

  }

