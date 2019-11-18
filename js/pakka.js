class Pakka {
    constructor() {
        this.pakka = [];
        for (let i=0; i<=51; i++) {
            this.pakka.push(i);
        }
        this.sekoita();
    }
    
    palautaPakkaan(kortit) {
        this.pakka.concat(kortit);
    }

    jaaKäsi(määrä) {
        let käsi = [];

        for (let i=1; i<=määrä; i++) {
            käsi.push(this.otaKortti());
        }

        return käsi;
    }

    otaKortti() {
        return this.pakka.splice(0,1)[0];
    }

    sekoita() {
        for (let i = this.pakka.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        
            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [this.pakka[i], this.pakka[j]] = [this.pakka[j], this.pakka[i]];
        }
    }

    static getMaa(kortti) {
        // kortti on Numero 0-51
        const maat=['Pata', 'Ruutu', 'Risti', 'Hertta'];

        return maat[ Math.floor(kortti / 13) ];
    }

    static getNumero(kortti) {
        return (kortti % 13) + 1;
    }
}