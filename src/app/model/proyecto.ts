export class Proyecto {
    id?: number;
    urlImgPro: string;
    nombrePro: string;
    descripcionPro: string;
    urlPro: string;

    constructor(urlImgPro: string, nombrePro: string, descripcionPro: string, urlPro: string) {
        this.urlImgPro = urlImgPro;
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.urlPro = urlPro;
    }
}
