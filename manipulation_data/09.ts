/*
Você recebe um array de objetos representando eventos com campos inicio e fim no formato "HH:MM".
Crie uma função que retorne um novo array com a duração de cada evento em minutos, mantendo os outros dados do evento.
*/

type Event = {
  name: string
  date: Date;
  start: string;
  end: string;
}


const events: Event[] = [
  { name: "Café da manhã", date: new Date("2025-06-25"), start: "07:20", end: "07:40" },
  { name: "Trabalho", date: new Date("2025-06-25"), start: "09:00", end: "16:00" },
  { name: "Almoço", date: new Date("2025-06-25"), start: "12:00", end: "13:00" },
  { name: "Academia", date: new Date("2025-06-25"), start: "16:30", end: "18:00" },
  { name: "jantar", date: new Date("2025-06-25"), start: "20:00", end: "20:20" },
];

function getMinutes(time: string): number {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

const formatedEvents = events.map(event => {
  const duration = getMinutes(event.end) - getMinutes(event.start);
  return {
    ...event,
    duration
  };
});
console.log(formatedEvents)


var teste: number = 2;

function getMinutes(time: string): number {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}