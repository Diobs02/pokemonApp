import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Subscription } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-batalhar',
  templateUrl: 'batalhar.page.html',
  styleUrls: ['batalhar.page.scss']
})
export class BatalharPage{

  imagemUrl: any;
  pokemon: any = null;
  abilities: number = 0;

  constructor(private photoService: PhotoService, private pokemonService: PokemonService) { }

  ionViewDidEnter() {

    this.pokemonService.buscarPokemon().subscribe((result) => {
      this.pokemon = result
    })

    this.pokemonService.pokemonAbilities$.subscribe(result => this.abilities = result)
  }

  batalhaResultado() {
    if (!this.pokemon || this.abilities === undefined) return { class: '', text: '' };

    const abilityCount = this.pokemon.abilities.length;
    if (abilityCount === this.abilities) {
      return { class: 'name-yellow', text: 'Empate' };
    } else if (abilityCount > this.abilities) {
      return { class: 'name-red', text: 'Ganhou' };
    } else {
      return { class: 'name-green', text: 'Perdeu' };
    }
  }

  async captureAndStorePhoto() {
    try {
      const photo = await this.photoService.addNewToGallery();
      this.imagemUrl = photo.webPath;
      console.log(this.imagemUrl)
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  }

}
