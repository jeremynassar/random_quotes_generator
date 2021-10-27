console.log('connected!');

// getting elements from HTML doc
let button = document.getElementById('btn')

let quote = document.getElementById('quote-block')

// An array of quotes

let arrayQuotes = ['If life were predictable it would cease to be life, and be without flavor', "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success", 'You only live once, but if you do it right, once is enough',  'Money and success don’t change people; they merely amplify what is already there.' , "In order to write about life first you must live it.", "Turn your wounds into wisdom." , "Don’t settle for what life gives you; make life better and build something" ,"Life is a succession of lessons which must be lived to be understood." , "My mama always said, life is like a box of chocolates. You never know what you’re gonna get." , "The healthiest response to life is joy." ]


function generator (){
    let randomQuote = arrayQuotes[Math.floor(Math.random()*arrayQuotes.length)];
    quote.innerHTML = randomQuote;
}

button.addEventListener('click',generator);
