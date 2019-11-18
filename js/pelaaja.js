class Pelaaja {
    constructor(nimi, raha) {
        this.nimi = nimi;
        this.raha = raha;
        this.käsi = [];
    }

    palautaKäsi() {
        let kortit = this.käsi;
        this.käsi = [];
        return kortit;
    }

    muutaRahaa(määrä) {
        this.raha += määrä;
        // TODO: Jos ei ole riitävä rahaa?
    }

    lisätäKortti(kortti) {
        this.käsi.push(kortti);
    }

    lisätäKäsi(käsi) {
        käsi.forEach(kortti => this.lisätäKortti(kortti));
    }

    vaihdaKortit(sijainnit, uudetKortit) {
        let vaidehtutKortit = [];
        // sijainnit ja uudetKortit -> Array
        sijainnit.forEach(sijainti => {
            vaidehtutKortit.push(this.käsi[sijainti]);
            this.käsi[sijainti] = uudetKortit.pop();
        });
        return vaidehtutKortit;
    }
}