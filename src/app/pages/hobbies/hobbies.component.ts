import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { InfoCard } from 'src/models/InfoCard';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

    infoCards: InfoCard[] = [];

    constructor() {

    }

    ngOnInit(): void {
        this.init();
        setInterval(() => this.updateAlter(), 1)
        this.updateAlter();
    }

    private updateAlter(): void {
        const date = dayjs('2011-01-07');
        const now = dayjs();
        const age = now.diff(date, 'y');
        const days = now.diff(date, 'd')
        const seconds = now.diff(date, 's')
        const card = this.infoCards.find(x => x.id === 3);
        if (card) {
            card.text = `Ich bin also ${age} Jahre alt, das sind ${days} Tage oder ${seconds} Sekunden`
        }
    }

    private init(): void {
        this.infoCards = [
            {
                id: 3,
                title: 'Mein Geburtsdatum: 07.01.2011',
                text: ``,
                images: [
                    './assets/torte.jpg'
                ]
            },
            {
                id: 0,
                title: 'Meine Hobbies:',
                text: 'Kung Fu, Fussball und Mountain-biken.',
                images: [
                    './assets/kunfu.jpg',
                    './assets/fussball.jpg',
                    './assets/Fanes-Enduro-Mountainbike.jpg'
                ]
            },
            {
                id: 1,
                title: 'Meine Lieblingsfarben: ',
                text: 'Grün, Rot und Blau.',
                images: []
            },
            {
                id: 2,
                title: 'Mein Lieblingsessen: ',
                text: 'Pommes und Chicken Nuggets und Hot dog.',
                images: [
                    './assets/ChickenNuggetsMitPommes.jpg',
                    './assets/hotdog_156787409_1000.jpg'
                ]
            },

        ]
    }

}
