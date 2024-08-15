import React, { useState, useEffect } from "react";

class RandomAccent extends React.Component {
  Accents = ['Irish', 'Scottish', 'British', 'French', 'Spanish', 'German', 'Russian', 'Italian', 'Australian', 'American'];



  getRandomAccent() {
    return this.Accents[Math.floor(Math.random() * this.Accents.length)];
  }



render() {
  return (
   
    
      <h4>Accent: <strong>{this.getRandomAccent() ? this.getRandomAccent(): 'Building Accent...' }</strong></h4>
    
  );
}}

export default RandomAccent;