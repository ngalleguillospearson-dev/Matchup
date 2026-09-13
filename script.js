const deportes={
futbol:{nombre:"⚽ Fútbol",tipo:"equipo",modalidades:["Fútbol 11","Fútbol 7 / Baby-fútbol","Fútbol sala / Futsal","Fútbol playa"],acciones:[["rival","⚔️ Buscar equipo rival",true],["jugador","👥 Buscar jugadores",true]]},
tenis:{nombre:"🎾 Tenis",tipo:"individual",modalidades:["Singles","Dobles","Tenis en silla de ruedas"],acciones:[["rival","⚔️ Buscar oponente",false],["companero","🤝 Buscar compañero",false]]},
basquetbol:{nombre:"🏀 Básquetbol",tipo:"equipo",modalidades:["Básquetbol 5x5","Básquetbol 3x3","Básquetbol en silla de ruedas"],acciones:[["rival","⚔️ Buscar equipo rival",true],["jugador","👥 Buscar jugadores",true]]},
ciclismo:{nombre:"🚴 Ciclismo",tipo:"individual",modalidades:["Ciclismo de ruta","Ciclismo de pista","Mountain Bike","BMX"],acciones:[["companero","🚴 Buscar compañeros",false],["grupo","👥 Buscar grupo",false]]},
voleibol:{nombre:"🏐 Vóleibol",tipo:"equipo",modalidades:["Vóleibol piso","Vóley playa","Vóleibol sentado"],acciones:[["rival","⚔️ Buscar rival",true],["jugador","👥 Buscar jugadores",true]]},
rugby:{nombre:"🏉 Rugby",tipo:"equipo",modalidades:["Rugby 15","Rugby 7","Rugby Beach"],acciones:[["rival","⚔️ Buscar rival",true],["jugador","👥 Buscar jugadores",true]]},
atletismo:{nombre:"🏃 Atletismo",tipo:"individual",modalidades:["Pista y campo","Carreras de calle","Trail running"],acciones:[["companero","🏃 Buscar compañeros",false],["grupo","👥 Buscar grupo",false]]},
hockey:{nombre:"🏑 Hockey",tipo:"equipo",modalidades:["Hockey patines","Hockey césped","Hockey sala"],acciones:[["rival","⚔️ Buscar rival",true],["jugador","👥 Buscar jugadores",true]]},
acuaticos:{nombre:"🏊 Natación y deportes acuáticos",tipo:"individual",modalidades:["Natación clásica","Aguas abiertas","Polo acuático"],acciones:[["companero","🏊 Buscar compañeros",false],["grupo","👥 Buscar entrenamiento",false]]},
motores:{nombre:"🏎️ Automovilismo y Motociclismo",tipo:"individual",modalidades:["Rally","Karting","Motocross / Enduro"],acciones:[["companero","🏁 Buscar participantes",false],["grupo","👥 Buscar grupo",false]]},
pingpong:{nombre:"🏓 Tenis de mesa",tipo:"individual",modalidades:["Singles","Dobles","Dobles mixtos"],acciones:[["rival","⚔️ Buscar oponente",false],["companero","🤝 Buscar compañero",false]]},
golf:{nombre:"⛳ Golf",tipo:"individual",modalidades:["Amateur / Open","Competitivo"],acciones:[["companero","⛳ Buscar compañeros",false]]},
escalada:{nombre:"🧗 Escalada deportiva",tipo:"individual",modalidades:["Bouldering","Lead","Speed"],acciones:[["companero","🧗 Buscar compañero",false],["grupo","👥 Buscar grupo",false]]},
remo:{nombre:"🚣 Remo",tipo:"equipo",modalidades:["Scull","Dos sin timonel","Cuatro sin timonel","Coastal rowing"],acciones:[["companero","🚣 Buscar compañeros",false]]},
tabla:{nombre:"🏄 Deportes de tabla",tipo:"individual",modalidades:["Surf","Bodyboard","Stand Up Paddle"],acciones:[["companero","🏄 Buscar compañeros",false],["salida","🌊 Crear o buscar salida",false]]},
combate:{nombre:"🥊 Artes marciales y combate",tipo:"individual",modalidades:["Boxeo","Judo","Karate","Taekwondo","MMA"],acciones:[["sparring","🥊 Buscar sparring",false],["entrenamiento","🥋 Buscar entrenamiento",false]]},
invierno:{nombre:"⛷️ Deportes de invierno",tipo:"individual",modalidades:["Esquí alpino","Esquí de fondo","Snowboard"],acciones:[["companero","⛷️ Buscar compañeros",false],["grupo","👥 Buscar grupo",false]]},
padel:{nombre:"🎾 Pádel",tipo:"individual",modalidades:["Pádel dobles","Pádel singles"],acciones:[["rival","⚔️ Buscar rivales",false],["companero","🤝 Buscar pareja",false]]},
rayuela:{nombre:"🎯 Rayuela",tipo:"individual",modalidades:["Individual","Parejas / Duplas"],acciones:[["rival","⚔️ Buscar rival",false],["companero","🤝 Buscar compañero",false]]}
};

