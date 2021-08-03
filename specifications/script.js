fs = require('fs');
let topic = 1;
let contentID = 3000;
fs.readFile('gcsephysics.txt', 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	let lines = data.split('\n');
	let currentTopic = [];
	let counter = 1;
	for (let line of lines) {
		if (line.length != 0) {
			if (line.substring(0, 1) == '-') {
				currentTopic.push({
					section: String(topic) + '.' + String(counter),
					specificationName: 'GCSE Physics (AQA)',
					contentID: contentID,
					content: line.substring(1),
				});
				contentID++;
				counter++;
			}
		} else {
			counter = 1;
			topic++;
		}
	}
	let jsondata = JSON.stringify(currentTopic);
	fs.writeFileSync('gcsephysics.json', jsondata);
});
