import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Acepta hhtp request
  constructor(
    private http: HttpClient
  ) { }

  // Obtener 150 pokemons
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  }

  // Método para obtener por nombre
  getByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  // Método para obtener el tipo de pokemon
  getByType(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/type/${name}`);
  }

}
