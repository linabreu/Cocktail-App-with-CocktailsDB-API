import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import HeroImage from './SearchBar';
import SearchBar from './SearchBar';
import Body from './SearchResults';

export default function Home({apiURL}) {
  return (
    <div>
        <SearchBar apiURL = {apiURL}/>
    </div>
  )
}
