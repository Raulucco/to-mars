
export default class Email {
    static get NAME() {
        return 'EMAIL';
    }

    static get ERROR_MESSAGE() {
        return 'Email is not valid';
    }

    isValid({ email }) {
        return email && /^(:?\w+[\.-_]*)@(:?\w+[\.-_]*)+\.\w{2,5}$/.test(this.email);
    }
}
