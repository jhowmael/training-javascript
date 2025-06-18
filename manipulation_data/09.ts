/*
Você recebe um array de objetos representando eventos com campos inicio e fim no formato "HH:MM". Crie uma função que retorne um novo array com a duração de cada evento em minutos, mantendo os outros dados do evento.

Exemplo de entrada:

ts
Copiar
Editar
[
  { nome: "Reunião", inicio: "14:00", fim: "15:30" },
  { nome: "Almoço", inicio: "12:00", fim: "13:00" }
]
Saída esperada:

ts
Copiar
Editar
[
  { nome: "Reunião", duracao: 90 },
  { nome: "Almoço", duracao: 60 }
]
*/