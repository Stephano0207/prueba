class Usuario{
    usuario;
    password;
constructor(usuario, password){
    this.usuario=usuario;
    this.password=password;
}

obtenerGet(){
    console.log('Obtener get del servidor');
}



}

class Moderador extends Usuario{
permisos=[];
    constructor(usuario, password, permisos){
        super(usuario,password);
        this.permisos=permisos;
    }

    borrarGets(id){
        if(this.permisos.includes('borrar')){
            console.log("El get con el "+id+ " ha sido borrado");
        }else{
            console.log('No tienes los permisos para borrar este get')
        }
    }



}

let usuario= new Usuario('Shadow','shadow@');
let moderador = new Moderador('Falcon','Falcon@',['editar']);
usuario.obtenerGet();
moderador.borrarGets(2);