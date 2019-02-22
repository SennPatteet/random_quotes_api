fetch("https://random-quotes-api-ex.herokuapp.com/quotes", {
    method: "GET"
  })
  .then(response => response.json())
  .then(json => getQuote(json))

const quote = document.createElement('h2');
const character = document.createElement('h4');

const container = document.querySelector('#container')
const form = document.querySelector("#form")

const getQuote = (quotes) => {
  console.log(quotes);


  /* ----------------------------------------------------------------RANDOM QUOTE REFRESH---------- */

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



  /* ----------------------------------------------------------------ADD QUOTE---------- */

  const submit = () => {
    const quoteInput = document.querySelector('.quoteInput').value
    const characterInput = document.querySelector('.characterInput').value

    if (quoteInput == "" && characterInput == "") {
      alert("Please enter a quote and a character");
    } else if (characterInput == "") {
      alert("Please enter a character")
    } else if (quoteInput == "") {
      alert("Please enter a quote")
    } else {

      const addQuote = {
        method: "post",
        mode: "cors",
        headers: {
          "content-type": "application/json"
        },

        body: JSON.stringify({
          "quote": `${quoteInput}`,
          "character": `${characterInput}`
        })
      } //end of addQuote

      fetch('quotes/create', addQuote)

      location.reload();

      alert("The quote was succesfully added to the database");

    } //end of else
  } //end of submit

  document.querySelector(".submit").addEventListener("mousedown", submit);



  /* ----------------------------------------------------------------DELETE QUOTE---------- */

  const deleteQuote = () => {
      const deleteInput = document.querySelector(".deleteInput").value;

      let everyId = [];

      quotes.forEach(quote => {
        let anyId = quote._id;
        everyId.push(anyId);
      })

      console.log(everyId);

    if (deleteInput == "") {
      alert("Please enter an ID")
    } else if (deleteInput != "" && everyId.indexOf(deleteInput) == -1 ) {
      alert("ID does not exist. \nPlease enter a valid ID")
    } else {

      return fetch(`https://random-quotes-api-ex.herokuapp.com/quotes/delete/${deleteInput}`, {
          method: 'delete'
        })

        .then(response => response.json())
        .then(location.reload())
        .then(alert(`The quote with ID '${deleteInput}' has been succesfully deleted from the database`))

    } // endof else
  } //end of deleteQuote

  document.querySelector(".Delete").addEventListener("mousedown", deleteQuote);

}; //end of getQuote
