const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto("pick_me_up", "admin", "root1234", {
    host: "my-database-practice.ctobugrb9z8w.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    directory: "Model",
    port: "13306"
    }
);

auto.run(function(err) {
    if (err) throw err;

    console.log(auto.tables);
    console.log(auto.foreignKeys);
});