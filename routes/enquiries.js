const router = require('express').Router();
let Enquiries = require('../models/enquiries');

router.route('/').get((req, res) => {
  Enquiries.find()
    .then(enquiries => res.json(enquiries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const categories = req.body.categories;
  const subject = req.body.subject;
  const message = req.body.message;
  const date = Date.parse(req.body.date);

  const newEnquiries = new Enquiries({
    categories,
    subject,
    message,
    date,
  });

  newEnquiries.save()
  .then(() => res.json('Enquiries added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Enquiries.findById(req.params.id)
    .then(enquiries => res.json(enquiries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Enquiries.findByIdAndDelete(req.params.id)
    .then(() => res.json('Enquiries deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Enquiries.findById(req.params.id)
    .then(enquiries => {
      enquiries.categories = req.body.categories;
      enquiries.subject = req.body.subject;
      enquiries.message = req.body.message;
      enquiries.date = Date.parse(req.body.date);

      enquiries.save()
        .then(() => res.json('Enquiries updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;