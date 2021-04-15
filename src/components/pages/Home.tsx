import { CallToAction, Hero, Testimonials } from 'components/organisms';
import React from 'react';

const Home = () => {
  document.title = 'The Elements';

  return (
    <>
      <Hero />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
