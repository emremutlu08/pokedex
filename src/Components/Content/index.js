import * as React from 'react';
import pokelist from '../../others/pokelist.json';
import PokemonLister from './PokemonLister';

export default function Content() {
  return <PokemonLister pokemonlist={JSON.stringify(pokelist)} />;
}
