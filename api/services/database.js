const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    client: client,
    getDb: async function () {
        return new Promise((resolve, reject) => {
            if(!dbConnection) {
                console.log('Opening connection');
                client.connect(function (err, db) {
                    if (err || !db) {
                        reject(err);
                    }

                    // db.auth("smajwloo", "password");
                    // db.adminCommand( { setParameter: 1, scramSHA256IterationCount: 20000 } )
                    dbConnection = db.db(process.env.DB_NAME);
                    console.log("Successfully connected to MongoDB.");

                    resolve(dbConnection);
                });
            } else{
                resolve(dbConnection);
            }
        });
    }
};