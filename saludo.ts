let nombre: string = "Jin";
let credito: number = 14;
let activo: boolean = true;

console.log("Nombre: ",nombre, "Creditos: ", credito, "Activo: ", activo);

function saludar(Persona: String):String{
    return "Bienvenido/a " + Persona;
}

//creando objeto
interface Persona {
    nombre: string;
    creditos: number;

}

