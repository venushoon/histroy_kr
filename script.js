document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');

    timelineData.forEach(item => {
        const itemContainer = document.createElement('div');
        
        if (item.type === 'era') {
            itemContainer.className = 'era-card';
            itemContainer.textContent = item.title;
        } else {
            itemContainer.className = 'event-item';
            
            if (item.type === 'event') {
                itemContainer.innerHTML = buildEventCardHtml(item);
                itemContainer.querySelector('.event-card').addEventListener('click', () => showModal(item));
            } else if (item.type === 'eventCluster') {
                itemContainer.classList.add('event-cluster');
                
                const mainEventHtml = buildEventCardHtml(item.mainEvent, true);
                const relatedCardsHtml = item.relatedEvents.map(related => buildRelatedCardHtml(related)).join('');
                
                itemContainer.innerHTML = `
                    <div class="cluster-title">${item.clusterTitle}</div>
                    <div class="main-event-wrapper">
                        ${mainEventHtml}
                    </div>
                    <div class="related-events">
                        ${relatedCardsHtml}
                    </div>
                `;

                itemContainer.querySelector('.main-event-wrapper .event-card').addEventListener('click', () => showModal(item.mainEvent));
                itemContainer.querySelectorAll('.related-card').forEach((card, index) => {
                    card.addEventListener('click', () => showModal(item.relatedEvents[index]));
                });
            }
        }
        timelineContainer.appendChild(itemContainer);
    });

    const eventItems = document.querySelectorAll('.event-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    eventItems.forEach(item => { observer.observe(item); });
});

function buildEventCardHtml(data, isClusterMain = false) {
    const isImportant = data.important ? 'important' : '';
    const pointHtml = isClusterMain || data.type === 'event' ? `<div class="timeline-point ${isImportant}"></div>` : '';
    
    return `
        <div class="event-card ${isImportant}" data-year="${data.year}">
            <div class="year">${data.year}년</div>
            <div class="title">${data.title}</div>
            ${pointHtml}
        </div>
    `;
}

function buildRelatedCardHtml(data) {
    return `
        <div class="related-card event-card ${data.relation}" data-year="${data.year}">
            <div class="relation-tag ${data.relation}">${data.relation}</div>
            <div class="title">${data.title}</div>
            <div class="year">${data.year}년</div>
        </div>
    `;
}

function showModal(data) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) { existingModal.remove(); }

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    // 이 부분의 오타를 수정했습니다.
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${data.image}" alt="${data.title}" onerror="this.style.display='none'">
            <h2>${data.title}</h2>
            <div class="year">${data.year}년</div>
            <p>${data.description}</p>
            <a href="${data.encyclopediaUrl}" class="details-button" target="_blank">
                <span class="material-icons">menu_book</span>
                백과사전에서 자세히 보기
            </a>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    const closeModal = () => {
        modalOverlay.remove();
    };

    modalOverlay.querySelector('.modal-close').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}
