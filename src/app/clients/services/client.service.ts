import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private pCollection$: Observable<Client[]>;
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
  id: any;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }
  // get collection
  public get collection(): Observable<Client[]> {
    return this.pCollection$;
  }
  // set collection
  public set collection(col: Observable<Client[]>) {
    this.pCollection$ = col;
  }
// update collection
public update(item: Client, state: Stateclient) {
  const obj = {...item};
  obj.state = state;
  return this.http.patch(`${this.urlApi}/Clients/${item.id}`, obj);
}
}
