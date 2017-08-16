let theBody = document.querySelector('body')
theBody.addEventListener('click', moreInfoDisplay);

function moreInfoDisplay(clickedThing){
console.log(clickedThing.target);
};
