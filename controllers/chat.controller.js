 const Product = require('../models/chat.model');

//Simple version, without validation or sanitation
//Get Test Controller tested on postman
exports.test = function (req, res) {
    res.send('Greetings from the Test Chat-App controller!');
};

/*
if (req.body.email &&
    req.body.password &&
    req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }
    //use schema.create to insert data into the db
    exports.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/chatapp');
      }
    });
  }

  */






//Post or Create Controller
  exports.create = function (req, res) {
    let product = new Product(
        {
            password: req.body.password,
            email: req.body.email
            //_id: req.body._id
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created successfully')
    });
};

//Read or Get Controller
exports.details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};



exports.update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Data udpated.');
    });
};

exports.delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};