class Tarea {
  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completada = false;
  }

  getTitulo() {
    return this.titulo;
  }

  getDescripcion() {
    return this.descripcion;
  }

  getEstado() {
    return this.completada ? "Completada" : "Pendiente";
  }

  completar() {
    this.completada = true;
  }
}

var lista = [];

function enviar() {
  var titulo = document.getElementById("titulo").value;
  var descripcion = document.getElementById("descripcion").value;

  var tarea = new Tarea(titulo, descripcion);
  lista.push(tarea);

  listarTareas();
  document.getElementById("formTarea").reset();
}

function listarTareas() {
  var salida = "";

  for (var i = 0; i < lista.length; i++) {
    var tarea = lista[i];
    salida += `
      <div class="tarea ${tarea.completada ? 'completada' : ''}">
        ${tarea.getTitulo()}
        <button onclick="verInfo(${i})">Info</button>
        <button onclick="completarTarea(${i})">Completar</button>
      </div>
    `;
  }

  document.getElementById("result").innerHTML = salida;
}

function verInfo(index) {
  var tarea = lista[index];
  alert(
    "Título: " + tarea.getTitulo() + ", Descripción: " + tarea.getDescripcion() + ", Estado: " + tarea.getEstado()
  );
  
}

function completarTarea(index) {
  lista[index].completar();
  listarTareas();
}