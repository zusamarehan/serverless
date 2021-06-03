const knex = require('knex')({
    client: 'pg',
    connection: {
        host : process.env.POSTGRESQL_HOST,
        user : process.env.USERNAME,
        password : process.env.PASSWORD,
        database : process.env.DB_NAME
    },
    pool: { min: 0, max: 7 }
});
const { v4: uuidv4 } = require('uuid');

const store = async (data, table) => {
    knex(table).insert({
        "data" : data,
        "id" : uuidv4(),
    })
    .then(() => {
        console.log('Stored Successfully');
    }).catch((err) => {
        console.log('Not stored');
    })
}
exports.store = store;