document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');

    // 1. 타임라인 아이템 생성 및 표시
    const fragment = document.createDocumentFragment();
    timelineData.forEach(item => {
        const itemContainer = document.createElement('div');
        let cardDataId = '';

        if (item.type === 'era') {
            itemContainer.className = 'era-card';
            itemContainer.textContent = item.title;
        } else {
            itemContainer.className = 'event-item';
            
            if (item.type === 'event') {
                itemContainer.innerHTML = buildEventCardHtml(item);
                cardDataId = `${item.year}-${item.title}`;
                itemContainer.querySelector('.event-card').dataset.id = cardDataId;
            } else if (item.type === 'eventCluster') {
                itemContainer.classList.add('event-cluster');
                
                const mainEventHtml = buildEventCardHtml(item.mainEvent, true);
                const relatedCardsHtml = item.relatedEvents.map(related => {
                    const relatedDataId = `${related.year}-${related.title}`;
                    return buildRelatedCardHtml(related, relatedDataId);
                }).join('');
                
                itemContainer.innerHTML = `
                    <div class="cluster-title">${item.clusterTitle}</div>
                    <div class="main-event-wrapper">
                        ${mainEventHtml}
                    </div>
                    <div class="related-events">
                        ${relatedCardsHtml}
                    </div>
                `;
                const mainEventCard = itemContainer.querySelector('.main-event-wrapper .event-card');
                mainEventCard.dataset.id = `${item.mainEvent.year}-${item.mainEvent.title}`;
            }
        }
        fragment.appendChild(itemContainer);
    });
    timelineContainer.appendChild(fragment);

    // 2. 스크롤 애니메이션 (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 한 번 보이면 관찰 중지
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.event-item').forEach(item => { observer.observe(item); });

    // 3. 이벤트 위임을 사용한 모달 열기
    timelineContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.event-card');
        if (card && card.dataset.id) {
            const data = findDataById(card.dataset.id);
            if (data) showModal(data);
        }
    });

    // 4. 모달 닫기 이벤트
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close');
    
    const closeModal = () => {
        modalOverlay.classList.remove('visible');
    };

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});

// 데이터 ID로 timelineData에서 해당 이벤트 정보 찾기
function findDataById(id) {
    const [year, ...titleParts] = id.split('-');
    const title = titleParts.join('-');

    for (const item of timelineData) {
        if (item.type === 'event' && item.year == year && item.title === title) {
            return item;
        }
        if (item.type === 'eventCluster') {
            if (item.mainEvent.year == year && item.mainEvent.title === title) {
                return item.mainEvent;
            }
            const related = item.relatedEvents.find(e => e.year == year && e.title === title);
            if (related) return related;
        }
    }
    return null;
}

function buildEventCardHtml(data, isClusterMain = false) {
    const isImportant = data.important ? 'important' : '';
    const pointHtml = isClusterMain || data.type === 'event' ? `<div class="timeline-point ${isImportant}"></div>` : '';
    
    return `
        <div class="event-card ${isImportant}">
            <div class="year">${data.year}년</div>
            <div class="title">${data.title}</div>
            ${pointHtml}
        </div>
    `;
}

function buildRelatedCardHtml(data, dataId) {
    return `
        <div class="related-card event-card ${data.relation}" data-id="${dataId}">
            <div class="relation-tag ${data.relation}">${data.relation}</div>
            <div class="title">${data.title}</div>
            <div class="year">${data.year}년</div>
        </div>
    `;
}

function showModal(data) {
    const modalOverlay = document.getElementById('modal-overlay');
    
    document.getElementById('modal-image').src = data.image || '';
    document.getElementById('modal-image').alt = data.title;
    document.getElementById('modal-image').style.display = data.image ? 'block' : 'none';
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-year').textContent = `${data.year}년`;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-link').href = data.encyclopediaUrl;

    modalOverlay.classList.add('visible');
}
