//mouseenter + mouseleave > видит только event.target и работает с ним, игнорируя детей 
//mouseover + mouseout > видит и event.target и его ребенка, 
// при этом ребенок може получить такие же свойства и родитель. 
// mousemove - очень много жрет. 

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter',addColor);
boxRef.addEventListener('mouseleave', takeColor);

function addColor(event) {
    event.target.classList.add('box-active');
};
function takeColor(event) {
    event.target.classList.remove('box-active');
};

boxRef.addEventListener('mousemove', event => {
    console.log(event);
})