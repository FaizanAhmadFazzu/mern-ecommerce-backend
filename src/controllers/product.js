


exports.createProduct = (req, res) => {


    res.status(200).json({ file: req.file, body: req.body })
}