import { lugares } from './data.js'
// Enlazando
const continente_africa = document.getElementById('continente_africa')
const continente_asia = document.getElementById('continente_asia')
const continente_europa = document.getElementById('continente_europa')
const continente_oceania = document.getElementById('continente_oceania')
const continente_america = document.getElementById('continente_america')
const lugares_africa = document.getElementById('lugares_africa')
const lugares_asia = document.getElementById('lugares_asia')
const lugares_europa = document.getElementById('lugares_europa')
const lugares_oceania = document.getElementById('lugares_oceania')
const lugares_america = document.getElementById('lugares_america')
const more_name = document.getElementById('more_name')
const more_description = document.getElementById('more_description')
const more = document.getElementById('more')
const more_image = document.getElementById('more_image')
const image_continent = document.getElementById('image_continent')
const nombre_lugar = document.getElementById('nombre_lugar')
const continente_lugar = document.getElementById('continente_lugar')
const volver = document.getElementById('volver')
const continentess = document.getElementById('continentess')
const citation_nav = document.getElementById('citation_nav')
const volverr = document.getElementById('volverr')
const content_citation = document.getElementById('content_citation')
const citation_name_continent_nav = document.getElementById('citation_name_continent_nav')
const content_citation_nav = document.getElementById('content_citation_nav')
const delete_all = document.getElementById('delete_all')

const cards = [0,1,2,3,4,5]
let continent_filter;
let cont_citation =0;
let citation_name_continent,citation_name_place,citation_img_place;
alerts_citation()
function continentf (lugares,cont_id_continent){
    continent_filter = lugares.filter(x => x.id_continente == cont_id_continent);
}



// Al iniciar
document.addEventListener('DOMContentLoaded',()=>{
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    more.hidden = true;
    content_citation.hidden = true;
    content_citation_nav.hidden = true;
    volverr.hidden = true;
    delete_all.hidden = true;
    citation_comp();
})

let cont_africa = 0;
continente_africa.addEventListener('click',()=>{
    
    content_citation.hidden = true;
    content_citation_nav.hidden = true;
    volverr.hidden = true;
    delete_all.hidden = true;
    lugares_africa.hidden = false;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    // Solo trae los de africa
    let cont_id_continent = 1;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_africa == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_africa.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_africa++;
    lugares_africa.addEventListener('click', (e) => {
        
        if (e.target.tagName == "BUTTON"){
            lugares_africa.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e,cont_citation)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = false;
                lugares_asia.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = true;
                lugares_oceania.hidden = true;
                
            })  
        }
        
    }) 
})

let cont_asia = 0;
continente_asia.addEventListener('click',()=>{
    
    content_citation.hidden = true;
    content_citation_nav.hidden = true;
    volverr.hidden = true;
    delete_all.hidden = true;
    lugares_africa.hidden = true;
    lugares_asia.hidden = false;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    more.hidden = true;
    // Solo trae los de asia
    let cont_id_continent = 2;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_asia == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_asia.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_asia++;
    lugares_asia.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_asia.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e,cont_citation)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_asia.hidden = false;
                lugares_africa.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = true;
                lugares_oceania.hidden = true;
            })  
        }
    })
})

let cont_europa = 0;
continente_europa.addEventListener('click',()=>{
    
    content_citation.hidden = true;
    content_citation_nav.hidden = true;
    volverr.hidden = true;
    delete_all.hidden = true;
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = false;
    lugares_oceania.hidden = true;
    lugares_america.hidden = true;
    more.hidden = true;
    // Solo trae los de europa
    let cont_id_continent = 3;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_europa == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_europa.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_europa++;
    lugares_europa.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            lugares_europa.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e,cont_citation)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = true;
                lugares_asia.hidden = true;
                lugares_europa.hidden = false;
                lugares_america.hidden = true;
                lugares_oceania.hidden = true;
            })       
        }
    })
})

let cont_oceania = 0;
continente_oceania.addEventListener('click',()=>{
    
    content_citation.hidden = true;
    content_citation_nav.hidden = true;
    volverr.hidden = true;
    delete_all.hidden = true;
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = false;
    lugares_america.hidden = true;
    more.hidden = true;
    // Solo trae los de oceania
    let cont_id_continent = 4;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_oceania == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_oceania.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center"id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_oceania++;
    lugares_oceania.addEventListener('click', (e) => {
        content_citation.hidden = true;
        content_citation_nav.hidden = true;
        volverr.hidden = true;
        delete_all.hidden = true;
        if (e.target.tagName == "BUTTON"){
            lugares_oceania.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e,cont_citation)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = true;
                lugares_asia.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = true;
                lugares_oceania.hidden = false;
            })       
        }
    })
})

