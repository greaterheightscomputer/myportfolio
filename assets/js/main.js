// Skill tabs
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  //   console.log(tab);
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    // console.log(target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove('skills__active');
    });

    target.classList.add('skills__active');

    //its add and remove skills__active class selector onto DOM which makes the arrow to rotate -90%
    tabs.forEach((tab) => {
      tab.classList.remove('skills__active');
    });

    tab.classList.add('skills__active');
  });
});

// Mixitup filter portfolio
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

//link active-work
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach((l) => l.classList.remove('active-work'));
  this.classList.add('active-work');
}
linkWork.forEach((l) => l.addEventListener('click', activeWork));

// Work Popup
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}
document
  .querySelector('.portfolio__popup-close')
  .addEventListener('click', togglePortfolioPopup);

//dynamically render the content of popup dialogue box
function portfolioItemDetails(portfolioItem) {
  // console.log(portfolioItem);
  document.querySelector('.pp__thumbnail img').src =
    portfolioItem.querySelector('.work__img').src;
  document.querySelector('.portfolio__popup-subtitle span').innerHTML =
    portfolioItem.querySelector('.work__title').innerHTML;
  document.querySelector('.portfolio__popup-body').innerHTML =
    portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

/* Services Model */
const modalViews = document.querySelectorAll('.services__modal'),
  modelBtns = document.querySelectorAll('.services__button'),
  modelCloses = document.querySelectorAll('.services__modal-close');

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', () => {
    modalViews[i].classList.add('active-modal');
  });
});

//close modal
modelCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

//Swiper Testimonial
const swiper = new Swiper('.testimonials__container', {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    660: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

// Input Animation
const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

// Scroll Sections Active Link
//get all sections that have an id defined
const sections = document.querySelectorAll('section[id]');
// console.log({ sections });

//add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  //get current scroll position
  let scrollY = window.pageYOffset;
  // console.log(scrollY);
  //Now we loop through sections to get height, top and ID values for each

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');
    // console.log({ sectionHeight });
    // console.log({ sectionTop });
    // console.log({ sectionId });

    //- If our current scroll position enters the space where current section on screen is, add
    //.active class to corresponding navigation link, else remove it.
    //- To know which link needs an active class, we use sectionId variable we are getting
    //while looping through sections as a selector
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

// Show Siderbar, when click on the handbuger add show-sidebar onto aside tags on the DOM
const navMenu = document.getElementById('sidebar'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-sidebar');
  });
}
//Sidebar Hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-sidebar');
  });
}
