let Game = {
    isColor: function(hand) {
        // Tarkastetaan onko kädessä väri
        let colors = hand.map(card => Pakka.getMaa(card));
        return colors.every(suit => suit == colors[0]);
    },

    isStraight: function(hand) {
        // Tarkastetaan onko kädessä suora
        let straightHand = hand.map(card => Pakka.getNumero(card));
        straightHand.sort((a, b) => a - b); // ascending
        for (let i = 1; i < straightHand.length; i++) {
            if (straightHand[i] != straightHand[i - 1] + 1) {
                return false
            }
        }
        return true
    },

    countGroups: function(hand) {
        let groups = Array(13).fill(0);
        hand.forEach(card => {
            groups[Pakka.getNumero(card) - 1]++;
        });
        return groups.filter(count => count > 0).sort((a, b) => b - a); // Descending
    },

    checkResults: function(hand, bet) {
        app.writeLog(`Tarkastetaan tulokset panoksella: ${bet}`);

        if (this.isColor(hand)) {
            app.writeLog("SINULLA ON VÄRI");
            return bet * 6;
        }

        // Tarkastetaan onko kädessä suora
        if (this.isStraight(hand)) {
            app.writeLog("SINULLA ON SUORA");
            return bet * 4;
        }

        // Tarkastetaan täyskäsi, parit, kaksi paria, kolmoset ja neloset
        groupsCount = this.countGroups(hand);
        switch (groupsCount[0]) {
            case 4: //Neloset
                app.writeLog("SINULLA ON Neljä samaa");
                return bet * 20;
                break;
            case 3:
                if (groupsCount[1] == 2) {
                    // Täyskäsi
                    app.writeLog("SINULLA ON Täyskäsi");
                    return bet * 9;
                } else {
                    // Kolmoset
                    app.writeLog("SINULLA ON Kolme samaa");
                    return bet * 4;
                }
                break;
            case 2:
                if (groupsCount[1] == 2) {
                    // Kaksi paria
                    app.writeLog("SINULLA ON Kaksi paria");
                    return bet * 3;
                } else {
                    // Pari
                    app.writeLog("SINULLA ON Pari");
                    return bet * 1;
                }
                break;
            default: // Ei mitään
                app.writeLog("SINULLA EI OLE mitään! :(");
                return 0;
        }
    }
}