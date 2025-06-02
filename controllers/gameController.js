function gameController(req, res) {
  const { developer, game } = req.params;
  res.send(developer);
}

export default gameController;
