const navBar = document.querySelector('.nav');

// Fix Navigation Bar
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener('scroll', () =>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add('fix-nav');
    }
    else{
        navBar.classList.remove('fix-nav');
    }
});

//Function triggers when 'buynow' is clicked
function tocheckout(arrNo){
    var imgsrc = document.getElementsByClassName("javaimg")[arrNo].src;
    let element = document.getElementsByClassName("anchorlink")[arrNo];
    let element2 = document.getElementsByClassName("anchorlink2")[arrNo];

    window.localStorage.setItem("srcOfImg",JSON.stringify(imgsrc));

    let price = document.getElementsByClassName("price")[arrNo].innerHTML;
    window.localStorage.setItem("priceOfProd",JSON.stringify(price));

    element.setAttribute('href', 'checkout.html');
    element2.setAttribute('href', 'checkout.html');
};


