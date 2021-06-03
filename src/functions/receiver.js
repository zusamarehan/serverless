'use strict';
const store = require('../helpers/store');

module.exports.receiver = async (event) => {
    await store.store(event, 'success_logger');
    // TODO: SEND DATA TO SQS
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Logged!',
                input: event,
            },
            null,
            2
        ),
    };
};
