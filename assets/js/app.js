import "../css/app.scss"

if (document.body.classList.contains('accordion')) {
    
    import('./components/accordion').then(Accordion => {
        new Accordion();
    });

}