function jsonAcarrusel(){
    let http = new XMLHttpRequest();
    http.open('get', 'https://tere2021.github.io/adopcionMascotas/mascotas.json', true);
    http.send();
 
    http.onload = function(){
       if(this.readyState == 4 && this.status == 200){
          let mascotas = JSON.parse(this.responseText);
          let output=''; let act='';
          
          for(let x of mascotas){
             console.log(x);  
             if (act==='') {
                act="active";
                output += ` 
                <div class="carousel-item active" >  
                <div class="card pb-5">
                   <img src="${x.img}" class="d-block w-100" alt="${x.nombre}">
                   <div class="card-body" >
                      <h3 class="card-title text-uppercase font-weight-bold" >${x.nombre}</h3>
                      <span class="badge bg-warning text-dark">Edad: ${x.edad}</span>
                      <span class="badge bg-danger">Sexo: ${x.sexo}</span> 
                      <p class="card-text  py-2">Características: <b> ${x.cualidades}, ${x.caracter}</b></p>
                      <button type="button" class="btn btn-primary btn-sm ">Adoptame</button>
                   </div>
                </div>
             </div> 
                 `;
             } else{
              
                output += ` 
                <div class="carousel-item" >  
                   <div class="card pb-5">
                      <img src="${x.img}" class="d-block w-100" alt="${x.nombre}">
                      <div class="card-body" >
                      <h3 class="card-title text-uppercase font-weight-bold" >${x.nombre}</h3>
                      <span class="badge bg-warning text-dark">Edad: ${x.edad}</span>
                      <span class="badge bg-danger">Sexo: ${x.sexo}</span>
                      <p class="card-text  py-2">Características: <b>${x.cualidades}, ${x.caracter}</b></p>
                         <button type="button" class="btn btn-primary btn-sm ">Adoptame</button>
                      </div>
                   </div>
                </div> 
                 `;
             } 
  
          }
           document.getElementById("cardItem").innerHTML = output;
       }
    }
 }  
 
 jsonAcarrusel();
 