<template>
  <div class="card">
    <div class="row">
      <h2>Calendário com Eventos</h2>
      <div class="calendar">
        <div v-for="(day, index) in calendarDays" :key="index" class="day">
          <span class="date">{{ day.date }}</span>
         
          <ul>
            <li v-for="(event, i) in day.events" :key="i" class="event">
              {{ event }}
              <button @click="removeEvent(day.date, event)">Remover</button>
            </li>
          </ul>
        </div>
        <div class="add-event-form">
          <input type="date" v-model="newEventDate" placeholder="Data do Evento" />
          <input type="text" v-model="newEventName" placeholder="Nome do Evento" />
          <button @click="addEvent()">Adicionar Evento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Define os dados iniciais para o componente, incluindo os dias do calendário e as informações dos eventos.
    return {
      calendarDays: [
        {
          date: "2024-03-01",
          events: ["Reunião de equipe", "Aniversário de João"],
        },
        { date: "2024-03-15", events: ["Entrega do projeto"] },
        { date: "2024-03-28", events: ["Conferência de Tecnologia"] },
      ],
      newEventDate: "", // Data do novo evento a ser adicionado
      newEventName: "" // Nome do novo evento a ser adicionado
    };
  },
  methods: {
    addEvent() {
      // Método para adicionar um novo evento ao calendário.
      const day = this.calendarDays.find((day) => day.date === this.newEventDate);
      if (day) {
        // Se o dia já existir, adiciona o novo evento à lista de eventos desse dia.
        day.events.push(this.newEventName);
      } else {
        // Se o dia não existir, cria um novo objeto de dia com o evento.
        this.calendarDays.push({ date: this.newEventDate, events: [this.newEventName] });
      }
      this.newEventName = ""; // Limpa o campo de entrada para o nome do evento.
    },
    removeEvent(date, event) {
      // Método para remover um evento do calendário com base na data e no nome do evento.
      const day = this.calendarDays.find((day) => day.date === date);
      if (day) {
        // Se o dia for encontrado, filtra o evento específico a ser removido da lista de eventos desse dia.
        day.events = day.events.filter((e) => e !== event);
      }
    },
  },
};

</script>

<style scoped>


.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.calendar {
  display: flex;
  flex-wrap: wrap;
}

.day {
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
}

.date {
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

.event {
  margin-bottom: 5px;
}

button {
  padding: 5px 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff7f50;
}

.add-event-form {
  margin-top: 20px;
}

.add-event-form input {
  margin-right: 10px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.add-event-form button {
  padding: 8px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-event-form button:hover {
  background-color: #45a049;
}
</style>
