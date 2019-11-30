/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.park = (req, res) => {
  res.render('park', {
    title: 'Park Review'
  });
};

exports.addPark = (req, res) => {
  res.render('addPark', {
    title: 'Add Park'
  });
};

/*exports.viewPark = (req, res) => {
  console.log(req)
  res.render('viewPark', {
    title: req.body.name
  });
};*/

