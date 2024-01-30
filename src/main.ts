import { pacientes } from "./datos";
import {Pacientes} from "./modelo";

//Apartado 1

//a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

let obternerPacientesPediatria : Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = (
    pacientes : Pacientes[]
  ) : Pacientes[] => {
    for(let i=0; i<pacientes.length;i++){
        if(pacientes[i].especialidad === "Pediatra"){
            obternerPacientesPediatria =[...obternerPacientesPediatria, pacientes[i]];
            }
        }
    return obternerPacientesPediatria;
    }

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

let obternerPacientesPediatria1 : Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes : Pacientes[]
  ) : Pacientes[] => {
    for(let i=0; i<pacientes.length;i++){
        if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10){
            obternerPacientesPediatria1 =[...obternerPacientesPediatria1, pacientes[i]];
            }
        }
    return obternerPacientesPediatria1;
    }

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2

let activarProctolo : boolean = false;

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].frecuenciaCardiaca >= 100 && pacientes[i].temperatura > 39){
            activarProctolo = true;
            console.log("Se ha activado el protocolo de emergencía")
            break;        
        }
    }
    return activarProctolo;
  };

  console.log(activarProtocoloUrgencia(pacientes))

  //Apartado 3

  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra"){
            pacientes[i].especialidad = "Medico de familia";
        }
    }
    return pacientes;
  };

  console.log(reasignaPacientesAMedicoFamilia(pacientes))

  //Apartado 4
  let hayPacientes : boolean = false;

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for(let i = 0; i<pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra"){
            hayPacientes = true;
            console.log("El Pediatra se puede ir a casa")
            break;
        }
    }
    return hayPacientes;
  };
  console.log(HayPacientesDePediatria(pacientes))

  //Apartado 5

  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  let numeroPacientes : NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Cardiólogo"){
            numeroPacientes.cardiologia += 1;
        }else if (pacientes[i].especialidad === "Medico de familia"){
            numeroPacientes.medicoDeFamilia += 1;
        }else{
            numeroPacientes.pediatria += 1;
        }
    }
    return numeroPacientes;
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes))