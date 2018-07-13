import React, { Component } from 'react';

class Poker extends Component {
    constructor(){
        super()
        this.state = {
            pokerHand: [
                {
                    suit: "clubs",
                    number: 2
                },
                {
                    suit: "hearts",
                    number: 7
                }
            ]
        }
        
    }   

    addCard(){
        let suits = ["hearts", "clubs", "spades", "diamonds"];
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
        let randomSuit = suits[Math.floor(Math.random() * suits.length)];
        let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)]; 
        let randomCard = { suit: randomSuit, number: randomNumbers }; 

        let hand = this.state.pokerHand.map(card => card)
        hand.push(randomCard)
        this.setState({pokerHand: hand})
    }

    joker(){
        let hand = this.state.pokerHand.map(card => card)

        hand.forEach(card=>{card.suit = "joker"; card.number = "joker"})
        this.setState({pokerHand:hand})
    }

   render(){
    let hand = this.state.pokerHand.map(card => <h1>{card.number} of {card.suit}</h1>)

    return (
        <div>
        {hand}
        <button onClick={this.addCard.bind(this)}>Draw</button>
        <button onClick={this.joker.bind(this)}>All Jokers</button>
        </div>
        )
   } 
}

export default Poker;