let cont_america = 0;
continente_america.addEventListener('click',()=>{
    
    content_citation.hidden = true;
    content_citation_nav.hidden = true;
    volverr.hidden = true;
    delete_all.hidden = true;
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_oceania.hidden = true;
    lugares_america.hidden = false;
    more.hidden = true;
    // Solo trae los de oceania
    let cont_id_continent = 5;
    continentf(lugares,cont_id_continent);
    // El if arregla el bug de que se vuelve a poner y en vez de ser 6 muestra 12 porque se repite
    if (cont_america == 0) {
        for (let i = 0; i < continent_filter.length; i++){
            // Inserta las tarjetas con los lugares
            lugares_america.innerHTML += `<div class="card" id=${cards[i]}> <img src=${continent_filter[i].img} class="card-img-top" id="foto"> <div class="card-body"> <h5 class=" text-center">${continent_filter[i].nombre}</h5> <center><button href="#" class="btn btn-outline-primary align-text-center" id="${cards[i]}">Ver más</button></center> </div> </div> `;
        }
    }
    cont_america++;
    lugares_america.addEventListener('click', (e) => {
        content_citation.hidden = true;
        content_citation_nav.hidden = true;
        volverr.hidden = true;
        delete_all.hidden = true;
        if (e.target.tagName == "BUTTON"){
            lugares_america.hidden = true;
            more.hidden = false;
            continentess.hidden = true;
            more_date(continent_filter,e,cont_citation)
            volver.addEventListener('click',()=>{
                more.hidden = true;
                continentess.hidden = false;
                lugares_africa.hidden = true;
                lugares_asia.hidden = true;
                lugares_europa.hidden = true;
                lugares_america.hidden = false;
                lugares_oceania.hidden = true;
            })       
        }
    })
})
let id_place =0;
function alerts_citation (){
    const citation = document.getElementById('citation')
    citation.addEventListener('submit', (e)=>{
        e.preventDefault(); // Bloquea la actualización del formulario que esta por defecto
        let fecha_partida = document.getElementById("fecha_partida")
        let fecha_retorno = document.getElementById("fecha_retorno")
        fecha_partida = fecha_partida.value; 
        fecha_retorno = fecha_retorno.value; 
        citation_name_continent = continente_lugar.getAttribute('placeholder');
        citation_name_place = nombre_lugar.getAttribute('placeholder');
        citation_img_place = more_image.getAttribute('src');
        if(fecha_partida === '' || fecha_retorno === '' || fecha_partida >= fecha_retorno){
            Swal.fire({
                icon: 'error',
                title: '¡Ups!',
                text: 'Asegurate que todos los campos estén correctamente diligenciados',
                allowOutsideClick: true,
                backdrop: true,
                allowEscapeKey: true,
                allowEnterKey: true,
            })
        }else{
            // Hace el pull
            let date_citation = JSON.parse(localStorage.getItem('date_citation'));
            // Verifica si es null, para arreglar el error cuando está vacío el localstorage
            if (date_citation==null){
                date_citation = [];
            }
            id_place = date_citation.length;
            // Hace el push al array
            date_citation.push({citation_going: fecha_partida, citation_return: fecha_retorno, citation_continent: citation_name_continent, citation_name: citation_name_place, citation_img: citation_img_place, citation_id: id_place})
            //Guarda el array en el local
            localStorage.setItem('date_citation',JSON.stringify(date_citation))
            cont_citation_nav = 0;
            content_citation_nav.innerHTML = " ";
            citation_comp(); 
            
            // Alerta
            Swal.fire({
                icon: 'success',
                text: 'Tu cita ha sido agendada, pronto uno de nuestros asesores se comunicará contigo',
                allowOutsideClick: true,
                backdrop: true,
                allowEscapeKey: true,
                allowEnterKey: true,
            })
            const fechaa_partida = document.getElementById('fecha_partida');
            fechaa_partida.value = ('');
            const fechaa_retorno = document.getElementById('fecha_retorno');
            fechaa_retorno.value = ('');
            const comentarioss = document.getElementById('comentarios');
            comentarioss.value = ('');
        }
    })
}

