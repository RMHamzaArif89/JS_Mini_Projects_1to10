getText('/info.json')
async function getText(file) {
    let x = await fetch(file);
    let y = await x.json();
    reviewItems = y

}




img = document.querySelector('img');

author = document.querySelector('.author');
//console.log(author)


job = document.querySelector('.job');
text = document.querySelector('.text');

//buttons
prebtn = document.querySelector('.pre')
nextbtn = document.querySelector('.next')


currentItem = 0;
window.addEventListener('DOMSContentLoaded', function () {
    showrev(currentItem);
})

function showrev(rev) {
    //getText('/info.json')
    //console.log(review[0])
    item = reviewItems[rev]
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}


nextbtn.addEventListener('click', function () {
    showrev(currentItem);
    currentItem++;
    if (currentItem > reviewItems.length - 1) {
        currentItem = 0
    }
})
prebtn.addEventListener('click', function () {
    showrev(currentItem);
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviewItems.length - 1;
    }
})