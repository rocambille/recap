const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.database.query(
      `select username from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByUsernameWithHashedPassword(username) {
    return this.database.query(
      `select id, username, hashedPassword from  ${this.table} where username = ?`,
      [username]
    );
  }

  findAll() {
    return this.database.query(`select username from  ${this.table}`);
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, hashedPassword) values (?, ?)`,
      [user.username, user.hashedPassword]
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
