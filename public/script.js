

const mainScroll = () =>{
    window.scrollTo({
        top: 0,  
        behavior: 'smooth'  
    })
}

const strategyScroll = () =>{
    window.scrollTo({
        top: 1000,  
        behavior: 'smooth'  
    })
}

const ratesScroll = () =>[
    window.scrollTo({
        top: 1936,  
        behavior: 'smooth'  
    })
]

const contactScroll = () =>[
    window.scrollTo({
        top: 2833,  
        behavior: 'smooth'  
    })
]

const productScroll = () =>[
    window.scrollTo({
        top: 3510,  
        behavior: 'smooth'  
    })
]

const updatePrice = () => {
    let priceInput = document.getElementById('price')
    let licenseInput = parseInt(document.getElementById('license').value)
    let kolInput = parseInt(document.getElementById('kol').value)
    if(!isNaN(licenseInput) && !isNaN(licenseInput)) {
        if (licenseInput <= 3) {
            totalPrice = licenseInput * (kolInput * 2000);
          } else if (licenseInput <= 5) {
            totalPrice = licenseInput *  (kolInput * 1800);
          } else if (licenseInput > 5){
            totalPrice = licenseInput* (kolInput * 1680);
          }
          priceInput.value = totalPrice + "₸";
    }
    else {
        priceInput.value = "";
    }
}


const setForm = (teleg) =>{
    let buttonEmail = document.querySelector('.email')
    let buttonTeleg = document.querySelector('.teleg')
    let svgEmail = document.querySelector('.emailSvg')
    let svgTeleg = document.querySelector('.telSvg')
    let inputForm = document.querySelector('.stroke')
    let placeholderEmail = 'example@gmail.com'
    let placeholderTeleg = '@example123'
    if(teleg){
        buttonEmail.classList.remove('active')
        buttonTeleg.classList.add('active')
        svgEmail.classList.remove('actives')
        svgTeleg.classList.add('actives')
        inputForm.setAttribute('placeholder', placeholderTeleg)
    }
    else{
        buttonEmail.classList.add('active')
        buttonTeleg.classList.remove('active')
        svgEmail.classList.add('actives')
        svgTeleg.classList.remove('actives')
        inputForm.setAttribute('placeholder', placeholderEmail)
    }
}