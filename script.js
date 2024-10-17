document.addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);

    // Remove sparkle after animation ends
    sparkle.addEventListener('animationend', function () {
        sparkle.remove();
    });
});
