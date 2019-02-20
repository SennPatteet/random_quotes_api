fetch("https://random-quotes-api-ex.herokuapp.com/quotes", {
  method: "GET"
})
  .then(response => response.json())
  .then(json => getQuote(json))

const quote = document.createElement('h2');
const character = document.createElement('h4');

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


    const submit = () => {
      const quoteInput = document.querySelector('.quoteInput').value
      const characterInput = document.querySelector('.characterInput').value

      const addQuote = {
        method: "post",
        mode: "cors",
        headers: {"content-type": "application/json"}

        body: JSON.stringify({
          "quote": `${quoteInput}`,
          "character": `${characterInput}`
        })
      }

      console.log(quoteInput + "is added to the database" +
      "\n" + characterInput + "is added to the database");
    }

    fetch('quotes/create', addQuote)

    document.querySelector(".submit").addEventListener("mousedown", submit);

  };
