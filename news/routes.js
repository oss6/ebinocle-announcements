const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      title: 'Retiring biosamples-covid19',
      type: 'domain_retirement',
      summary: 'We will retire biosamples-covid19 by the end of June 2021. Please migrate to sra-sample-covid19.'
    },
    {
      title: 'Constrained cross reference searching',
      type: 'forthcoming_changes',
      summary: 'Constrained cross reference searching will let you limit the cross references returned.'
    }
  ]);
});

module.exports = router;
