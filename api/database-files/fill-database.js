const dbo = require('../services/database');

dbo.getDb().then(db => {
  db.addUser("smajwloo", "password", { roles: "userAdminAnyDatabase" });
  // db.auth("smajwloo", "password");
});


