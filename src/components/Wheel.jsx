import Card from './Card'
import React, { Component } from 'react';

export class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 250,
      cards: [],
      theta: 0.0
    }

    this.temp_theta = 0.0;
    this.pictures = [

      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668548079/CocktailPictures/sidecar_q0pehj.webp',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668546254/CocktailPictures/NewYorkSour_zo0suw.jpg',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668547574/CocktailPictures/EspressoMartini_j6gaqe.jpg',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668092400/CocktailPictures/Cosmopolitan-Cocktail-RC_hbhvvv.jpg',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668539349/CocktailPictures/BasilSmash_opeyjw.jpg',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668426233/CocktailPictures/Daiquiri_vypiag.jpg',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668541412/CocktailPictures/SweetManhattan_ka98hr.jpg',
      'https://res.cloudinary.com/dpsujem4q/image/upload/v1668080729/CocktailPictures/Mojito_mcrftg.jpg'

    ];
  }


  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    }
    let new_cards = [];

    for (let i = 0; i < 8; i++) {
        new_cards.push(<Card pic={this.pictures[i]} theta={(Math.PI / 4.0) * i} radius={this.state.radius} center={center_of_wheel} key={`card_${i}`} />)
    }

    this.setState({ cards: new_cards});

}


  handleScroll = e => {
    this.temp_theta += e.deltaY
    this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta * 0.07}deg)`


    for (let i = 0; i < this.wheel.children.length; i++) {
      this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-0.07 * this.temp_theta}deg)`
    }


}
    render() {
      return (
        <div onWheel={this.handleScroll} style={styles.wheel} ref={ref_id => this.wheel = ref_id}>
          {this.state.cards}
        </div>
      )
    }
}


const styles = {
    wheel: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: '300px',
      width: '300px',
      backgroundColor: 'white',
      // backgroundColor: 'red',
      borderRadius: '150px'

    }
}

export default Wheel

