import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
    // insert data into disclaimer section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
    document.querySelector("head > title").textContent = data.fullName;
    // set the banner image
    // document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".home").style.backgroundImage = `url(${data.images[0].url})`;
    // use the template function above to set the rest of the park specific info in the header
    document.querySelector(".hero-banner__content").innerHTML =
        parkInfoTemplate(data);
}

const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description:
            "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
];

function displayParkInfo(parkInfoLinks) {
    for (const value in parkInfoLinks) {
        document.getElementById("park-info").innerHTML += 
            `<section class="info-container">
            <img class="info-image" src="${parkInfoLinks[value].image}" alt="info-image">
            <a class="info-link" href="${parkInfoLinks[value].link}">${parkInfoLinks[value].name}</a>
            <p class="info-description">${parkInfoLinks[value].description}</p>    
            </section>`;
    }
} 

displayParkInfo(parkInfoLinks);

