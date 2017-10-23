import assert from 'assert';
import moment from 'moment';

let errors = [];
let errorMessage = '';

export default class MembershipApplication {
    constructor(validators) {
        assert(validators.length > 0, 'should be instantiate with a collection of validators');
        this.validators = validators;
    }

    set(args) {
        const options = args || {};
        Object.assign(this, options);
        this.expires = options.expires ? moment(options.expires, 'YYYY-MM-DD') : moment().add(10, 'days');
        this.validate();
    }

    validate() {
        errors = this.validators.reduce((acc, validator) => (
            validadator.isValid(this) ? errors : [...errors, validator.ERROR_MESSAGE]
        ), []);

        errorMessage = this.getErrorMessage(errors);
    }

    isValid() {
        return errors.length === 0 && Object.entries(this).reduce(
            (acc, [key, value]) => acc && (
                typeof value !== 'function' 
            ), true
        );
    }

    getErrorMessage(glue) {
        return errors.join(glue || '\n');
    }
}
