// Modules
const fs = require('fs');
const request = require('request');;

// Retrieving data from command line and assigning them to variables
const args = process.argv.slice(2);
const url = args[0];
const location = args[1];

// Fetcher function takes in url and location to create content file
const fetcher = (site, path) => {
  request(site, (error, response, body) => { // request function takes in URL and its contents
    fs.writeFile(path, body, err => { // writeFile function creates the file
      if (err) {
        console.error(err) // if an error occurs
        return
      } else {
        console.error(`Downloaded and saved ${body.length} bytes to ${path}`); // output message
      }
   });
  });
}

// Calls fetcher function
fetcher(url, location);