import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonAbilities = new BehaviorSubject<any>(null)
  pokemonAbilities$ = this.pokemonAbilities.asObservable();

  constructor(private http: HttpClient) { }

  buscarCep(cep: string): Observable<any>{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  buscarPokemon(): Observable<any>{
    const id = Math.floor(Math.random() * 100);
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  setPokemonAbilities(data: any){
    this.pokemonAbilities.next(data);
  }

}
