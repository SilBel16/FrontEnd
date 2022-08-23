export class Educacion {
    id?: number;
    urlImgEdu: string;
    nombreEdu: string;
    descripcionEdu: string;
    inicioEdu: string;
    finEdu: string;
    urlEdu: string;

    constructor(urlImgEdu: string, nombreEdu: string, descripcionEdu: string, inicioEdu: string, finEdu: string, urlEdu: string) {
        this.urlImgEdu = urlImgEdu;
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.inicioEdu = inicioEdu;
        this.finEdu = finEdu;
        this.urlEdu = urlEdu;
    }
}

