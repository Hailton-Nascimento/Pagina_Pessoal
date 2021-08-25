document
    .querySelector(".hamburguer")
    .addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("show-menu");


    });

let input_element = document.querySelectorAll("input");
console.log(input_element);

input_element.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        input.setAttribute("value", input.value);
    })
})
let textarea_element = document.querySelector("textarea");

textarea_element.addEventListener("keyup", (e) => {
    textarea_element.setAttribute("value", textarea_element.value);
})



// document.querySelector("#qtde").addEventListener("change", atualizarPreco);
// document.querySelector("#js").addEventListener("change", atualizarPreco);
// document
//     .querySelector("#layout-sim")
//     .addEventListener("change", atualizarPreco);
// document
//     .querySelector("#layout-nao")
//     .addEventListener("change", atualizarPreco);
// document.querySelector("#prazo").addEventListener("change", function() {
//     const prazo = document.querySelector("#prazo").value;
//     document.querySelector(
//         "label[for=prazo]"
//     ).innerHTML = `Prazo: ${prazo} semanas`;
//     atualizarPreco();
// });

// function atualizarPreco() {
//     const qtde = document.querySelector("#qtde").value;
//     const temJS = document.querySelector("#js").checked;
//     const incluiLayout = document.querySelector("#layout-sim").checked;
//     const prazo = document.querySelector("#prazo").value;

//     let preco = qtde * 100;
//     if (temJS) preco *= 1.1;
//     if (incluiLayout) preco += 500;
//     let taxaUrgencia = 1 - prazo * 0.1;
//     preco *= 1 + taxaUrgencia;

//     document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
// }