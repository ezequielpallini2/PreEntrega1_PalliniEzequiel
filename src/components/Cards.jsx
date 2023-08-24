import React from 'react';
function Cards() {
  return (
    <div class="card" style="width: 18rem;">
      <img
        src="../img/dillom.jpg"
        class="card-img-top"
        alt="${description}"
      ></img>
      <div class="card-body">
        <h5 class="card-title">Primavera 2023</h5>
        <p class="card-text">Dillom toca en el Movistar Arena</p>
        <p class="card-text">$8500</p>
        <p class="card-text">¡Quedan solo 8 entradas! </p>
        <a href="checkout.html" class="btn btn-primary" id="${id}">
          Comprar
        </a>
      </div>
    </div>
  );
}
export default Cards;
