// Obtener referencias a los elementos del DOM
const modalButton = document.querySelector(".cta-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const reservationForm = document.getElementById("reservation-form");
const ticketInfo = document.getElementById("ticket-info");

// Función para ocultar el cuadro modal
function closeModal() {
  modal.style.display = "none";
}

// Función para mostrar información del tiquete
function showTicketInfo() {
  const name = document.getElementById("name").value;
  const tickets = document.getElementById("tickets").value;
  const payment = document.getElementById("payment").value;
  const eventDate = document.getElementById("event-date").value;

  // Mostrar la información del tiquete en el cuadro modal
  ticketInfo.innerHTML = `
    <p>Información del Tiquete:</p>
    <p>Nombre: ${name}</p>
    <p>Cantidad de Tiquetes: ${tickets}</p>
    <p>Forma de Pago: ${payment}</p>
    <p>Fecha y Hora del Evento: ${eventDate}</p>
  `;
}

// Mostrar el cuadro modal cuando se hace clic en el botón "¡Reservar ahora!"
modalButton.addEventListener("click", () => {
  modal.style.display = "block";

  // Establecer valores predeterminados para forma de pago y país
  document.getElementById("payment").value = "Tarjeta de Crédito";
  document.getElementById("country").value = "Bélgica";

  // Generar lista de fechas y horas del evento según el país seleccionado
  updateEventDates();

  // Mostrar información del tiquete (antes de enviar el formulario)
  showTicketInfo();
});

// Ocultar el cuadro modal cuando se hace clic en el botón de cierre (x)
closeButton.addEventListener("click", () => {
  closeModal();
});

// Ocultar el cuadro modal cuando se hace clic fuera de él (fuera del contenido)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Gestionar el envío del formulario
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Aquí puedes agregar lógica para procesar la reserva y generar el tiquete en formato PDF
  // Por simplicidad, aquí solo mostramos un mensaje con la información de la reserva

  // Mostrar el cuadro modal con la información del tiquete
  modal.style.display = "block";

  // Mostrar información del tiquete (después de enviar el formulario)
  showTicketInfo();

  // Limpiar el formulario después de la reserva
  reservationForm.reset();
});

// Función para generar lista de fechas y horas del evento según el país seleccionado
function updateEventDates() {
  const country = document.getElementById("country").value;
  const eventDateSelect = document.getElementById("event-date");
  eventDateSelect.innerHTML = "";

  // Agregar opciones de fechas y horas del evento según el país
  if (country === "Bélgica") {
    eventDateSelect.innerHTML += `
      <option value="2023-08-20T12:00">20 de agosto de 2023 - 12:00</option>
      <option value="2023-08-21T13:00">21 de agosto de 2023 - 13:00</option>
      <!-- Agrega más opciones si lo deseas -->
    `;
  } else if (country === "Estados Unidos") {
    eventDateSelect.innerHTML += `
      <option value="2023-09-15T18:30">15 de septiembre de 2023 - 18:30</option>
      <option value="2023-09-16T19:00">16 de septiembre de 2023 - 19:00</option>
      <!-- Agrega más opciones si lo deseas -->
    `;
  }
}

// Función para mostrar información del tiquete
function showTicketInfo() {
  const name = document.getElementById("name").value;
  const tickets = document.getElementById("tickets").value;
  const payment = document.getElementById("payment").value;
  const eventDate = document.getElementById("event-date").value;
  const eventPrice = document.getElementById("event-price").value;

  // Mostrar la información del tiquete en el cuadro modal
  ticketInfo.innerHTML = `
    <p>Información del Tiquete:</p>
    <p>Nombre: ${name}</p>
    <p>Cantidad de Tiquetes: ${tickets}</p>
    <p>Forma de Pago: ${payment}</p>
    <p>Fecha y Hora del Evento: ${eventDate}</p>
    <p>Precio por persona: ${eventPrice}</p>
  `;
}

// Función para calcular y mostrar el precio por persona
function updateEventPrice() {
  const tickets = document.getElementById("tickets").value;
  const eventPricePerPerson = 50; // Precio base por persona (puedes ajustarlo según tus necesidades)

  // Calcular el precio total
  const totalPrice = eventPricePerPerson * tickets;

  // Mostrar el precio por persona en el campo de texto
  document.getElementById("event-price").value = totalPrice;
}

// Gestionar el cambio de la cantidad de tiquetes
document.getElementById("tickets").addEventListener("change", () => {
  updateEventPrice();
});
