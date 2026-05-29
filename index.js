
const tijdlijnData = [
    {
        jaar: '2023',
        titel: 'Grafisch design project',
        tekst: 'Eerste kennismaking met grafisch design via een fictief festival project.',
        afbeelding: 'Assets/logo-GrafischPakket.png'
    },
    {
        jaar: '2025',
        titel: 'Start PXL',
        tekst: 'Start Digitale Vormgeving en eerste ervaring met code.',
        afbeelding: null
    },
    {
        jaar: '2026',
        titel: 'Portfolio website',
        tekst: 'Mijn eerste professionele webproject gebouwd.',
        afbeelding: null
    },
    {
        jaar: '2026',
        titel: 'Eigen brand',
        tekst: 'Tijdens het vak Digital Branding heb ik de basis gelegd voor mijn eigen merk: Luca Nollet. Bij de projecten vind je het bijhorende brandbook, neem hier dus zeker een kijkje.',
        afbeelding: 'Assets/LogoIcon.png'
    }
];

function generateTimeline(data) {
    const container = document.querySelector('.timeline');
    if (!container) return;

    container.innerHTML = '';

    data.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const date = document.createElement('span');
        date.className = 'timeline-date';
        date.textContent = item.jaar;

        const title = document.createElement('h3');
        title.textContent = item.titel;

        const text = document.createElement('p');
        text.textContent = item.tekst;

        content.append(date, title, text);

        if (item.afbeelding) {
            const img = document.createElement('img');
            img.src = item.afbeelding;
            content.appendChild(img);
        }

        timelineItem.appendChild(content);
        container.appendChild(timelineItem);
    });

    animateTimeline();
}

function animateTimeline() {
    const items = document.querySelectorAll(".timeline-item");

    function reveal() {
        const trigger = window.innerHeight * 0.85;

        items.forEach(item => {
            const top = item.getBoundingClientRect().top;

            if (top < trigger) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
}

generateTimeline(tijdlijnData);