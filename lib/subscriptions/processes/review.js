import async from 'async';

export default class Review {

    process(next) {
        async.series([
            this.isAppValid,
            this.getNextMission,
            this.roleIsAvailable,
            this.roleIsCompatible
        ], (error, success) => {
            if (error) {
                next({ error });
            } else {
                next(null, { });
            }
        });
    }
}
