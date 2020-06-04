# stream-parse-zip

STREAMS, PARSE, ZIP Assignment:
//csv-parser:  https://www.npmjs.com/package/csv-parser
// streams: https://areknawo.com/node-js-file-streams-explained/
//zlib: http://codewinds.com/blog/2013-08-20-nodejs-transform-streams.html
//Create a data.csv file
Input for file:
Name,Surname,Age,Gender
John,Snow,26,M
Clair,White,33,F
Fancy,Brown,78,F
Bill,Fleyer,46,M
Jan,Peters,21,F
Larry,Conner,36,M
Patty,Lyers,86,F
Cal,Bannerman,66,M
// A CSV file is a file with Comma Separated Values
// The first row specifies the data types, the rows following are the data
// create a server
// read the data from the csv file
// create a json file for the males, males.json
// create a json file for the females, females.json
// on '/' route put out simple html page saying Welcome to Male & Female Parser'
// on '/males' route should show all the males but in json
// on '/females' route should show all females but in json
// use streams and piping to output /males and /females routes
// using docs above you may have to adjust option flags for your streaming depending on how you code your app
// parse the data to write to the males.json if it is male or females.json if it is femaile
// the json file is not required to persist, but should be able to be output into the browser
// make zip file of the males.json: malezipfile.json.gz
// make a zip file of the females.json: femalezipfile.json.gz
// use the zlib doc to figure out how
// if the route does not exist create a 404.html page for it to default to
// if you can't use streams find any way to parse and place the data without hard coding the data from the file
// HINT: possible to solve just using the .on('data') and .on('end') events from streams
// This is a brute force exercise, i.e. just get it to work