class Usuario{
nombre='NN';
apellido='NA';
edad=0;
tipo='NT';

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

