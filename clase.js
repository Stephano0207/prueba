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
    console.log('Inicio el constructor');
}


}


usuario= new Usuario('Shadow','Castañeda',4,'perro');