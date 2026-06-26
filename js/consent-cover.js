document.querySelectorAll('.consent-cover').forEach(container => {
    container.addEventListener('click', () => {
        const elem = document.createElement(container.dataset.elementType);
        for (attr in container.dataset) {
            if (attr === 'elementType')
                continue;
            console.info(`[consent cover] attr: setting ${attr.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}="${container.dataset[attr]}"`);
            elem.setAttribute(attr.replace(/[A-Z]/g, m => "-" + m.toLowerCase()), container.dataset[attr]);
        };
        container.replaceWith(elem);
    });
});
