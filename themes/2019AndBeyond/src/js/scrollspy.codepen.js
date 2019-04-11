const scrollSpy = new function() {
    const elements = {};

    const init = () => {
        if (document.addEventListener) {
            document.addEventListener('touchmove', handleScroll, false);
            document.addEventListener('scroll', handleScroll, false);
        } else if (window.attachEvent) {
            window.attachEvent('onscroll', handleScroll);
        }
    };

    const spyOn = domElement => {
        const element = {};
        element['domElement'] = domElement;
        element['justGotIntoViewPort'] = true;
        elements[domElement.id] = element;
    };

    const handleScroll = () => {
        const currentViewPosition = document.documentElement.scrollTop
            ? document.documentElement.scrollTop
            : document.body.scrollTop;

        for (let element of elements) {
            const elementPosition = getPositionOfElement(element.domElement);

            let usableViewPosition = currentViewPosition;
            if (!element.isInViewPort) {
                usableViewPosition -= element.domElement.clientHeight;
            }

            if (usableViewPosition > elementPosition) {
                fireOutOfSightEvent(element.domElement);
                element.isInViewPort = false;
            } else if (!element.isInViewPort) {
                fireBackInSightEvent(element.domElement);
                element.isInViewPort = true;
            }
        }
    };

    const fireOutOfSightEvent = domElement => {
        fireEvent('ScrollSpyOutOfSight', domElement);
    };

    const fireBackInSightEvent = domElement => {
        fireEvent('ScrollSpyBackInSight', domElement);
    };

    const fireEvent = (eventName, domElement) => {
        if (document.createEvent) {
            const event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
            event.data = domElement;
            document.dispatchEvent(event);
        } else if (document.createEventObject) {
            const event = document.createEventObject();
            event.data = domElement;
            event.expando = eventName;
            document.fireEvent('onpropertychange', event);
        }
    };

    const getPositionOfElement = domElement => {
        let pos = 0;
        while (domElement) {
            pos += domElement.offsetTop;
            domElement = domElement.offsetParent;
        }
        return pos;
    };

    console.log(elements)

    return { init, spyOn };
}();

scrollSpy.init();
export { scrollSpy };
