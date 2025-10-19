document.getElementById('dogs-form').addEventListener('submit', handleClick);

// This function is called when the form is submitted
function handleClick(event) {
    event.preventDefault();
    getDog();
}

// Fetches a random dog image from the Dog CEO API
function getDog() {
    var url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayDog(data.message);
        })
        .catch(function(error) {
            console.log(error);
        });
}

// Displays the dog image in the HTML and on the webpage
function displayDog(image_url) {
    const dogInfo = document.getElementById('dog-info');
    dogInfo.innerHTML = ''; // clear old image
    const img = document.createElement('img');
    img.src = image_url;
    img.alt = 'A Random Dog';
    dogInfo.appendChild(img);
}