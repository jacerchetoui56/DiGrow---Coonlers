const notFound = (req, res) =>
  res.status(404).json({ success: false, message: "not found" });

module.exports = notFound;
