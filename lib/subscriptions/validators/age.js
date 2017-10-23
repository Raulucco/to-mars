
export default class Age {
    static MAX_AGE () {
        return 55;
    }

    static MIN_AGE () {
        return 18;
    }

    static get NAME() {
        return 'AGE';
    }

    static get ERROR_MESSAGE() {
        return 'Age is not in range';
    }

    isValid({ age }) {
        return age &&
            age >= Age.MIN_AGE &&
            age <= Age.MAX_AGE;
    }
}
