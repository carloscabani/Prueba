/**
 * @returns {Promise<Object>}
 */
const fetchQuote = async () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await res.json();
    console.log(data);
    return data; // Retorna el objeto completo, no solo el nombre
}

/**
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Rick and Morty App';
    element.innerHTML = "Loading....";

    const statusLabel = document.createElement('h3');
    const quoteLabel = document.createElement('blockquote');
    const newQuoteBtn = document.createElement('button');
    newQuoteBtn.innerText = 'Next Character';

    const renderQuote = (data) => {
        statusLabel.innerHTML = data.status;
        quoteLabel.innerHTML = data.name;
        element.replaceChildren(statusLabel, quoteLabel, newQuoteBtn);
    }

    // Agregar evento click al botón
    newQuoteBtn.addEventListener('click', async () => {
        element.innerHTML = "Loading....";
        const newData = await fetchQuote();
        renderQuote(newData);
    });

    // Cargar el primer personaje
    const firstData = await fetchQuote();
    renderQuote(firstData);
}