const candidatos=[
{id:1,entidad:"equipo",nombre:"Los Titanes",deporte:"futbol",modalidad:"Fútbol 7 / Baby-fútbol",nivel:3,zona:"Coquimbo",horario:"noche",distancia:3.2,reputacion:4.9,rating:1380,encuentros:28},
{id:2,entidad:"equipo",nombre:"Unión Peñuelas",deporte:"futbol",modalidad:"Fútbol 7 / Baby-fútbol",nivel:4,zona:"Peñuelas",horario:"noche",distancia:5.4,reputacion:4.8,rating:1452,encuentros:42},
{id:3,entidad:"equipo",nombre:"Deportivo Norte",deporte:"futbol",modalidad:"Fútbol 7 / Baby-fútbol",nivel:3,zona:"La Serena",horario:"noche",distancia:8.1,reputacion:4.7,rating:1325,encuentros:19},
{id:4,entidad:"persona",nombre:"Martín R.",deporte:"padel",modalidad:"Pádel dobles",nivel:3,zona:"La Serena",horario:"tarde",distancia:6.1,reputacion:4.9,rating:1401,encuentros:35},
{id:5,entidad:"grupo",nombre:"SUP Bahía",deporte:"tabla",modalidad:"Stand Up Paddle",nivel:2,zona:"Coquimbo",horario:"mañana",distancia:1.5,reputacion:5,rating:null,encuentros:16},
{id:6,entidad:"grupo",nombre:"Runners Costa",deporte:"atletismo",modalidad:"Carreras de calle",nivel:2,zona:"Coquimbo",horario:"mañana",distancia:2.4,reputacion:4.9,rating:null,encuentros:31},
{id:7,entidad:"persona",nombre:"Matías Fight",deporte:"combate",modalidad:"Boxeo",nivel:3,zona:"La Serena",horario:"noche",distancia:7.2,reputacion:4.8,rating:null,encuentros:22},
{id:8,entidad:"persona",nombre:"Benjamín Soto",deporte:"futbol",modalidad:"Fútbol 7 / Baby-fútbol",nivel:3,zona:"Coquimbo",horario:"noche",distancia:2.8,reputacion:4.9,rating:1260,encuentros:17},
{id:9,entidad:"persona",nombre:"Vicente Díaz",deporte:"futbol",modalidad:"Fútbol 7 / Baby-fútbol",nivel:3,zona:"La Serena",horario:"noche",distancia:7.3,reputacion:4.7,rating:1290,encuentros:13}
];

const guardarDato=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const cargarDato=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){console.error(e);return d}};

let perfil=cargarDato("matchupPerfil",{nombre:"",ciudad:"",deporte:"",modalidad:"",nivel:3,rating:1200,reputacion:5});
let favoritos=cargarDato("matchupFavoritos",[]);
let equipos=cargarDato("matchupEquipos",[]);
let historial=cargarDato("matchupHistorial",[
{rival:"Deportivo Costanera",deporte:"Fútbol 7",resultado:"Victoria",marcador:"5 - 3",fecha:"08 Sep"},
{rival:"Los Vikingos",deporte:"Fútbol 7",resultado:"Derrota",marcador:"2 - 4",fecha:"02 Sep"}
]);

