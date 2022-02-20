


const menu = [
  {
    id: 1,
    title: "Zapata Burger",
    category: "Burgers",
    price: 24.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/9e/a5/ea/zapata-burger.jpg",
    desc: `Çift Cheddarlı Klasik Burger`,
  },
  {
    id: 2,
    title: "Smashed Burger",
    category: "Burgers",
    price: 32.99,
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/06/bby-smashed-burger-yemekcom.jpg",
    desc: `Smashed (Ezilmiş) Burger`,
  },
  {
    id: 3,
    title: "Triplex Burger",
    category: "Burgers",
    price: 39.99,
    img:
      "https://kebanet.restapp.com/uploads/36384/09e48d32770f19ee6b7731828cde1958-thumbnail.jpg",
    desc: `Tek Köfte Yetmez diyenlere 3 köfteli Triplex Burger !`,
  },
  {
    id: 4,
    title: "Salad with Chicken",
    category: "Healty Foods",
    price: 27.99,
    img:
      "https://i2.wp.com/nefispratikyemektarifleri.com/wp-content/uploads/2016/08/tavuklu-salata-tarifi.jpg?fit=640%2C426&ssl=1",
    desc: `Izgarada pişirilmiş Bonfile Tavuklu Salata `,
  },
  {
    id: 5,
    title: "Salad with Fish",
    category: "Healty Foods",
    price: 27.99,
    img:
      "https://isbh.tmgrup.com.tr/sbh/2016/03/30/650x344/1459325517043.jpg",
    desc: `Ton Balıklı Salata`,
  },
  {
    id: 6,
    title: "Çoban Salad",
    category: "Healty Foods",
    price: 19.99,
    img:
      "https://www.sofrakesesi.com/cdn/coban-salata-1.jpg",
    desc: `Best Healty Salad `,
  },
  {
    id: 7,
    title: "Sütlaç",
    category: "Desserts",
    price: 22.99,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2019/04/lokanta-usulu-sutlac-tarifi.jpg",
    desc: `Rice Pudding`,
  },
  {
    id: 8,
    title: "Künefe",
    category: "Desserts",
    price: 34.99,
    img:
      "https://cdn.yemek.com/uploads/2018/12/ozikizler-kunefe-katmer-uskudar-2022.jpg",
    desc: `Turkish Cheese Dessert`,
  },
  {
    id: 9,
    title: "Magnolya",
    category: "Desserts",
    price: 14.99,
    img:
      "https://cdn.oskarpastaneleri.com/images/original/products/magnolya-cilekli-1625032337.jpg",
    desc: `Creamy Strawberry Custard`,
  },
];
let section = document.querySelector(".section-center")
let container = document.querySelector(".btn-container")

/* Butonları Tanımlama */

function createButton(buttonName) {
  let btn =`<button class ="btn btn-outline-dark btn-item" id="${buttonName}">${buttonName}</button>`
return btn
}
function addButton (){
  container.innerHTML=createButton("All")+ " "+ createButton("Burgers")+" "+createButton("Healty Foods")+" " +createButton("Desserts")
  document.getElementById('All').addEventListener('click',addFoodsAll)
  document.getElementById('Burgers').addEventListener('click',addBurgers)
  document.getElementById('Healty Foods').addEventListener('click',addHealtyFoods)
  document.getElementById('Desserts').addEventListener('click',addDesserts)

}
/* Yemek Tanımlama */
function foodCreator(name) {
  let item = `<div class="menu-items col-lg-6 col-sm-12">
  <img src="${name.img}" alt="${name.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${name.title}</h4>
      <h4 class="price">${name.price}</h4>
    </div>
    <div class="menu-text">
      ${name.desc}
    </div>
  </div>
</div>`
  return item
}

/* Tüm Menü Ekleme */
function addFoodsAll() {
  section.innerHTML = ""
  menu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}
/* Burger Menüsü Ekleme */
function addBurgers() {
  section.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category == "Burgers")
  koreanMenu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}

/* Healty Food Menüsü Ekleme */
function addHealtyFoods() {
  section.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category == "Healty Foods")
  koreanMenu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}

/* Dessert Menüsü Ekleme */
function addDesserts() {
  section.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category == "Desserts")
  koreanMenu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}


window.addEventListener('load',addButton)
window.addEventListener('load',addFoodsAll)

