// middlewares/authMiddleware.js
module.exports = function (req, res, next) {
  const userId = req.headers.userid;
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized: No user ID" });
  }
  req.userId = userId;
  next();
};
