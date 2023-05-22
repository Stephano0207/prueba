class Usuario{
nombre;
apellido;
edad;
tipo;

constructor (nombre,apellido,edad,tipo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.tipo=tipo;
    console.log('Inicio el constructor...');
}

 obtenerNombres(){
    console.log('Obtener los datos...');
    return this.nombre+' '+this.apellido;
}

}


usuario= new Usuario('Shadow','Castañeda',4,'perro');
let datos=usuario.obtenerNombres();
console.log(datos);