function more_date (continent_filter,e){
    for(let i = 0; i < continent_filter.length; i++){
        if(e.target.id == continent_filter[i].id_lugar){
            more_name.innerHTML = continent_filter[i].nombre;
            more_description.innerHTML = continent_filter[i].description;
            more_image.setAttribute('src',continent_filter[i].img);
            image_continent.setAttribute('src',continent_filter[i].img_continent);
            nombre_lugar.setAttribute('placeholder',continent_filter[i].nombre);
            continente_lugar.setAttribute('placeholder',continent_filter[i].nombre_continente);
        }
    }
    
}
let cont_citation_nav = 0;
function citation_comp (){
    const citation_info = JSON.parse(localStorage.getItem('date_citation'));
        if (citation_info == null || citation_info == ""){
            content_citation_nav.innerHTML = '<div class="container"><hr><br> <h4 style="float: left; font-size: 25px;">No se ha guardado ninguna cita</h4> <img src="../images/x.png" alt="" style ="width: 3rem; height: 2rem; padding-top: 2px; padding-left: 13px;"></div>'
        }else if (cont_citation_nav ==0) {
            for (let i = 0; i < citation_info.length;i++){
                content_citation_nav.innerHTML += `<hr><br>
            <div class="d-inline-flex" >
            <center><img src=${citation_info[i].citation_img} alt="" id="citation_nav_img" style="border-radius: 1rem;
                border: black 2px solid;
                box-shadow: 2px 5px 4px rgb(176, 176, 176);"></center>
            <div class="container" id="padding_citation_nav">
                <h5>Continente:</h5>
                <input type="text" name="" id="citation_name_continent_nav" readonly placeholder='${citation_info[i].citation_continent}' size="57" style="border-radius: 1rem;">
                <h5>Nombre del lugar:</h5>
                <input type="text" name="" id="citation_name_place_nav" readonly placeholder='${citation_info[i].citation_name}' size="57" style="border-radius: 1rem;">
                <h5>Fecha de partida:</h5>
                <input type="text" name="" id="citation_going_nav" readonly placeholder='${citation_info[i].citation_going}' size="57" style="border-radius: 1rem;">
                <h5>Fecha de retorno:</h5>
                <input type="text" name="" id="citation_return_nav" readonly placeholder='${citation_info[i].citation_return}' size="57" style="border-radius: 1rem;">
            </div>
            </div>
            <br>
            <br>
            <center><button id="${citation_info[i].citation_id}" class="btn btn-outline-danger">Borrar cita</button></center>
            <br>`;
            }
        }
}
citation_nav.addEventListener('click', (e) => {
    more.hidden = true;
    continentess.hidden = true;
    lugares_africa.hidden = true;
    lugares_asia.hidden = true;
    lugares_europa.hidden = true;
    lugares_america.hidden = true;
    lugares_oceania.hidden = true;
    volverr.hidden = false;
    delete_all.hidden = false;
    content_citation_nav.hidden = false;
    content_citation.hidden = false;
    cont_citation_nav ++;
    const citation_info = JSON.parse(localStorage.getItem('date_citation'));
    const id_citation_nav = [];
    if (citation_info != null){
        for (let i = 0; i < citation_info.length; i++){
            id_citation_nav[i] = citation_info[i].citation_id;
        }
    }
    
    content_citation_nav.addEventListener('click', (e) => {
        if (e.target.tagName == "BUTTON"){
            for (let i = 0; i < citation_info.length; i++){
                if (e.target.id == citation_info[i].citation_id){
                    citation_info.splice(i,1)
                }
            }
            localStorage.setItem('date_citation',JSON.stringify(citation_info)) 
            content_citation_nav.innerHTML = " ";
            cont_citation_nav = 0;
            citation_comp(cont_citation_nav); 
        }
    })
    volverr.addEventListener('click', (e) =>{
        content_citation.hidden = true;
        volverr.hidden = true;
        delete_all.hidden = true;
        continentess.hidden = false;
    })
})
delete_all.addEventListener('click', (e) => {
    localStorage.clear()
    content_citation_nav.innerHTML = " ";
    cont_citation_nav = 0;
    citation_comp(cont_citation_nav);
})