const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "mySecretKey");
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is invalid" });
  }
};
