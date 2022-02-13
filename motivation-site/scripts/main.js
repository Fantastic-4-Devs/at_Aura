const head = document.querySelector('#heading');
const quoteTitle = document.querySelector('#quote-title');
const next = document.querySelector('#next-quote');

const quote = (data) => {
	quoteTitle.textContent=`${data[0].phrase}`
}

const fetchData = () => {
	//Fetches the data from the api
	fetch('https://dulce-affirmations-api.herokuapp.com/affirmation')
	//Converts that to JSON model
	.then(response => response.json())
	//Performs operation on that JSON model
	.then(data => {
	   quote(data);
	})
}

fetchData();

const nextQuote = () => {
	fetchData();
}

next.addEventListener('click', nextQuote);
