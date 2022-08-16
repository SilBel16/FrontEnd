export class persona{
    id?: number; //Dato no necesario, es automático
    nombre: string;
    apellido: string;
    profileImg: string;
    position: string;
    aboutMe: string;
    cvFile: string;

    constructor(nombre: string, apellido: string, profileImg: string, position: string, aboutMe: string, cvFile: string) {
        this.nombre = nombre; //inicializo los atributos
        this.apellido = apellido;
        this.profileImg = profileImg;
        this.position = position;
        this.aboutMe = aboutMe;    
        this.cvFile = cvFile;    
    }
}