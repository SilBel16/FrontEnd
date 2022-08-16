export class persona{
    id?: number; //Dato no necesario, es automático
    nombre: string;
    apellido: string;
    profileImg: string;
    position: string;
    aboutMe: string;
    cvFile: string;
    mail: string;
    phone: string;
    city: string;
    country: string;

    constructor(nombre: string, apellido: string, profileImg: string, position: string, aboutMe: string, cvFile: string, mail: string, phone: string, city: string, country: string) {
        this.nombre = nombre; //inicializo los atributos
        this.apellido = apellido;
        this.profileImg = profileImg;
        this.position = position;
        this.aboutMe = aboutMe;    
        this.cvFile = cvFile;   
        this.mail = mail;
        this.phone = phone;
        this.city = city;
        this.country = country; 
    }
}