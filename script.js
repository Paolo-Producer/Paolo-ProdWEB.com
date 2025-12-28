const scroll = document.getElementById("scroll");
const video = document.querySelector("video");

scroll.addEventListener("scroll", () => {
    const offset = scroll.scrollTop * 0.15;
    video.style.transform = translateY(${offset}px);
});