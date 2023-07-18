const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');
const menuX = document.querySelector('.x-icon');
const backgroundEffect = document.querySelector('.background-menu');

menuIcon.onclick=()=>{
    menu.style.display = 'block';
    menuIcon.style.display = 'none';
    backgroundEffect.style.display = 'block';
}
menuX.onclick=()=>{
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
}
window.onresize=()=>{ 
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
    if(window.innerWidth>=900){
        menuIcon.style.display = 'none';
        backgroundEffect.style.display = 'none';
    }
}
backgroundEffect.onclick=()=>{
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
}
/*carroussel here */
const clickSlide = document.querySelectorAll('.caroussel-container');
clickSlide.forEach((slide) => {
  slide.onclick = () => {
    slideSwapp();
}});
function slideSwapp(){
    let activeDiv = document.querySelector('.actif');
    const slideBtn1 = activeDiv.querySelector('.circle-1');
    const slideBtn2 = activeDiv.querySelector('.circle-2');
    const slideBtn3 = activeDiv.querySelector('.circle-3');
    const slider1 = document.querySelector('.slide-1');
    const slider2 = document.querySelector('.slide-2');
    const slider3 = document.querySelector('.slide-3');
    slideBtn1.onclick=()=>{
        slider1.style.display = 'block';
        slider2.style.display = 'none' ;
        slider3.style.display = 'none' ;
        slider2.classList.remove('actif');
        slider3.classList.remove('actif');
        slider1.classList.add('actif');
    }
    slideBtn2.onclick=()=>{
        slider1.style.display = 'none';
        slider2.style.display = 'block' ;
        slider3.style.display = 'none' ;
        slider1.classList.remove('actif');
        slider3.classList.remove('actif');
        slider2.classList.add('actif');
    }
    slideBtn3.onclick=()=>{
        slider1.style.display = 'none';
        slider2.style.display = 'none' ;
        slider3.style.display = 'block' ;
        slider2.classList.remove('actif');
        slider1.classList.remove('actif');
        slider3.classList.add('actif');
    }
}
 /*menu here */
const menu1 = document.querySelector('.menu-1');
const btn1 = document.querySelector('.beans');
const btn2 = document.querySelector('.drink');
const btn3 = document.querySelector('.breakfast');
 
btn3.onclick=()=>{
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.add('active');
  menu1.innerHTML = `
  <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>1/ Rise & Shine Sandwich</h4>
                    <p class="price">$35</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        9</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>2/ Morning Glory Bowl</h4>
                    <p class="price">$15.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        34</p>
                  </div>
                </div>
            </div>
            <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>3/ Fluffy Pancake Stack</h4>
                    <p class="price">$18.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        88</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>4/ Sunrise Omelette </h4>
                    <p class="price">$64.7</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        96</p>
                  </div>
                </div>
            </div>
            <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>5/ Toasted Granola Crunch</h4>
                    <p class="price">$35.67</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                      39</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>6/ Fresh Fruit Yogurt Parfait</h4>
                    <p class="price">$8.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        51</p>
                  </div>
                </div>
            </div>
            <a href="">view all</a>
            </div>    `;
}
btn2.onclick=()=>{
  btn1.classList.remove('active');
  btn3.classList.remove('active');
  btn2.classList.add('active');
  menu1.innerHTML = `
  <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>1/ Caffè Latte</h4>
                    <p class="price">$15</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        19</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>2/ Cappuccino</h4>
                    <p class="price">$25.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        28</p>
                  </div>
                </div>
            </div>
            <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>3/ Macchiato</h4>
                    <p class="price">$16.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        14</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>4/ Flat White</h4>
                    <p class="price">$26.7</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        86</p>
                  </div>
                </div>
            </div>
            <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>5/ Mocha </h4>
                    <p class="price">$3.67</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        24</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>6/ Affogato</h4>
                    <p class="price">$7.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        9</p>
                  </div>
                </div>
            </div>
            <a href="">view all</a>
            </div>     
  `;
}
btn1.onclick=()=>{
  btn3.classList.remove('active');
  btn2.classList.remove('active');
  btn1.classList.add('active');
  menu1.innerHTML = `
              <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>1/ Arabica Coffee Beans</h4>
                    <p class="price">$5.5</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        75</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>2/ Colombian Coffee Beans</h4>
                    <p class="price">$6.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        34</p>
                  </div>
                </div>
            </div>
            <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>3/ Robusta Coffee Beans</h4>
                    <p class="price">$3.88</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        33</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>4/ Ethiopian Coffee Beans</h4>
                    <p class="price">$6.7</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        96</p>
                  </div>
                </div>
            </div>
            <div class="row  row-cols-1 row-cols-md-2 choix-col ">
                <div class="col    box-choix">  
                  <div class="box-title">
                    <h4>5/ Mocha Java Coffee Beans</h4>
                    <p class="price">$3.67</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        69</p>
                  </div>
                </div>
                <div class="col  box-choix">  
                  <div class="box-title">
                    <h4>6/ Guatemalan Coffee Beans</h4>
                    <p class="price">$5.99</p>
                  </div>
                  <div class="box-title">
                    <p class="description">
                        Lorem ipsum Culpa in autea dolor minim irure pariaturaa
                    </p>
                    <p class="likes">
                        <i class="fa-solid fa-heart"></i>
                        9</p>
                  </div>
                </div>
            </div>
            <a href="">view all</a>
            </div>     `;
}
const mbtn = document.querySelector('.menu-btn');
mbtn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
    window.location.href = 'index.html#menu';
});
const hbtn = document.querySelector('.home-btn');
hbtn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
    window.location.href = 'index.html#home';
});
const abtn = document.querySelector('.about-btn');
abtn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
    window.location.href = 'index.html#more-section';
});
const sbtn = document.querySelector('.special-btn');
sbtn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
    window.location.href = 'index.html#special';
});
const cbtn = document.querySelector('.contact-btn');
cbtn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    backgroundEffect.style.display = 'none';
    window.location.href = 'index.html#contact';
});
window.onscroll = () => {
    const upBtn = document.querySelector(".btn-up");
    const homeSection = document.querySelector("#home");
    if (window.scrollY > homeSection.offsetHeight) {
       upBtn.style.display = 'flex';
    } else {
       upBtn.style.display = 'none';
    }
}
const upBtn = document.querySelector(".btn-up");
upBtn.onclick = () => {
   window.location.href = '#top';
}
