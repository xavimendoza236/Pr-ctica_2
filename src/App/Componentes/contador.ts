import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './Contador.html',
    styleUrl: './Contador.scss'
})

export class Contador {
    protected Contador = signal<number>(0);

    Sumar(): void {
        this.Contador.update((v) => v + 1);
    }       
    Restar(): void {
        this.Contador.update((v) => v - 1);
    }
}