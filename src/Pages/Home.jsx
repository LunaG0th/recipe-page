import React from 'react';
import Hero from '../components/Hero/Hero';
import Ingredients from '../components/Ingredients/Ingredients';
import Instructions from '../components/Instructions/Instructions';
import Nutrition from '../components/Nutrition/Nutrition';

function Home() {
  return (
    <main>
      <Hero />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </main>
  );
}

export default Home;
