document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');

    timelineData.forEach(item => {
        const itemContainer = document.createElement('div');
        
        // 1. 데이터 타입에 따라 다른 HTML 구조 생성
        if (item.type === 'era') {
            itemContainer.className = 'era-card';
            itemContainer.textContent = item.title;
        } else { // type === 'event' 또는 'eventCluster'
            itemContainer.className = 'event-item';
            
            if (item.type === 'event') { // 단일 사건
                itemContainer.innerHTML = buildEventCardHtml(item);
                itemContainer.querySelector('.event-card').addEventListener('click', () => showModal(item));
            } else if (item.type === 'eventCluster') { // 이야기 묶음
                itemContainer.classList.add('event-cluster');
                
                const mainEventHtml = buildEventCardHtml(item.mainEvent);
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

                // 메인 카드에 클릭 이벤트 추가
                itemContainer.querySelector('.main-event-wrapper .event-card').addEventListener('click', () => showModal(item.mainEvent));
                // 관련 카드들에 클릭 이벤트 추가
                itemContainer.querySelectorAll('.related-card').forEach((card, index) => {
                    card.addEventListener('click', () => showModal(item.relatedEvents[index]));
                });
            }
        }
        timelineContainer.appendChild(itemContainer);
    });

    // 스크롤 애니메이션 (이전과 동일)
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

// 단일 이벤트 카드 HTML 생성 함수
function buildEventCardHtml(data) {
    const isImportant = data.important ? 'important' : '';
    return `
        <div class="event-card ${isImportant}" data-year="${data.year}">
            <div class="year">${data.year}년</div>
            <div class="title">${data.title}</div>
            <div class="timeline-point ${isImportant}"></div>
        </div>
    `;
}

// 관련 이벤트(원인/결과) 카드 HTML 생성 함수
function buildRelatedCardHtml(data) {
    return `
        <div class="related-card event-card ${data.relation}" data-year="${data.year}">
            <div class="relation-tag ${data.relation}">${data.relation}</div>
            <div class="title">${data.title}</div>
            <div class="year">${data.year}년</div>
        </div>
    `;
}

// 모달(카드 뉴스)을 보여주는 함수 (이전과 동일)
function showModal(data) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) { existingModal.remove(); }

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${data.image}" alt="${data.title}">
            <h2>${data.title}</h2>
            <div class="year">${data.year}년</div>
            <p>${data.description}</p>
            <a href="https://www.youtube.com/watch?v=${data.youtubeId}" class="youtube-button" target="_blank">
                <span class="material-icons">smart_display</span>
                영상으로 더 알아보기
            </a>
        </div>
    `;
    document.body.appendChild(modalOverlay);
    modalOverlay.querySelector('.modal-close').addEventListener('click', () => modalOverlay.remove());
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) { modalOverlay.remove(); } });
}
