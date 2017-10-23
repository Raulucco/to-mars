import assert from 'assert';
import moment from 'moment';

export default class MembershipApplication {
    constructor(validators) {
        assert(validators.length > 0, "should be instantiate with a collection of validators");
        this.validators = validators;
    }

    setApplication(args) {
        const options = args || {};
        Object.assign(this, options);
        this.expires = options.expires ? moment(options.expires, 'YYYY-MM-DD') : moment().add(10, 'days');
    }

    validate() {
        return this.validators.reduce((acc, validator) => ({
            ...acc,
            error: validadator.isValid(this) ? acc.error : [...acc.error, validator.ERROR_MESSAGE]
        }), { error: [] });
    }

    isValid() {
        const { error } = this.validate();
        return error.length === 0;
    }

    get errorMessage(glue) {
        return this.validate().join(glue);
    }
}
