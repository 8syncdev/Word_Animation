//-----------Set-Up-----------
anime({
    targets: ".name path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 5000,
    delay: function (el, i) {
        return i * 20;
    },
    direction: "alternate",
    loop: true,
});
//-----------------------------------
const move = document.querySelector(".word-F");
move.innerHTML = move.textContent.replace(/\S/g, "<span>$&</span>");

const moveF = anime.timeline({
    targets: ".word-F span",
    easing: "easeInOutExpo",
    loop: true,
})
moveF.add({
    rotate: function () {
        return anime.random(-360,360)
    },
    translateX: function () {
        return anime.random(-500,500)
    },
    translateY: function () {
        return anime.random(-500,500)
    },
    duration: 5000,
    delay: anime.stagger(20),
})
moveF.add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: 5000,
    delay: anime.stagger(20),
})

