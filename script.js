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
            
            if (item.type === 'event') { // 단일 사건일 경우
                itemContainer.innerHTML = buildEventCardHtml(item);
                // 생성된 카드에 클릭 이벤트 추가
                itemContainer.querySelector('.event-card').addEventListener('click', () => showModal(item));
            } else if (item.type === 'eventCluster') { // 이야기 묶음일 경우
                itemContainer.classList.add('event-cluster');
                
                // 메인 카드와 관련 카드들의 HTML을 각각 생성
                const mainEventHtml = buildEventCardHtml(item.mainEvent, true); // 클러스터의 메인임을 표시
                const relatedCardsHtml = item.relatedEvents.map(related => buildRelatedCardHtml(related)).join('');
                
                // 최종 HTML 구조 조립
                itemContainer.innerHTML = `
                    <div class="cluster-title">${item.clusterTitle}</div>
                    <div class="main-event-wrapper">
                        ${mainEventHtml}
                    </div>
                    <div class="related-events">
                        ${relatedCardsHtml}
                    </div>
                `;

                // 각 카드에 클릭 이벤트 추가
                itemContainer.querySelector('.main-event-wrapper .event-card').addEventListener('click', () => showModal(item.mainEvent));
                itemContainer.querySelectorAll('.related-card').forEach((card, index) => {
                    card.addEventListener('click', () => showModal(item.relatedEvents[index]));
                });
            }
        }
        timelineContainer.appendChild(itemContainer);
    });

    // 2. 스크롤에 따라 이벤트 카드가 나타나는 애니메이션
    const eventItems = document.querySelectorAll('.event-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 }); // 아이템의 30%가 보일 때 애니메이션 시작
    eventItems.forEach(item => { observer.observe(item); });
});

/**
 * 메인 이벤트 카드 HTML 문자열 생성 함수
 * @param {object} data - 사건 데이터
 * @param {boolean} isClusterMain - 클러스터의 메인 이벤트인지 여부
 * @returns {string} HTML 문자열
 */
function buildEventCardHtml(data, isClusterMain = false) {
    const isImportant = data.important ? 'important' : '';
    // isClusterMain이 true이거나 단일 이벤트일 때만 timeline-point를 생성하도록 수정
    const pointHtml = isClusterMain || data.type === 'event' ? `<div class="timeline-point ${isImportant}"></div>` : '';
    
    return `
        <div class="event-card ${isImportant}" data-year="${data.year}">
            <div class="year">${data.year}년</div>
            <div class="title">${data.title}</div>
            ${pointHtml}
        </div>
    `;
}

/**
 * 관련 이벤트(원인/결과) 카드 HTML 문자열 생성 함수
 * @param {object} data - 관련 사건 데이터
 * @returns {string} HTML 문자열
 */
function buildRelatedCardHtml(data) {
    return `
        <div class="related-card event-card ${data.relation}" data-year="${data.year}">
            <div class="relation-tag ${data.relation}">${data.relation}</div>
            <div class="title">${data.title}</div>
            <div class="year">${data.year}년</div>
        </div>
    `;
}

/**
 * 모달(카드 뉴스)을 보여주는 함수
 * @param {object} data - 표시할 사건 데이터
 */
function showModal(data) {
    // 기존에 열려있는 모달이 있다면 제거
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) { existingModal.remove(); }

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    // 모달 내부에 카드 뉴스 내용 구성
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

    // 모달 닫기 이벤트 리스너 추가
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
