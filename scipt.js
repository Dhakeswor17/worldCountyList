function newFunction() {
    const api = 'https://restcountries.com/v2/all';
    let countriesData = [];

    fetch(api)
        .then(res => res.json())
        .then(data => {
            countriesData = data;
            document.getElementById('span1').innerHTML = data.length;
            displayCountries(countriesData); // Display all countries initially
        });

    // Function to display countries
    const displayCountries = (data) => {
        const container = document.getElementById('container');
        container.innerHTML = ''; // Clear container before displaying new data

        data.forEach(item => {
            let name = item.name;
            let flag = item.flag;

            // Create elements for name and flag
            let nameCountry = document.createElement('span');
            let flagCountry = document.createElement('img');
            nameCountry.className = 'countriesName';
            flagCountry.className = 'countriesList';
            flagCountry.src = flag; // Set the image source
            nameCountry.innerText = name; // Set the country name

            // Append elements to the container
            container.appendChild(flagCountry);
            container.appendChild(nameCountry);
        });
    };

    // Button to filter by starting word
    let btn1 = document.getElementById('btn-1');
    btn1.addEventListener('click', () => {
        btn1.style.backgroundColor = 'rgb(127, 255, 212)';
        btn2.style.backgroundColor = ''; // Reset other button color

        let queries = document.getElementById('text').value.toLowerCase();
        let filterCountries;

        if (queries) {
            // Filter countries that start with the input
            filterCountries = countriesData.filter(item => item.name.toLowerCase().startsWith(queries));
            const count = filterCountries.length
            document.getElementById('firstLatterNo').innerHTML = count
            document.getElementById('firstLatter').innerHTML = queries
        } else {
            // Show all countries if no input
            filterCountries = countriesData;
        }
        

        displayCountries(filterCountries);
    });

    // Button to filter by any word
    let btn2 = document.getElementById('btn-2');
    btn2.addEventListener('click', () => {
        btn2.style.backgroundColor = 'rgb(127, 255, 212)';
        btn1.style.backgroundColor = ''; // Reset other button color

        let queries = document.getElementById('text').value.toLowerCase();
        let filterCountries1 = countriesData.filter(item => item.name.toLowerCase().includes(queries));
        document.getElementById('firstLatterNo').innerHTML = filterCountries1.length
            document.getElementById('firstLatter').innerHTML = queries
        displayCountries(filterCountries1);
    });
}

// Call the function to initialize
newFunction();
