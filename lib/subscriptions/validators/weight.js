
export default class Weight {
    static get MAX_WEIGHT() {
        return 110;
    }

    static MIN_WEIGHT() {
        return 65;
    };

    static get NAME() {
        return 'WEIGHT';
    }

    static get ERROR_MESSAGE() {
        return 'Weight is not valid';
    }

    isValid({ weight }) {
        return weight &&
            weight >= Weight.MIN_HEIGHT &&
            weight <= Weight.MAX_WEIGHT;
    }
}