const $=id=>document.getElementById(id);
const paginas={inicio:$("paginaInicio"),buscar:$("paginaBuscar"),actividad:$("paginaActividad"),equipos:$("paginaEquipos"),perfil:$("paginaPerfil"),ayuda:$("paginaAyuda")};
const navItems=document.querySelectorAll(".navItem"),deporteSelect=$("deporte"),modalidadSelect=$("modalidad"),tipoBusquedaSelect=$("tipoBusqueda"),equipoBusquedaSelect=$("equipoBusqueda"),nivelSelect=$("nivel"),zonaSelect=$("zona"),horarioSelect=$("horario"),deportePerfil=$("deportePerfil"),deporteEquipo=$("deporteEquipo");

function irAPagina(nombre){
Object.values(paginas).forEach(p=>p?.classList.remove("activa"));
paginas[nombre]?.classList.add("activa");
navItems.forEach(b=>b.classList.toggle("activo",b.dataset.pagina===nombre));
window.scrollTo({top:0,behavior:"smooth"});
}

navItems.forEach(b=>b.addEventListener("click",()=>irAPagina(b.dataset.pagina)));
document.querySelectorAll("[data-ir]").forEach(b=>b.addEventListener("click",()=>irAPagina(b.dataset.ir)));
$("avatarHeader")?.addEventListener("click",()=>irAPagina("perfil"));
$("botonAyuda")?.addEventListener("click",()=>irAPagina("ayuda"));

function cargarDeportes(select){
if(!select)return;
Object.entries(deportes).forEach(([id,d])=>{const o=document.createElement("option");o.value=id;o.textContent=d.nombre;select.appendChild(o)});
}
[cargarDeportes(deporteSelect),cargarDeportes(deportePerfil),cargarDeportes(deporteEquipo)];

deporteSelect?.addEventListener("change",actualizarBusqueda);
modalidadSelect?.addEventListener("change",actualizarEquiposBusqueda);
tipoBusquedaSelect?.addEventListener("change",actualizarEquiposBusqueda);

function actualizarBusqueda(){
const id=deporteSelect.value,bm=$("bloqueModalidad"),bt=$("bloqueTipoBusqueda"),be=$("bloqueEquipoBusqueda");
if(!id){bm?.classList.add("oculto");bt?.classList.add("oculto");be?.classList.add("oculto");return}
modalidadSelect.innerHTML='<option value="">Selecciona modalidad</option>';
deportes[id].modalidades.forEach(m=>{const o=document.createElement("option");o.value=m;o.textContent=m;modalidadSelect.appendChild(o)});
tipoBusquedaSelect.innerHTML="";
deportes[id].acciones.forEach(a=>{const o=document.createElement("option");o.value=a[0];o.textContent=a[1];tipoBusquedaSelect.appendChild(o)});
bm?.classList.remove("oculto");bt?.classList.remove("oculto");actualizarEquiposBusqueda();
}

function busquedaRequiereEquipo(){
const d=deportes[deporteSelect?.value];if(!d)return false;
const a=d.acciones.find(x=>x[0]===tipoBusquedaSelect?.value);return a?a[2]:false;
}

function actualizarEquiposBusqueda(){
const b=$("bloqueEquipoBusqueda"),av=$("avisoEquipo");if(!b||!equipoBusquedaSelect)return;
if(!busquedaRequiereEquipo()){b.classList.add("oculto");return}
b.classList.remove("oculto");
const compatibles=equipos.filter(e=>e.deporte===deporteSelect.value&&(!modalidadSelect.value||e.modalidad===modalidadSelect.value));
equipoBusquedaSelect.innerHTML="";
if(!compatibles.length){equipoBusquedaSelect.innerHTML='<option value="">No tienes un equipo compatible</option>';if(av)av.textContent="🛡️ Crea primero un equipo compatible.";return}
compatibles.forEach(e=>{const o=document.createElement("option");o.value=e.id;o.textContent=`${e.nombre} · ${e.integrantes.length}/${e.cupo}`;equipoBusquedaSelect.appendChild(o)});
if(av)av.textContent="Este equipo representará tu lado del Match.";
}

function calcularCompatibilidad(c,n,z,h){
let p=0,d=Math.abs(c.nivel-n);p+=d===0?30:d===1?21:7;p+=c.zona===z?20:9;p+=c.horario===h?20:6;p+=(c.reputacion/5)*15;p+=c.distancia<=3?15:c.distancia<=7?10:5;return Math.round(p)
}

