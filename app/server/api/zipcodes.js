GetRoutes = Picker.filter(function(req){
  return req.method === 'GET';
});

GetRoutes.route('/api/1/zipcodes/:code', function(params, req, res, next){
  let zipcode = Zipcodes.findOne({
    code: params.code
  });

  let response = zipcode ? zipcode : {
    error: 'Not found'
  };

  res.setHeader('Content-type', 'application/json');
  res.end(EJSON.stringify(response));
});