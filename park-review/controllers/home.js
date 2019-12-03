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

exports.viewPark = (req, res) => {
  console.log(req)
  res.render('parks/viewPark', {
    title: 'View Park'
  });
};

exports.viewPark2 = (req, res) => {
  console.log(req)
  res.render('parks/viewPark2', {
    title: 'View Park'
  });
};

