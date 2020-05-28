// COLOR GENERATED DEPENDING ON WHERE WE CLICK

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony


document.body.addEventListener('click', (e) => {
    const colors = getColors(e);
    document.body.style.backgroundColor = colors;
})

const getColors = (e) => {
    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        return 'red';
    } else if (e.clientX % 2 !== 0 && e.clientY % 2 !== 0) {
        return 'blue';
    } else if (e.clientX % 2 === 0 && e.clientY % 2 !== 0 || e.clientX % 2 !== 0 && e.clientY % 2 === 0) {
        return 'green';
    }
}