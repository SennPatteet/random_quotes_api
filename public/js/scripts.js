fetch("https://random-quotes-api-ex.herokuapp.com/quotes", {
  method: "GET"
})
  .then(response => response.json())
  .then(json => getQuote(json))

const character = document.createElement('h4');
const quote = document.createElement('h2');

const container = document.querySelector('#container')

  const getQuote = (quotes) => {
    console.log(quotes);

      const refresh = () => {
        //get random
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(randomQuote);

        //h2
        container.appendChild(quote)
        quote.textContent = `"${randomQuote.quote}"`


        //h4
        container.appendChild(character)
        character.textContent = `- ${randomQuote.character}`
      };

    document.querySelector(".btn").addEventListener("mousedown", refresh);

  };
