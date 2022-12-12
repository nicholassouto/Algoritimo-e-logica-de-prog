let patients = [
  {
    name: "Nick",
    age: 34,
    weight: 104,
    height: 1.79,
  },
  {
    name: "Lua",
    age: 6,
    weight: 3,
    height: 0.3,
  },
];

/*
let patientsNames = [];
let patientsAge = [];
let patientsWeight = [];
let patientsHeight = [];

for (let patient of patients) {
  patientsNames.push(patient.name);
  patientsAge.push(patient.age);
  patientsWeight.push(patient.weight);
  patientsHeight.push(patient.height);
}

for (let i = 0; i < patients.length; i++) {
  alert(`
  Seguem dados dos pacientes:
  ${patientsNames[i]},
  ${patientsAge[i]},
  ${patientsWeight[i]},
  ${patientsHeight[i]}
  `);
}
*/

// calcular imc dos pacientes - peso / (altura²)

// function IMC(weight, height) {
//   return (weight / patient.height ** 2).toFixed(2);
// }

// const printPatientIMC = function(patient) {}
// const printPatientIMC = (patient) => {}
function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de ${(patient.weight / patient.height ** 2).toFixed(2)}
  `;
}

// function printPatientIMC(patient) {
//   return `
//     Paciente ${patient.name} possui o IMC de ${(patient.weight, patient.height)}
//   `;
// }  versao da função para a chamada de função comentada acima

for (let patient of patients) {
  let messageIMC = printPatientIMC(patient);
  alert(messageIMC);
}
