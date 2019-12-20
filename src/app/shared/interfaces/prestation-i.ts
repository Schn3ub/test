export interface PrestationI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  tva: number;
  state: string;
  nbJour: number;
  totalHt(): number;
  totalTtc(): number;
  comments: string;

}
