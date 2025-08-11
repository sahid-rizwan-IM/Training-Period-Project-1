

// For APIs expecting user ID from headers
exports.apiAuth = function (req, res, next) {
  const userId = req.headers.userid;
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized: No user ID" });
  }
  req.userId = userId;
  next();
};

// For protected pages using session
exports.pageAuth = function (req, res, next) {
  if (!req.session?.userId || !req.session?.user) {
    return res.redirect('/login');
  }
  next();
};

// For APIs using session validation
exports.apiSessionAuth = function (req, res, next) {
  if (!req.session?.userId || !req.session?.user) {
    return res.status(401).json({ success: false, message: "Unauthorized access. Please log in." });
  }
  next();
};