function entidadEsperada(){
const t=tipoBusquedaSelect?.value;
if(t==="rival")return deportes[deporteSelect?.value]?.tipo==="equipo"?"equipo":"persona";
if(["jugador","companero","sparring","entrenamiento"].includes(t))return"persona";
if(["grupo","salida"].includes(t))return"grupo";return null
}

$("buscar")?.addEventListener("click",buscarMatches);

function buscarMatches(){
const d=deporteSelect.value,m=modalidadSelect.value,n=Number(nivelSelect.value),z=zonaSelect.value,h=horarioSelect.value;
if(!d||!m||!n||!z||!h){alert("Completa todos los campos.");return}
if(busquedaRequiereEquipo()&&!equipoBusquedaSelect.value){alert("Necesitas un equipo compatible para realizar esta búsqueda.");return}
const e=entidadEsperada(),r=candidatos.filter(c=>c.deporte===d&&c.modalidad===m&&(!e||c.entidad===e)).map(c=>({...c,compatibilidad:calcularCompatibilidad(c,n,z,h)})).sort((a,b)=>b.compatibilidad-a.compatibilidad);
mostrarResultados(r,d,m);
}

function mostrarResultados(lista,d,m){
const c=$("listaResultados");if(!c)return;c.innerHTML="";$("resultados")?.classList.remove("oculto");$("cantidadResultados").textContent=lista.length;$("resumenBusqueda").textContent=`${deportes[d].nombre} · ${m}`;
if(!lista.length){c.innerHTML='<div class="mensaje">😕 No encontramos coincidencias todavía.<br><br>Puedes guardar esta búsqueda.</div>';return}
lista.forEach(x=>{const card=document.createElement("div"),fav=favoritos.includes(x.id);card.className="resultado";card.innerHTML=`<div class="resultadoTop"><div><h3>${iconoEntidad(x.entidad)} ${x.nombre}</h3><small>${x.encuentros} encuentros verificados</small></div><span class="compatibilidad">${x.compatibilidad}% Match</span></div><div class="detalles">📍 ${x.zona} · ${x.distancia} km<br>🎯 ${nombreNivel(x.nivel)}<br>⭐ ${x.reputacion} reputación${x.rating?`<br>🏆 Rating ${x.rating}`:""}</div><div class="accionesResultado"><button class="desafiar">${textoAccion()}</button><button class="favorito ${fav?"guardado":""}">${fav?"❤️":"🤍"}</button></div>`;
const ba=card.querySelector(".desafiar"),bf=card.querySelector(".favorito");ba.addEventListener("click",()=>enviarSolicitud(x,ba));bf.addEventListener("click",()=>alternarFavorito(x.id,bf));c.appendChild(card)})
}

function textoAccion(){return({rival:"⚔️ Desafiar",jugador:"👥 Invitar",companero:"🤝 Contactar",grupo:"👥 Solicitar unirse",salida:"🌊 Unirme",sparring:"🥊 Proponer sparring",entrenamiento:"🥋 Contactar"})[tipoBusquedaSelect?.value]||"Contactar"}
function iconoEntidad(e){return({equipo:"🛡️",persona:"👤",grupo:"👥"})[e]||"🏆"}

function enviarSolicitud(c,b){
b.textContent="✅ Solicitud enviada";b.disabled=true;let origen=perfil.nombre||"Usuario";
if(busquedaRequiereEquipo()){const e=equipos.find(x=>String(x.id)===String(equipoBusquedaSelect.value));if(e)origen=e.nombre}
historial.unshift({rival:c.nombre,deporte:modalidadSelect.value,resultado:"Pendiente",marcador:`Solicitud de ${origen}`,fecha:"Hoy"});guardarDato("matchupHistorial",historial);actualizarActividad();
}

function alternarFavorito(id,b){
if(favoritos.includes(id)){favoritos=favoritos.filter(x=>x!==id);b.textContent="🤍";b.classList.remove("guardado")}else{favoritos.push(id);b.textContent="❤️";b.classList.add("guardado")}
guardarDato("matchupFavoritos",favoritos);actualizarFavoritos();
}

deportePerfil?.addEventListener("change",actualizarModalidadPerfil);
function actualizarModalidadPerfil(){
const id=deportePerfil.value,b=$("modalidadPerfilBloque"),s=$("modalidadPerfil");if(!id){b?.classList.add("oculto");return}s.innerHTML="";deportes[id].modalidades.forEach(m=>{const o=document.createElement("option");o.value=m;o.textContent=m;s.appendChild(o)});b?.classList.remove("oculto")
}

