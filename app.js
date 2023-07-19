// Person Api

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
  
  
// api working
  const leftsecContainer = document.getElementById('dataelement')

const newDiv = document.createElement('div')

newDiv.innerHTML =`

            <h2 class="border py-2	px-2">Person Name: ${person.result[0].name.common}</h2>
            <h6 class="ml-2">age: ${person.result[0].age}</h6>
            <h6 class="ml-2">street: ${person.result[0].address.street}, House${person.result[0].address.house}</h6>
            
`

leftsecContainer.appendChild(newDiv)
  const leftsecContainer2 = document.getElementById('dataelement2')

const newDiv2 = document.createElement('div')

newDiv2.innerHTML =`

            <h2 class="border py-2	px-2">Person Name: ${person.result[1].name.common}</h2>
            <h6 class="ml-2">age: ${person.result[1].age}</h6>
            <h6 class="ml-2">street: ${person.result[1].address.street}, House${person.result[1].address.house}</h6>
            
`

leftsecContainer2.appendChild(newDiv2)

// car api create start

const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];



//   car api work

const carcontainer = document.getElementById('cardiv')

const carNewDiv = document.createElement('div')
carNewDiv.classList.add('border', 'p-4')

carNewDiv.innerHTML =`      <img src="${data[0].imageURL}" alt="">
<h2 class="text-xl	font-semibold">Car Details:${data[0].name} </h2>
<p class="text-base	font-normal	mt-2">${data[0].description} </p>
<button class="bg-emerald-600 py-2 px-4 text-white rounded mt-2">Car Price: </button>       
`

carcontainer.appendChild(carNewDiv)

const carcontainer2 = document.getElementById('cardiv')

const carNewDiv2 = document.createElement('div')
carNewDiv2.classList.add('border', 'p-4')

carNewDiv2.innerHTML =`      <img src="${data[1].imageURL}" alt="">
<h2 class="text-xl	font-semibold">Car Details:${data[1].name} </h2>
<p class="text-base	font-normal	mt-2">${data[1].description} </p>
<button class="bg-emerald-600 py-2 px-4 text-white rounded mt-2">Car Price: </button>       
`

carcontainer2.appendChild(carNewDiv2)











const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector}`);
  };
  
  const form = selectElement("form");
  const input = selectElement("input");
  const result = selectElement(".result");
  const hamburger = selectElement(".hamburger");
  const navMenu = selectElement(".nav-menu");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = input.value;
  
    shortenUrl(url);
  });
  
  async function shortenUrl(url) {
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      const newUrl = document.createElement("div");
      newUrl.classList.add("item");
      newUrl.innerHTML = `
     <p> ${data.result.short_link}</p>
     <button class="newUrl-btn" >Copy</button>
     `;
      result.prepend(newUrl);
      const copyBtn = result.querySelector(".newUrl-btn");
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
      });
      input.value = "";
    } catch (err) {
      console.log(err);
    }
  }