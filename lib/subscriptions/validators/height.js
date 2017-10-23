
export default class Height {
    static MAX_HEIGHT () {
        return 198;
    }

    static MIN_HEIGHT () {
        return 150;
    }

    static get NAME() {
        return 'HEIGHT';
    }

    static get ERROR_MESSAGE() {
        return 'Height is not valid';
    }

    isValid({ height }) {
        return height &&
            height >= Height.MIN_HEIGHT &&
            height <= Height.MAX_HEIGHT;
    }
}
