// Código JavaScript para la encuesta interactiva

// Función para mostrar la siguiente pregunta
function mostrarSiguientePregunta() {
  // Lógica para mostrar la siguiente pregunta
  console.log('Mostrar siguiente pregunta');
}

// Función para validar la respuesta seleccionada
function validarRespuesta() {
  const idEmpleado = document.getElementById('id-empleado').value;
  const email = document.getElementById('email').value;
  const regexId = /^[0-9]{5}[A-Z]$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexId.test(idEmpleado)) {
    alert('Por favor, ingrese un ID Empleado válido (5 números seguidos de una letra mayúscula).');
    return;
  }

  if (!regexEmail.test(email)) {
    alert('Por favor, ingrese un email válido.');
    return;
  }

  // Lógica para validar la respuesta seleccionada
  console.log('Validar respuesta seleccionada');
}

// Función para guardar los resultados de la encuesta
function guardarResultados() {
  const idEmpleado = document.getElementById('id-empleado').value;
  const email = document.getElementById('email').value;
  const regexId = /^[0-9]{5}[A-Z]$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexId.test(idEmpleado)) {
    alert('Por favor, ingrese un ID Empleado válido (5 números seguidos de una letra mayúscula).');
    return;
  }

  if (!regexEmail.test(email)) {
    alert('Por favor, ingrese un email válido.');
    return;
  }

  // Lógica para guardar los resultados de la encuesta
  console.log('Guardar resultados de la encuesta');
}

// Evento para mostrar la siguiente pregunta al hacer clic en el botón "Siguiente"
document.getElementById('btn-siguiente').addEventListener('click', mostrarSiguientePregunta);

// Evento para validar la respuesta al hacer clic en el botón "Enviar"
document.getElementById('btn-enviar').addEventListener('click', validarRespuesta);

// Evento para guardar los resultados al hacer clic en el botón "Guardar"
document.getElementById('btn-guardar').addEventListener('click', guardarResultados);