
// import { usuarios } from "./modulo.js";
// const $root = document.querySelector('#root');
// // Creamos un contenedor para las cards
// const $container = document.createElement("div");
// $container.classList.add("container");
// $root.appendChild($container);
// const fragment = document.createDocumentFragment();

// usuarios().then((listado) => {
//   listado.forEach(usuario => {
//     const $div = document.createElement("div");
//     $div.classList.add("box");
//     const $h2 = document.createElement("h2");
//     $h2.textContent = usuario.name;
//     $h2.classList.add("title-container");
//     const $pId = document.createElement("p");
//     $pId.textContent = `id: ${usuario.id}`;
//     const $pEmail = document.createElement("p");
//     $pEmail.textContent = `Email: ${usuario.email}`;
//     const $pUsername = document.createElement("p");
//     $pUsername.textContent = `Username: ${usuario.username}`;
//     const $pAddress = document.createElement("p");
//     $pAddress.textContent = `Address: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}`;
//     const $pPhone = document.createElement("p");
//     $pPhone.textContent = `Phone: ${usuario.phone}`;
//     const $pWebsite = document.createElement("p");
//     $pWebsite.textContent = `Website: ${usuario.website}`;
//     const $pCompany = document.createElement("p");
//     $pCompany.textContent = `Company: ${usuario.company.name}, ${usuario.company.catchPhrase}, ${usuario.company.bs}`;

//     $div.appendChild($h2);
//     $div.appendChild($pId);
//     $div.appendChild($pEmail);
//     $div.appendChild($pUsername);
//     $div.appendChild($pAddress);
//     $div.appendChild($pPhone);
//     $div.appendChild($pWebsite);
//     $div.appendChild($pCompany);
//     fragment.appendChild($div);
//   });
//   $container.appendChild(fragment);

// }).catch((error) => {
//   console.error(error);
// });

import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
const $template = document.querySelector("#template").content;
const $card = document.createDocumentFragment();
$root.classList.add("box")
usuarios().then