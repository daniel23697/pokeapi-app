import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  // Arreglo de pokemons
  pokemons: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  // Usar método para obtener lista de pokemons
  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach(result => {
        this.dataService.getByName(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
      });
    });
    }
  }

