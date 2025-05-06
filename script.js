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
      colonna.classList.add("col-12", "col-md-5", "col-lg-3", "col-xl-2", "mb-4", "border-0", "rounded-1");

      const cad = document.createElement("div");
      cad.classList.add("card", "h-100");
      const img = document.createElement("img");
      img.classList.add("h-50");
      img.src = card.img;
      cad.appendChild(img);

      const cBody = document.createElement("div");
      cBody.classList.add("d-flex", "flex-column", "justify-content-around");
      cBody.classList.add("card-body");

      const buttonScarta = document.createElement("button");
      buttonScarta.classList.add("rounded-2", "bg-danger", "text-white", "border-0", "w-50");
      buttonScarta.innerText = "Scarta";
      buttonScarta.addEventListener("click", () => {
        colonna.remove();
      });

      const titH2 = document.createElement("h2");
      titH2.classList.add("fs-4", "text-truncate");
      titH2.innerText = card.title;

      const prezzo = document.createElement("h4");
      prezzo.innerText = card.price;

      cBody.appendChild(titH2);
      cBody.appendChild(prezzo);
      cBody.appendChild(buttonScarta);
      cad.appendChild(cBody);
      colonna.appendChild(cad);
      container.appendChild(colonna);
    }
    console.log(container);
  })
  .catch((error) => console.log(`error`, error));
