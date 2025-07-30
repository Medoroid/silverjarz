const menu = document.querySelector("#menu");
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    menu.classList.add("show");
  } else {
    menu.classList.add("hide");
    menu.classList.remove("show");
  }
});
// landing Swiper
var swiper = new Swiper(".landingSwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  //    autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// offer slider
var swiper = new Swiper(".offerSlider", {
  slidesPerView: 2.2, // الوضع الافتراضي
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
  },
});

// testemonails slider
var swiper = new Swiper(".testemonailsSlider", {
  slidesPerView: 1.2, // شريحتين كاملتين + جزء من الثالثة
  spaceBetween: 20,

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
});
// category
let Tickets = document.querySelector("#Tickets");
let countreytitle = document.querySelector(".countrey");
let UAEBtn = document.querySelector("#United");
let Oman = document.querySelector("#Oman");
let Saudi = document.querySelector("#Saudi");
let Qatar = document.querySelector("#Qatar");
let Bahrain = document.querySelector("#Bahrain");
let Kuwait = document.querySelector("#Kuwait");
let cardInfo = [
  {
    heading: "UAE 5 Years Multi Entry ",
    countrey: "United Arab Emirates",
    price: "30",
  },
  {
    heading: "UAE 5 Years Multi Entry ",
    countrey: "United Arab Emirates",
    price: "30",
  },
  {
    heading: "UAE 5 Years Multi Entry ",
    countrey: "United Arab Emirates",
    price: "30",
  },
  {
    heading: "UAE 5 Years Multi Entry ",
    countrey: "United Arab Emirates",
    price: "30",
  },
  {
    heading: "GCC Resident 30 Days",
    countrey: "Oman ",
    price: "40",
  },
  {
    heading: "GCC Resident 30 Days",
    countrey: "Oman ",
    price: "360",
  },
  {
    heading: "GCC Resident 30 Days",
    countrey: "Oman ",
    price: "303",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Oman ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Saudi Arabia ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Saudi Arabia ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Qatar ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Qatar ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Bahrain ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Bahrain ",
    price: "340",
  },
  {
    heading: "365 Days Multi Entry",
    countrey: "Kuwait ",
    price: "340",
  },
];
// Tickets.innerHTML = `<div class="row gx-3 gy-4">
//   ${
//     cardInfo.map((date) => {
//       return `
//         <div class="col-md-4 col-12">
//           <div class="card d-flex justify-content-between flex-column" style="background-color: #EEEEEE; border-radius: 20px; padding: 30px;border:none">
//             <div style="padding-bottom: 20px; border-bottom: 3px solid var(--main-color);">
//               <h4 class="fw-bold text-black1 m-0" style="font-size: 28px;">${date.heading}</h4>
//               <p class="text-main fw-medium m-0" style="font-size: 22px;">${date.countrey} Visa</p>
//               <h3 class="fw-bold text-main m-0 countrey" style="font-size: 40px;">OMR <span class="text-black1">${date.price}</span></h3>
//               <div class="d-flex align-items-center gap-2">
//                 <span class="fs-main">Regular</span>
//                 <label class="switch">
//                   <input type="checkbox">
//                   <span class="slider"></span>
//                 </label>
//                 <span class="fs-main">Express</span>
//               </div>
//             </div>
//             <ul class="px-0" style="padding-top: 20px;">
//               <li class="fw-bold text-main m-0" style="font-size: 14px;">Service Type
//                 <p class="fw-medium text-black1 fs-main m-0">Regular Visa-Single Entry</p>
//               </li>
//               <li class="fw-bold text-main m-0" style="font-size: 14px;">Processing Time
//                 <p class="fw-medium text-black1 fs-main m-0">1-3 working days</p>
//               </li>
//               <li class="fw-bold text-main m-0" style="font-size: 14px;">Validity
//                 <p class="fw-medium text-black1 fs-main m-0">60 days from the date of issue</p>
//               </li>
//               <li class="fw-bold text-main m-0" style="font-size: 14px;">Stay Period
//                 <p class="fw-medium text-black1 fs-main m-0">${date.heading} from the date of entry</p>
//               </li>
//             </ul>
//             <a href="#" style="width: fit-content;" class="text-decoration-none text-black1 mx-auto position-relative fw-bold">Apply now</a>
//           </div>
//         </div>`;
//     }).join("")
//   }
// </div>`;

const filterBtns = document.querySelectorAll(".filter-btn");

function renderCards(country) {
  let filtered = cardInfo;

  if (country !== "all") {
    filtered = cardInfo.filter((c) => c.countrey.trim() === country.trim());
  }

  const cardsHtml = filtered
    .map(
      (date) => `
 <div class="col-md-4 col-sm-6 mb-4">
  <div class="card d-flex justify-content-between flex-column" style="background-color: #EEEEEE; border-radius: 20px; padding: 30px; border: none">
    <div style="padding-bottom: 20px; border-bottom: 3px solid var(--main-color);">
      <h4 class="fw-bold text-black1 m-0" style="font-size: 22px;">${date.heading}</h4>
      <p class="text-main fw-medium m-0" style="font-size: 18px;">${date.countrey} Visa</p>
      <h3 class="fw-bold text-main m-0 countrey" style="font-size: 26px;">OMR <span class="text-black1">${date.price}</span></h3>
      
      <div class="d-flex align-items-center gap-2 mt-2">
        <span class="fs-main">Regular</span>
        <label class="switch" onclick="VIPServies(this)">
  <input type="checkbox">
  <span class="slider"></span>
</label>
        <span class="fs-main">Express</span>
      </div>
    </div>

    <ul class="px-0 pt-3">
      <li class="fw-bold text-main m-0" style="font-size: 14px;">Service Type
        <p class="fw-medium text-black1 fs-main m-0 servies1">Regular Visa-Single Entry</p>
      </li>
      <li class="fw-bold text-main m-0" style="font-size: 14px;">Processing Time
        <p class="fw-medium text-black1 fs-main m-0 servies2">1-3 working days</p>
      </li>
      <li class="fw-bold text-main m-0" style="font-size: 14px;">Validity
        <p class="fw-medium text-black1 fs-main m-0">60 days from the date of issue</p>
      </li>
      <li class="fw-bold text-main m-0" style="font-size: 14px;">Stay Period
        <p class="fw-medium text-black1 fs-main m-0">${date.heading} from the date of entry</p>
      </li>
    </ul>
    <a href="#" class="text-decoration-none text-black1 mx-auto position-relative fw-bold mt-3">Apply now</a>
  </div>
</div>

    `
    )
    .join("");

  Tickets.innerHTML = cardsHtml;
}

// أول ما الصفحة تفتح
renderCards("all");

// عند الضغط على زر الفلترة
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const country = btn.getAttribute("data-country");
    renderCards(country);
  });
});
function VIPServies(labelElement) {
  const card = labelElement.closest(".card");
  const checkbox = labelElement.querySelector("input[type='checkbox']");
  const servies1 = card.querySelector(".servies1");
  const servies2 = card.querySelector(".servies2");

  if (checkbox.checked) {
    // Express Mode
    servies1.textContent = "Express Visa-Single Entry";
    servies2.textContent = "Within 24 Hours";
  } else {
    // Regular Mode
    servies1.textContent = "Regular Visa-Single Entry";
    servies2.textContent = "1-3 working days";
  }
}
