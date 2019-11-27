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