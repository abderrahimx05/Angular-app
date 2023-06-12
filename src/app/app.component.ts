import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: ` <h1>Liste de Pokémon</h1> `,
})
export class AppComponent implements OnInit {
  pokemonList = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]);
  }
  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
