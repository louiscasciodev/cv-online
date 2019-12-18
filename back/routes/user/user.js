const express = require("express")
const connection = require('../../conf')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /user ").status(200)
})

router.route('/role/:role')
.get(function (req, res, next) {
  connection.query(`SELECT * FROM user WHERE user_role=${req.params.role} ORDER BY user_lastname, user_firstname ASC`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des utilisateurs');
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM orders WHERE order_user_id=${req.params.id} ORDER BY order_date DESC`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération de l'historique du client");
    } else {
      res.json(results);
    }
  });
});

module.exports = router