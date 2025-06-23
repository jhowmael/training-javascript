//Dado um array de alunos com suas notas e pesos,
//crie uma função que calcule a média ponderada de cada aluno e retorne um novo array contendo o nome do aluno e sua média.


type studant = {
  name: string;
  points: {
    Math: { value: number; weight: number };
    Portuguese: { value: number; weight: number };
    History: { value: number; weight: number };
    Geography: { value: number; weight: number };
    Science: { value: number; weight: number };
  };
  avarage?: number;
};

const studants: studant[] = [
  {
    name: "João",
    points: {
      Math: { value: 8, weight: 2 },
      Portuguese: { value: 7, weight: 2 },
      History: { value: 9, weight: 3 },
      Geography: { value: 6, weight: 3 },
      Science: { value: 10, weight: 1 },
    },
  },
  {
    name: "Maria",
    points: {
      Math: { value: 9, weight: 3 },
      Portuguese: { value: 8, weight: 2 },
      History: { value: 7, weight: 4 },
      Geography: { value: 10, weight: 1 },
      Science: { value: 6, weight: 2 },
    },
  },
];



function calculateAvaragePoints(studants: studant[]) {
    studants.forEach((studant) => {
    const avarage = 
        studant.points.Math.value * studant.points.Math.weight +
        studant.points.Portuguese.value * studant.points.Portuguese.weight +  
        studant.points.History.value * studant.points.History.weight +  
        studant.points.Geography.value * studant.points.Geography.weight +  
        studant.points.Science.value * studant.points.Science.weight
        
        studant.avarage = avarage / 10;
    });

    return studants.map((studant) => ({
        name: studant.name,
        avarage: studant.avarage})
    );
}

console.log(calculateAvaragePoints(studants));