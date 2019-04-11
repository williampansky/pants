/**
 * Adds .scrolled after 80px; removes if less than.
 * @module scrollToc
 * @see [Refs]{@link https://www.competa.com/blog/add-a-css-class-on-scroll-with-vanilla-javascript/}
 */
export const scrollToc = ()=> {
    const toc = document.querySelector('.toc');
    
    if (toc !== null && typeof(toc) !== 'null') {
        let scrollPosY = window.pageYOffset | document.body.scrollTop;
        if (scrollPosY > 80) toc.classList.add('scrolled');
        else if (scrollPosY <= 80) toc.classList.remove('scrolled');

        window.addEventListener('scroll', e => {
            let scrollPosY = window.pageYOffset | document.body.scrollTop;
            if (scrollPosY > 80) toc.classList.add('scrolled');
            else if (scrollPosY <= 80) toc.classList.remove('scrolled');
        });
    }
}