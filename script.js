fetch(`https://striveschool-api.herokuapp.com/books`)
  .then((response) => {
    console.log(`responsive`, response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`errore nella chiamata`, response.status);
    }
  })
  .then((cards) => {
    console.log(`CARDS`, cards);
    const container = document.querySelector(".container");
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      const colonna = document.createElement("div");
      colonna.classList.add("col-md-4", "mb-4");

      const cad = document.createElement("div");
      cad.classList.add("card", "h-100");
      const img = document.createElement("img");
      img.src = card.img;
      cad.appendChild(img);

      const cBody = document.createElement("div");
      cBody.classList.add("card-body");

      const titH2 = document.createElement("h2");
      titH2.innerText = card.title;

      const prezzo = document.createElement("h4");
      prezzo.innerText = card.price;

      cBody.appendChild(titH2);
      cBody.appendChild(prezzo);
      cad.appendChild(cBody);
      colonna.appendChild(cad);
      container.appendChild(colonna);
    }
    console.log(container);
  })
  .catch((error) => console.log(`error`, error));