$("guardarPerfil")?.addEventListener("click",guardarPerfil);
function guardarPerfil(){
perfil.nombre=$("nombrePerfil").value.trim();perfil.ciudad=$("ciudadPerfil").value;perfil.deporte=deportePerfil.value;perfil.modalidad=$("modalidadPerfil").value;perfil.nivel=Number($("nivelPerfil").value);
if(!perfil.nombre||!perfil.ciudad||!perfil.deporte||!perfil.modalidad){alert("Completa los datos principales.");return}
guardarDato("matchupPerfil",perfil);actualizarPerfil();actualizarRecomendados();renderizarEquipos();alert("✅ Perfil deportivo guardado")
}

function actualizarPerfil(){
const set=(id,t)=>{if($(id))$(id).textContent=t},n=perfil.nombre||"Deportista";
set("perfilNombre",n);set("nombreResumen",n);set("saludoUsuario",perfil.nombre?`Hola, ${perfil.nombre} 👋 ¿Listo para tu próximo Match?`:"Encuentra rivales, compañeros y deportistas compatibles contigo.");set("perfilUbicacion",perfil.ciudad||"Completa tu perfil");set("perfilRating",perfil.rating);set("ratingResumen",perfil.deporte?perfil.rating:"—");set("perfilReputacion",Number(perfil.reputacion).toFixed(1));set("deporteResumen",perfil.deporte?`${deportes[perfil.deporte].nombre} · ${perfil.modalidad}`:"Cuéntanos qué deporte practicas.");actualizarFichaDeportiva();cargarFormularioPerfil()
}

function actualizarFichaDeportiva(){
const c=$("fichaDeportiva");if(!c)return;c.innerHTML=`<div class="datoPerfil"><span>Deporte</span><strong>${perfil.deporte?deportes[perfil.deporte].nombre:"Sin definir"}</strong></div><div class="datoPerfil"><span>Modalidad</span><strong>${perfil.modalidad||"Sin definir"}</strong></div><div class="datoPerfil"><span>Nivel declarado</span><strong>${nombreNivel(perfil.nivel)}</strong></div><div class="datoPerfil"><span>Rating Matchup</span><strong>🏆 ${perfil.rating}</strong></div><div class="datoPerfil"><span>Reputación</span><strong>⭐ ${perfil.reputacion}</strong></div><div class="datoPerfil"><span>Equipos</span><strong>🛡️ ${equipos.length}</strong></div>`
}

function cargarFormularioPerfil(){
if($("nombrePerfil"))$("nombrePerfil").value=perfil.nombre;if($("ciudadPerfil"))$("ciudadPerfil").value=perfil.ciudad;if(deportePerfil)deportePerfil.value=perfil.deporte;
if(perfil.deporte){actualizarModalidadPerfil();if($("modalidadPerfil"))$("modalidadPerfil").value=perfil.modalidad}
if($("nivelPerfil"))$("nivelPerfil").value=perfil.nivel
}

deporteEquipo?.addEventListener("change",actualizarModalidadEquipo);
function actualizarModalidadEquipo(){
const id=deporteEquipo.value,b=$("bloqueModalidadEquipo"),s=$("modalidadEquipo");if(!id){b?.classList.add("oculto");return}s.innerHTML="";deportes[id].modalidades.forEach(m=>{const o=document.createElement("option");o.value=m;o.textContent=m;s.appendChild(o)});b?.classList.remove("oculto")
}

$("crearEquipo")?.addEventListener("click",crearEquipo);
function crearEquipo(){
const nombre=$("nombreEquipo").value.trim(),deporte=deporteEquipo.value,modalidad=$("modalidadEquipo").value,zona=$("zonaEquipo").value,nivel=Number($("nivelEquipo").value),cupo=Number($("cupoEquipo").value);
if(!perfil.nombre){alert("Primero crea tu perfil. Necesitamos saber quién será el capitán.");irAPagina("perfil");return}
if(!nombre||!deporte||!modalidad||!zona||!cupo){alert("Completa todos los datos del equipo.");return}
equipos.push({id:Date.now(),nombre,deporte,modalidad,zona,nivel,cupo,rating:1200,reputacion:5,capitan:perfil.nombre,integrantes:[perfil.nombre]});guardarDato("matchupEquipos",equipos);limpiarFormularioEquipo();renderizarEquipos();actualizarFichaDeportiva();actualizarEquiposBusqueda();alert(`🛡️ ${nombre} creado correctamente`)
}

