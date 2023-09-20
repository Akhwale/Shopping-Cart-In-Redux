const router = require("express").Router();

let Product = require("../models/product.model");

router.route('/products').get(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.route('/products/:id').get(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product details' });
  }
});

module.exports = router;