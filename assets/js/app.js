// alert(`hello`);

let cl = console.log;

let countryData = document.getElementById('countryContainer');

let result = "";

countries.forEach(function(country){
	result += `
			<div class="col-sm-3">
				<div class="card">
					<div class="card-body">
						<div class="flag-img mb-3">
							<img src="${country.flag}" alt="${country.name} flag" title="${country.name}">
						</div>
						<h3 class="cName">${country.name}</h3>
						<div class="details">
							<p>
								<strong>capital:</strong>
								${country.capital}
							</p>
							<p>
								<strong>languages: </strong>
								${country.languages}
							</p>
							<p>
								<strong>population: </strong>
								${country.population}
							</p>
						</div>
					</div>
				</div>
			</div>
	`;
});

countryData.innerHTML = result;

