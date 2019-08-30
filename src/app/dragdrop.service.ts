import { Injectable } from '@angular/core';
import {list} from './mockData';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  data = list;

  constructor() { }

  getData(){
    return this.data;
  }
}
