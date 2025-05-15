const animationContainer = document.getElementById("animation");

// Clear previous animations (if any)
animationContainer.innerHTML = "";

// Create text elements
const text = "Te amo mi Girasol ♥".split("").map((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.style.color = "white";
    span.style.fontSize = "5rem";
    span.style.margin = "10px, 10px, 10px";
    span.style.opacity = 0;
    animationContainer.appendChild(span);
    return span;
});

const colors = ["#FF007F", "#FF6F00", "#FFD700", "#7FFF00", "#00FFFF", "#8A2BE2"];
let currentColor = 0;

// Function to change colors smoothly
function changeColor() {
    text.forEach((el) => {
        el.style.color = colors[currentColor];
    });
    currentColor = (currentColor + 1) % colors.length;
}

// Animation Timeline
const crtLoveTl = () => {
    const move = 2000;
    const boom = 300;
    const easing = "sin.inOut";
    const easingBoom = "sin.in";
    const easingOut = "sin.out";
    const delta = 20;

    return new mojs.Timeline({ repeat: Infinity }).add(
        text.map((el, index) => {
            return new mojs.Html({
                el,
                x: { 0: index * delta - 150 },
                opacity: { 0: 1 },
                duration: move,
                easing,
                onComplete: () => {
                    el.style.opacity = 0;
                    el.style.transform = "";
                    changeColor();
                },
            });
        })
    );
};

// Start the animation
crtLoveTl().play();
