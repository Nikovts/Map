const https = require('https');


export default async function getCoordinates(query) {

  const url = `https://nominatim.openstreetmap.org/search?q=${query}&limit=1&format=json`;  
  let body = '';

  return await new Promise((resolve, reject) => {
    const req = https.get(url, res => {

      res.setEncoding("utf8");

      res.on("data", data => {
        body += data;
      });

      res.on("end", () => {      
        resolve(JSON.parse(body));
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    
    req.end();
  
  });  
  
}

