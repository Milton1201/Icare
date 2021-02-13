import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

import Categories from '../components/Categories';
import FeaturedServices from '../components/FeaturedServices';


export default function Home() {
  return (
    <>
    <Hero>
      <Banner title="ICare: you're worth it!" subtitle="any and every service just one click away" >
        <Link to="/services" className="btn-primary">
        our services
        </Link>
      </Banner>
    </Hero>
    <Categories />
    <FeaturedServices />
    
    </>
  )
}