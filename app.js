import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

function displayFact(e){
const selectedAnimal = e.target.alt;
const animal=animals[selectedAnimal];
const optionIndex=Math.floor(Math.random()*animal.facts.length);
const p = document.getElementById('fact')
p.innerHTML=animal.facts[optionIndex];
}
const showBackground=true;
const title='';
const background = (<img
                 className='background'
                  alt='ocean'
                  src='/images/ocean.jpg'/>);
const images=[];
for (const animal in animals){
  images.push(
    (<img
      key = {animal}
      className = 'animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
     />));
}

const animalFacts =(
  <div>
<h1>{title!==''?title:"Click an animal for a fun fact"}
</h1>
{showBackground && background}
<div className='animals'>
{images}
</div>
<p id= 'fact'></p>
 </div>           
);
ReactDOM.render(animalFacts,document.getElementById('root'));