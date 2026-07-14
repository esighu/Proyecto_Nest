import { age } from './01-types';
export const pokemonIds =[1,20,30,34,66];
pokemonIds.push(15);


interface Pokemon {
    id:number;
    name: string;
    age?: number;
}


export const color:Pokemon ={
    id:1,
    name:'azul' ,
    age: 26
} 

console.log(pokemonIds);
