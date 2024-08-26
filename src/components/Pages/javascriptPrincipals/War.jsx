import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import CodeBlock from '@/components/Sub_Components/CodeBlock'

import { Helmet } from 'react-helmet-async'

const War = () => {
    const codeRef = useRef(null)

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const steps = [
        {
            title: '1. Plan Your Game',
            content: `Before writing any code, plan out your game:

      1. Identify the main components: Cards, Deck, Players, and the Game itself.
      2. Define the rules: Each player draws a card, highest card wins the round and gets a point.
      3. Outline the game flow: Shuffle deck, draw cards, compare, award points, repeat until no cards left.
      4. Think about how to represent game state: We'll use classes for our components.`,
        },
        {
            title: '2. Create the Card Class',
            content: `Start with the Card class. This class should:

      - Have properties for suit and value
      - Be initialized with a suit and value when created

      Try implementing this class yourself. Think about what the constructor should look like.`,
            code: `
class Card {
  // Your code here
  // Hint: Use a constructor to initialize suit and value
}`,
            explanation:
                'The Card class is the building block of our game. Each card has a suit (like Hearts or Spades) and a value (like 2 or King). Think about how you would represent these properties in a class.',
        },
        {
            title: '3. Implement the Deck Class',
            content: `The Deck class is more complex. It should:

      - Have an array to store Card objects
      - Have a method to create all 52 cards
      - Have a method to shuffle the cards
      - Have a method to deal a card

      Start by implementing the basic structure and the method to create all 52 cards.`,
            code: `
class Deck {
  constructor() {
    this.cards = [];
    // Your code here to create all 52 cards
    // Hint: Use nested loops for suits and values
  }

  shuffle() {
    // Your code here
    // Hint: Look up the Fisher-Yates shuffle algorithm
  }

  deal() {
    // Your code here
    // Hint: How would you remove and return the top card?
  }
}`,
            explanation:
                'The Deck class manages all the cards in the game. Think about how you would create all 52 cards when a new Deck is made. For shuffling, research the Fisher-Yates shuffle algorithm.',
        },
        {
            title: '4. Create the Player Class',
            content: `The Player class should:

      - Have properties for the player's name and points
      - Have a method to add points

      Implement this class based on what you think a player in the game needs.`,
            code: `
class Player {
  // Your code here
  // Hint: What properties and methods would a player need?
}`,
            explanation:
                'The Player class represents each participant in the game. Consider what information you need to keep track of for each player and how their score might change during the game.',
        },
        {
            title: '5. Develop the WarGame Class',
            content: `The WarGame class brings everything together. It should:

      - Create a deck and two players
      - Have a method to play the entire game
      - Compare cards and award points
      - Keep track of the game progress
      - Determine and announce the winner

      Start by setting up the basic structure and think about how you would implement the game logic.`,
            code: `
class WarGame {
  constructor(player1Name, player2Name) {
    // Your code here to set up the game
  }

  play() {
    // Your code here to run the game
    // Hint: Use a loop to keep playing rounds until the deck is empty
  }

  // You might need helper methods. What could they be?
}`,
            explanation:
                "This class is the heart of your game. It uses all the other classes you've created to run the game from start to finish. Think about the steps involved in playing a full game and how you would implement each step.",
        },
        {
            title: '6. Start the Game',
            content: `To start the game, you'll need to:

      1. Create a new WarGame instance
      2. Call the play method

      Try implementing this part yourself.`,
            code: `
let game = new WarGame('Player 1', 'Player 2');
game.play();
// Your code here to create and start a new game
`,
            explanation:
                'These final lines of code will actually run your game. Think about what you need to do to create a new game and start it.',
        },
    ]

    return (
        <div className="container text-lg mb-28">
            <Helmet>
                <title>Build a War Card Game | Help Code It</title>
                <meta
                    name="description"
                    content="Learn how to build a War card game step-by-step. This tutorial guides you through planning, creating classes, and implementing game logic for a fun coding experience."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/WarGameTutorial"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="War card game, JavaScript tutorial, coding game, game development, card game tutorial, coding project, beginner coding, JavaScript classes"
                />
            </Helmet>
            <h1 className="my-4 text-6xl text-center satisfyFont">
                Building a War Card Game
            </h1>
            <h2 className="mt-5 mb-5 text-2xl text-center">
                Student Guide: Step-by-Step Tutorial
            </h2>
            <hr className="border-2 border-black dark:border-white" />
            <p className="my-5">
                This guide will help you build a War card game step by step.
                We'll provide the structure and explanations, but you'll need to
                implement the key parts yourself. This approach will help you
                learn by doing!
            </p>
            {steps.map((step, index) => (
                <div key={index} className="mb-8">
                    <h3 className="my-5 text-2xl">{step.title}</h3>
                    {step.content && (
                        <p className="whitespace-pre-line">{step.content}</p>
                    )}
                    {step.code && (
                        <CodeBlock code={step.code} language="javascript" />
                    )}
                    {step.explanation && (
                        <p className="mt-4">{step.explanation}</p>
                    )}
                </div>
            ))}
            <h3 className="my-5 text-2xl">Next Steps</h3>
            <p>
                After implementing the basic game: 1. Test your game thoroughly.
                What happens in edge cases? 2. Can you add a feature to handle
                "war" situations when cards tie? 3. How would you modify the
                game to allow more than two players? 4. Consider adding a simple
                text-based user interface for a more interactive experience.
                Remember, game development is an iterative process. Start with a
                basic working version, then gradually add features and
                improvements!
            </p>
        </div>
    )
}

export default War
