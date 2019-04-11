import { readingProgress } from './js/readingProgress';
import Prism from './js/prism.min';
// import Prism from 'prismjs';
import hljs from './js/highlight.min';
// import { scrollSpy } from './js/scrollspy.codepen';
import { scrollToc } from './js/toc';
import UIkit from 'uikit';
 
function documentReady(fn) {
    if (
        document.attachEvent
            ? document.readyState === 'complete'
            : document.readyState !== 'loading'
    ) {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

documentReady(() => {
    scrollToc();
    readingProgress.init();
    // const toc = document.querySelector('#TableOfContents');
    // scrollSpy.spyOn(toc);
    Prism;
    hljs;
});
