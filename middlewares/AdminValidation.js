function isAdmin(req, res, next) {
  if (req?.role === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ error: "Unauthorized - admin role required" });
  }
}
export default isAdmin