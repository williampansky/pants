/**
 * @see [codepen]{@link https://codepen.io/hackthevoid/pen/AIoba}
 */
const readingProgress = new function() {
    const progressBar = document.querySelector('#readingProgress');
    let docHeight;
    let final;
    let lastScroll;
    let windowHeight;

    docHeight = 0;
    final = 0;
    lastScroll = 0;
    windowHeight = 0;

    const init = () => {
        if (document.addEventListener) {
            document.addEventListener('touchmove', handleScroll, false);
            document.addEventListener('scroll', handleScroll, false);
        } else if (window.attachEvent) {
            window.attachEvent('onscroll', handleScroll);
        }
    };

    const handleScroll = () => {
        // document.addEventListener('scroll', () => {
            lastScroll = window.scrollY;
            windowHeight = window.innerHeight;
            docHeight = document.innerHeight;
            final =
                ((lastScroll +
                    windowHeight *
                        Math.pow((lastScroll + windowHeight) / docHeight, 10)) /
                    docHeight) *
                100;

            if (progressBar !== null && typeof(progressBar) !== 'undefined')
                progressBar.style.width = final + '%';
        // });
    }

    return { init };
};

readingProgress.init();
export { readingProgress };
