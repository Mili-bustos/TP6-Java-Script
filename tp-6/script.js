class Tarea {
  constructor(titulo, descripcion){
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.completada = false;
  }

  marcarCompleta(){
      this.completada = true;
  }

  getNombre(){
      return this.titulo;
  }

  getInfo(){
      var estado = (this.completada) ? "Completada " : "Pendiente ";
      return (this.titulo) + " - " + (this.descripcion) + " Estado: " + estado;
  }
}

var tareas = [];

function agregarTarea(){
  var titulo = document.getElementById("titulo").value;
  var descripcion = document.getElementById("descripcion").value;

  var nuevaTarea = new Tarea(titulo, descripcion);
  tareas.push(nuevaTarea);

  renderizarTareas();
  document.getElementById("formTarea").reset();
}

function renderizarTareas(){
  var listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  for (var i = 0; i < tareas.length; i++){
    var tarea = tareas[i];
    var li = document.createElement("li");
    li.className = "tarea";
    if (tarea.completada){
      li.classList.add("completada");
    }

    li.innerHTML =
    "<span>" + tarea.getNombre() + "</span>" +
    "<div>" +
    "<button id='btnCompletar" + i + "' onclick='completarTarea(" + i + ")'>Completar</button>" +
    "<button onclick='verInfo(" + i + ")'>Ver Info</button>" +
    "</div>";

    listaTareas.appendChild(li);

    if (tarea.completada) {
      var btn = document.getElementById("btnCompletar" + i);
      btn.style.backgroundColor = "blue";
      btn.style.color = "white";
    }
  }
}

function completarTarea(index) {
  tareas[index].marcarCompleta();
  renderizarTareas();
}

function verInfo(index){
  alert(tareas[index].getInfo());
}

  