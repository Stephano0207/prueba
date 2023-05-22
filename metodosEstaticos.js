class Usuario{
    nombre;
    correo;
    constructor(nombre, correo){
        this.nombre=nombre;
        this.correo=correo;

    }

    borrarUsuario(id_usuario){
        console.log('el usuario con el id: '+id+' ha sido borrado de la base de datos');

    }
}

usuario = new Usuario('Shadow','shadow@gmail.com');
usuario.borrarUsuario(1);