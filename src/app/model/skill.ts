export class Skill {
    id?: number;
    nombreHab: string;
    iconHab: string;
    nivelHab: number;
    etiquetaHab: string;

    constructor(nombreHab: string, iconHab: string, nivelHab: number, etiquetaHab: string) {
        this.nombreHab = nombreHab;
        this.iconHab = iconHab;
        this.nivelHab = nivelHab;
        this.etiquetaHab = etiquetaHab;
    }
}