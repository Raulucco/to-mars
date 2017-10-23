import moment from 'moment';

export default class ExpirationDate {
    static get NAME() {
        return 'EXPIRATION_DATE';
    }

    static get ERROR_MESSAGE() {
        return 'Menbership has expired';
    }

    isValid({ validUntil }) {
        return moment().isAfter(validUntil);
    }
}
