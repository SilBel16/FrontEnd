export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    inicioE: string;
    finE: string;

    constructor(nombreE: string, descripcionE: string, inicioE: string, finE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finE = finE;
    }
}

