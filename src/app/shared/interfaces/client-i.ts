import { Stateclient } from '../enums/stateclient.enum';

export interface ClientI {

id: number;
name: string;
email: string;
image: string;
state: Stateclient;
}
