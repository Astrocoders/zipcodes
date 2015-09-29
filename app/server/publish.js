Meteor.publish('zipcodes', function(query){
	console.log('Attempt to fetch data');

  return Zipcodes.find(query);
});