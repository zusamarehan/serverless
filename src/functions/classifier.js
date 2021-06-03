'use strict';
const classify = require('../helpers/classifier');
module.exports.classifier = async (event) => {
    await classify.classifier(event);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Classified!',
                input: event,
            },
            null,
            2
        ),
    };
};
