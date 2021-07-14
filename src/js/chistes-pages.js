import { peticion } from "./http-provider";

const body = document.body;
let btn, ol ;

const crearChisteHtml =()=>{
    const htlm = `
    <h1 class="mt-5">Chistes</h1>
    <br>

    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
        <li class="list-group-item""></li>
    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML =htlm;
    body.append(divChistes);
}
const eventos = ()=>{
    btn = document.querySelector('button');
    ol = document.querySelector('ol');

    btn.addEventListener('click',async()=>{
        btn.disabled = true;
       dibujarChiste(await peticion())
       btn.disabled = false;
    });
}

const dibujarChiste = (chiste)=>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id} </b> ${chiste.value}`;
    olItem.classList.add('list-group-item');
    ol.append(olItem);
}
const llamar=()=>{
    crearChisteHtml();
    eventos();
}

export {
    llamar
}