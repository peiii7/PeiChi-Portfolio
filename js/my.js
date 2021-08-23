//button:
mybutton = document.getElementById('myBtn')

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters')
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")

anime
    .timeline({ loop: false })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 1000,
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
    })
    .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1),
    })
    .add({
        targets: '.ml11 .line',
        opacity: [0, 0],
    })
