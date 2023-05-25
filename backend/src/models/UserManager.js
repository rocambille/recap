const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, password) values (?, ?)`,
      [user.username, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, password = ? where id = ?`,
      [user.username, user.password, user.id]
    );
  }
}

module.exports = UserManager;
