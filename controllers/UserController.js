const { tokenGenerator } = require("../helpers/jwt");

class UserController {
  static login(req, res) {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {
      const result = req.body;
      let token = tokenGenerator(result);
      res.status(200).json({
        access_token: token,
      });
    } else {
      if (username === "admin") res.json({ message: "Password incorrect" });
      else if (password === "admin")
        res.json({ message: "username not found" });
      else res.json({ message: "Username or Password incorrect" });
    }
  }
}

module.exports = UserController;
