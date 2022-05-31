//DIAGRAM START
console.log('first task');

const text = '{ "data": [ 2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2 ], "categories": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ] }';

const obj = JSON.parse(text);

const densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

const densityData = {
    label: 'Monthly Inflation in Argentina, 2002',
    data: obj.data
};

const barChart = new Chart(densityCanvas, {
    type: 'bar',
    data: {
        labels: obj['categories'],
        datasets: [densityData]
    }
});
//DIAGRAM END

//SLIDER START

//parse
const slider1 = '{ "slides": [ { "img": "https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2014/10/Top-10-Images-of-Angry-Wet-Cats-6.jpg?fit=586%2C404&ssl=1", "info": "Новость", "title": "Минобороны: ВКС России уничтожили крупный арсенал украинских войск в Кривом Роге" }, { "img": "https://www.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-1.jpg", "info": "Новость", "title": "Билл Гейтс спрогнозировал новую пандемию в следующие 20 лет с вероятностью 50%" }, { "img": "https://i.ytimg.com/vi/AsVQVKmI8pA/maxresdefault.jpg", "info": "Новость", "title": "Представитель МИД Захарова назвала заявления Шольца про многополярный мир плагиатом" }, { "img": "https://cdn.shopify.com/s/files/1/0344/6469/files/Screen_Shot_2019-01-04_at_5.07.33_PM.png?v=1546639679", "info": "Новость", "title": "19FortyFive: НАТО столкнулось с трудностями при организации военных учений в Швеции" }, { "img": "https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg", "info": "Новость", "title": "Экс-командующий ВДВ генерал-полковник Шпак: США запретили Польше вводить войска на Украину" }, { "img": "https://i.ytimg.com/vi/YSHDBB6id4A/maxresdefault.jpg", "info": "Новость", "title": "Bloomberg: Еврокомиссия предложила отложить запрет на поставки нефти по «Дружбе»" }, { "img": "https://preview.redd.it/7aydec8cp6m41.jpg?width=640&crop=smart&auto=webp&s=22d2b330801f064094184eda733e2e6880c58809", "info": "Новость", "title": "Росавиация продлила ограничение полетов в южные аэропорты до 6 июня" } ] }';
const obj_slide = JSON.parse(slider1);


//arrow click eventlistener
document.getElementById("previous").addEventListener("click", previousSlide);
document.getElementById("next").addEventListener("click", nextSlide);


//json to div

for (let i = 0; i < obj_slide.slides.length; i++) {
    var divS = document.createElement('div');
    divS.className = "item";
    divS.innerHTML = `
    <h3>${obj_slide.slides[i].info}</h3>
    <img src=${obj_slide.slides[i].img} 
    alt=${obj_slide.slides[i].info}>
    <p>${obj_slide.slides[i].title}</p>`;
    var ar = document.getElementById("my");
    ar.appendChild(divS);


}

// current index of slide
let slideIndex = 1;
showSlides(slideIndex);

// index of next slide
function nextSlide() {
    showSlides(slideIndex += 1);
}

// index of previous slide
function previousSlide() {
    showSlides(slideIndex -= 1);
}

// current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}


//slider function

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


//SLIDER END