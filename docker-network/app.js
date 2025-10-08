const express = require('express');
const redis = require('redis');
const app = express();
const port = 3000;

const client = redis.createClient({ 
url:'redis://redis-db:6379'
});


client.connect().then( () => console.log('Connected to Redis'))
		.catch( err => console.error("Redis connection error", err));

app.get("/", async(req,res) => {
	let count = await client.incr("visits");
	res.send(`<h2> Docker Networking Example </h2> <p> Page Visits: ${count} </p> `);
});


app.listen(port, () => {
	console.log(`App runing on port: ${port}`);
});



