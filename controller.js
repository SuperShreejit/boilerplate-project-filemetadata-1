const getHome = (req, res) => res.sendFile(process.cwd() + '/views/index.html');

const postFile = (req, res) => {
  const { originalname, mimetype, size } = req.file
  res.json({
    name: originalname,
    type: mimetype,
    size
  })
}

module.exports = {
  getHome,
  postFile
}