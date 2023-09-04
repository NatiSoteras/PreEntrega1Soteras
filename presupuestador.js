
alert ('Bienvenidos al presupuestador de SOMOS DANZA 2023');

let operacion;
let presupuesto = 0;
let partGrupal = 0
const SOLO = 'S';
const DUO = 'D' ;
const TRIO = 'T' ;
const GRUPAL = 'G' ;

const VALORSOLO = 2000;
const VALORDUO = 1800;
const VALORTRIO = 1500;
const VALORGRUP = 1000;

function imprimir() {
    alert('El presupuesto total es: $' + presupuesto);
};

do {   
modalidad = prompt('Ingrese la modalidad por la que participa' + '\n'
    + '"S" Solo' + '\n'
    + '"D" Duo' + '\n'
    + '"T" Duo' + '\n'
    + '"G" Grupal (4 o mas personas)' + '\n') .toUpperCase();

    switch(modalidad) {
        case SOLO:
            presupuesto =  presupuesto + VALORSOLO;
            break;  
        case DUO: 
            presupuesto =  presupuesto + VALORDUO * 2;
            break;  
        case TRIO:
            presupuesto =  presupuesto + VALORTRIO * 3;
            break;  
        case GRUPAL:
            partGrupal = +prompt ('Ingrese la cantidad de participantes del grupal');
            presupuesto =  presupuesto + VALORGRUP * partGrupal;
            break;
        default:
            alert('Usted ha ingresado una opcion incorrecta');
    }
    
    continuar = prompt('Desea ingresar otra coreografia mas? si/no');    
        while (continuar != 'no' && continuar != 'si') {
            continuar = prompt('Debe ingresar "no" o "si"');
        }
    }while(continuar == 'si');


   imprimir ();

    