function limpiarFormularioEquipo(){
$("nombreEquipo").value="";deporteEquipo.value="";$("bloqueModalidadEquipo")?.classList.add("oculto");$("zonaEquipo").value="";$("nivelEquipo").value="3";$("cupoEquipo").value="7"
}

function renderizarEquipos(){
const c=$("listaEquipos"),i=$("equiposInicio"),q=$("cantidadEquipos");if(q)q.textContent=`${equipos.length} ${equipos.length===1?"equipo":"equipos"}`;if(!c||!i)return;
if(!equipos.length){c.innerHTML='<div class="mensaje">🛡️ Todavía no tienes equipos.<br><br>Crea uno para competir contra otros equipos o buscar jugadores.</div>';i.innerHTML='<div class="mensaje">Aún no perteneces a ningún equipo.</div>';return}
c.innerHTML="";
equipos.forEach(e=>{const card=document.createElement("div"),libres=Math.max(e.cupo-e.integrantes.length,0);card.className="equipoCard";card.innerHTML=`<div class="equipoTop"><div class="equipoNombre"><div class="escudo">🛡️</div><div><h3>${e.nombre}</h3><small>${deportes[e.deporte].nombre} · ${e.modalidad}</small></div></div><button class="botonPeligro eliminarEquipo">✕</button></div><div class="detalles">📍 ${e.zona}<br>🎯 ${nombreNivel(e.nivel)}<br>👑 Capitán: ${e.capitan}</div><div class="equipoMetricas"><div class="metrica"><strong>${e.integrantes.length}/${e.cupo}</strong><span>JUGADORES</span></div><div class="metrica"><strong>${e.rating}</strong><span>RATING</span></div><div class="metrica"><strong>⭐ ${e.reputacion}</strong><span>REPUTACIÓN</span></div></div><div class="integrantes"><div class="integrantesTitulo"><strong>Plantel</strong><span>${libres} ${libres===1?"cupo disponible":"cupos disponibles"}</span></div><div class="listaJugadores">${crearHTMLJugadores(e)}</div>${libres>0?'<div class="agregarJugador"><input class="inputJugador" placeholder="Nombre del jugador"><button class="botonAgregarJugador">+</button></div>':'<div class="aviso">🔒 Plantel completo</div>'}</div>`;
card.querySelector(".eliminarEquipo").addEventListener("click",()=>eliminarEquipo(e.id));const ba=card.querySelector(".botonAgregarJugador");if(ba)ba.addEventListener("click",()=>agregarJugador(e.id,card.querySelector(".inputJugador").value));card.querySelectorAll(".eliminarJugador").forEach(b=>b.addEventListener("click",()=>eliminarJugador(e.id,b.dataset.nombre)));c.appendChild(card)});
i.innerHTML=equipos.slice(0,2).map(e=>`<div class="recomendado"><strong>🛡️ ${e.nombre}</strong><div class="detalles">${e.modalidad}<br>👥 ${e.integrantes.length}/${e.cupo} · 🏆 ${e.rating}</div></div>`).join("")
}

function crearHTMLJugadores(e){return e.integrantes.map(j=>{const cap=j===e.capitan;return`<div class="jugador"><div class="jugadorInfo"><div class="jugadorAvatar">👤</div><div>${j}${cap?'<div class="capitan">👑 CAPITÁN</div>':""}</div></div>${!cap?`<button class="botonPeligro eliminarJugador" data-nombre="${j}">✕</button>`:""}</div>`}).join("")}
function agregarJugador(id,n){n=n.trim();if(!n){alert("Escribe el nombre del jugador.");return}const e=equipos.find(x=>x.id===id);if(!e)return;if(e.integrantes.length>=e.cupo){alert("El plantel ya está completo.");return}if(e.integrantes.some(j=>j.toLowerCase()===n.toLowerCase())){alert("Ese jugador ya pertenece al equipo.");return}e.integrantes.push(n);guardarDato("matchupEquipos",equipos);renderizarEquipos();actualizarEquiposBusqueda()}
function eliminarJugador(id,n){const e=equipos.find(x=>x.id===id);if(!e||n===e.capitan)return;e.integrantes=e.integrantes.filter(j=>j!==n);guardarDato("matchupEquipos",equipos);renderizarEquipos();actualizarEquiposBusqueda()}
function eliminarEquipo(id){const e=equipos.find(x=>x.id===id);if(!e||!confirm(`¿Eliminar ${e.nombre}?`))return;equipos=equipos.filter(x=>x.id!==id);guardarDato("matchupEquipos",equipos);renderizarEquipos();actualizarFichaDeportiva();actualizarEquiposBusqueda()}

function actualizarActividad(){
const j=historial.filter(x=>x.resultado!=="Pendiente"),g=j.filter(x=>x.resultado==="Victoria"),p=j.length?Math.round(g.length/j.length*100):0,set=(id,t)=>{if($(id))$(id).textContent=t};
set("actividadJugados",j.length);set("actividadGanados",g.length);set("actividadRatio",p+"%");set("statPartidos",j.length);set("statVictorias",g.length);set("statReputacion",Number(perfil.reputacion).toFixed(1));mostrarHistorial()
}

function mostrarHistorial(){
const c=$("historialActividad");if(!c)return;c.innerHTML="";historial.forEach(x=>{const e=document.createElement("div");let clase=x.resultado==="Victoria"?"resultadoVictoria":x.resultado==="Derrota"?"resultadoDerrota":"resultadoPendiente";e.className="itemHistorial";e.innerHTML=`<div class="itemHistorialTop"><strong>${x.rival}</strong><strong class="${clase}">${x.resultado}</strong></div><p>${x.deporte} · ${x.marcador} · ${x.fecha}</p>`;c.appendChild(e)})
}

function actualizarFavoritos(){
const c=$("listaFavoritos");if(!c)return;const l=candidatos.filter(x=>favoritos.includes(x.id));c.innerHTML=l.length?l.map(x=>`<div class="datoPerfil"><span>❤️ ${x.nombre}</span><strong>⭐ ${x.reputacion}</strong></div>`).join(""):'<p style="color:#94a3b8">Aún no has guardado favoritos.</p>'
}

function actualizarRecomendados(){
const c=$("recomendadosInicio");if(!c)return;let s=perfil.deporte&&perfil.modalidad?candidatos.filter(x=>x.deporte===perfil.deporte&&x.modalidad===perfil.modalidad):candidatos.slice(0,2);s=s.slice(0,2);c.innerHTML=s.length?s.map(x=>`<div class="recomendado"><strong>${iconoEntidad(x.entidad)} ${x.nombre}</strong><div class="detalles">${x.modalidad}<br>📍 ${x.zona} · ⭐ ${x.reputacion}</div></div>`).join(""):'<div class="mensaje">Completa tu perfil para mejorar tus recomendaciones.</div>'
}

$("guardarBusqueda")?.addEventListener("click",()=>{if(!deporteSelect.value||!modalidadSelect.value){alert("Primero configura una búsqueda.");return}guardarDato("matchupBusquedaGuardada",{deporte:deporteSelect.value,modalidad:modalidadSelect.value,tipo:tipoBusquedaSelect.value,equipo:equipoBusquedaSelect.value||null,nivel:nivelSelect.value,zona:zonaSelect.value,horario:horarioSelect.value});alert("🔔 Búsqueda guardada")});

function revisarOnboarding(){if(!cargarDato("matchupOnboarding",false))$("onboarding")?.classList.remove("oculto")}
function cerrarOnboarding(){guardarDato("matchupOnboarding",true);$("onboarding")?.classList.add("oculto")}
$("onboardingPerfil")?.addEventListener("click",()=>{cerrarOnboarding();irAPagina("perfil")});
$("onboardingExplorar")?.addEventListener("click",()=>{cerrarOnboarding();irAPagina("inicio")});

function nombreNivel(n){return({1:"Principiante",2:"Recreativo",3:"Intermedio",4:"Competitivo",5:"Avanzado"})[n]||"Sin definir"}

actualizarPerfil();
actualizarActividad();
actualizarFavoritos();
actualizarRecomendados();
renderizarEquipos();
actualizarEquiposBusqueda();
revisarOnboarding();
