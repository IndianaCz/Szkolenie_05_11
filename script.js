const title = document.getElementById("ban_title");
console.log(title);
title.textContent = "Good Afternoon";
const subtitle = document.getElementById("ban_sub");
console.log(subtitle);
subtitle.textContent = "Hello Patrycja";

const workersWrapper = document.getElementById("Workers");

function createWorkerCard (worker_image, worker_name, worker_description){
    const card = document.createElement("article");
    card.setAttribute("class", "best-card");

    const image = document.createElement("img");
    image.src = worker_image;
    image.alt = "Zdjęcie pracownika "+ worker_name;

    card.appendChild(image);

    const workerName = document.createElement("h3");
    workerName.classList.add("card-name");
    workerName.textContent = worker_name;
    card.appendChild(workerName);

    const btn = document.createElement("button");
    btn.classList.add("card-btn");
    btn.innerHTML = `<i class="bi bi-person-plus-fill"></i>
    Follow`;
    card.appendChild(btn);

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("card-desc");
    cardDesc.textContent = worker_description;
    card.appendChild(cardDesc);



    workersWrapper.appendChild(card);
    
}
createWorkerCard("https://i.pravatar.cc/150?img=3", "John Smith", "This is an example of a worker's description and their achievements."  );
createWorkerCard("https://i.pravatar.cc/150?img=20","Anne Nowak","This is an example of a worker's description and their achievements." );
createWorkerCard("https://i.pravatar.cc/150?img=1","Mia Green","This is an example of a worker's description and their achievements."  );
createWorkerCard("https://i.pravatar.cc/150?img=30","Marigold Hathaway", "This is an example of a worker's description and their achievements."  );

const price_wrapper = document.getElementById("Prices");

function createPriceCard (price, period, description, support, storage, visitors){
const price_card = document.createElement("article");
price_card.classList.add("pricing-card");

const icon = document.createElement("i");
icon.setAttribute("class", "bi bi-currency-dollar");
price_card.appendChild(icon);

const price_period = document.createElement("span");
price_period.classList.add("price-period");
price_period.textContent = price;
price_card.appendChild(price_period)

const price_secondary = document.createElement("span");
price_secondary.classList.add("price_period_secondary")
price_secondary.textContent = " / " + period;
price_period.appendChild(price_secondary);

const pricingDesc = document.createElement("p");
pricingDesc.classList.add("pricing_desc");
pricingDesc.textContent = description;
price_card.appendChild(pricingDesc)

const pricing_details_supp = document.createElement("p");
pricing_details_supp.classList.add("pricing-details-support");
pricing_details_supp.innerHTML = `<strong>Support</strong> ${support}`;
price_card.appendChild(pricing_details_supp);

const pricing_details_stor = document.createElement("p");
pricing_details_stor.classList.add("pricing-details-storage");
pricing_details_stor.innerHTML = `<strong>Storage</strong> ${storage}`;
price_card.appendChild(pricing_details_stor);

const pricing_details_vis = document.createElement("p");
pricing_details_vis.classList.add("pricing-details-visitors");
pricing_details_vis.innerHTML = `<strong>Visitors</strong> ${visitors}`;
price_card.appendChild(pricing_details_vis);

const price_btn = document.createElement("button");
price_btn.classList.add("price_btn");
price_btn.textContent = "Buy now";
price_card.appendChild(price_btn);


price_wrapper.appendChild(price_card);
};

createPriceCard("12", "week", "Description of pricing lorem ipsum Description of pricing lorem ipsum Description of pricing lorem ipsum", "No", "10 GB", "50k" );
createPriceCard("20", "month","Description of pricing lorem ipsum Description of pricing lorem ipsum Description of pricing lorem ipsum", "No", "50 GB", "250k");
createPriceCard("200", "year", "Description of pricing lorem ipsum Description of pricing lorem ipsum Description of pricing lorem ipsum", "Yes", "1 TB", "No limit" );
createPriceCard("250", "year", "Description of pricing lorem ipsum Description of pricing lorem ipsum Description of pricing lorem ipsum", "Yes", "2 TB", "No limit");





// </article>
// <article class="pricing-card">
// <i class="bi bi-currency-dollar"></i>
// <span class="price_week">200<span class="price_week_secondary">/year</span></span>
// <p class="pricing_desc">Description of pricing lorem ipsum Description of pricing lorem ipsum Description of pricing lorem ipsum</p>
// <p class="pricing_details"><strong>Support</strong> Yes</p>
// <p class="pricing_details"><strong>Storage</strong> 1 TB</p>
// <p class="pricing_details" ><strong>Yearly Visitors</strong> No limit</p>
// <button class="price_btn">Buy now</button>
















