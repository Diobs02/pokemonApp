import { Subscription } from 'rxjs';
import { PokemonService } from './../services/pokemon.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: 'buscar.page.html',
  styleUrls: ['buscar.page.scss']
})
export class BuscarPage{

  cep: string = '';
  endereco: any = null;
  pokemon: any = null;

  constructor(private pokemonService: PokemonService) {}

  buscar(){
    this.pokemonService.buscarCep(this.cep).subscribe((result) => {
      this.endereco = result
    })

    this.pokemonService.buscarPokemon().subscribe((result) => {
      this.pokemon = result
      this.pokemonService.setPokemonAbilities(result?.abilities?.length);
    })
  }

}
