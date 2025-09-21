// 메인 앱 DOM 요소
const app = document.getElementById('app');

// 검색어와 일치하는 이벤트 ID를 찾는 함수
function findEventIdByKeyword(query) {
    for (const eventId in historicalData) {
        const event = historicalData[eventId];
        if (event.keywords.some(keyword => query.toLowerCase().includes(keyword.toLowerCase()))) {
            return eventId;
        }
    }
    return null; // 못 찾으면 null 반환
}

// 모달(카드 뉴스)을 보여주는 함수
function showModal(eventId) {
    const eventData = historicalData[eventId];
    if (!eventData) return;

    // 모달 HTML 생성
    const modalHtml = `
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal-content">
                <span class="modal-close" id="modal-close">&times;</span>
                <img src="${eventData.image}" alt="${eventData.title}">
                <h2>${eventData.title}</h2>
                <div class="event-date">${eventData.year}년</div>
                <h4>무슨 일이 있었을까?</h4>
                <p>${eventData.description.summary}</p>
                <h4>왜 일어났을까?</h4>
                <p>${eventData.description.cause}</p>
                <h4>어떤 변화를 가져왔을까?</h4>
                <p>${eventData.description.result}</p>
                <a href="https://www.youtube.com/watch?v=${eventData.youtubeId}" class="youtube-button" target="_blank">
                    <span class="material-icons">smart_display</span>
                    영상으로 더 알아보기
                </a>
            </div>
        </div>
    `;

    // body에 모달 추가
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // 모달 닫기 이벤트 리스너 추가
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay' || e.target.id === 'modal-close') {
            document.getElementById('modal-overlay').remove();
        }
    });
}

// 동적 타임라인 화면을 렌더링하는 함수
function renderTimeline(mainEventId) {
    const mainEvent = historicalData[mainEventId];
    if (!mainEvent) {
        alert("해당 사건 정보를 찾을 수 없습니다.");
        return;
    }

    const causeEvents = mainEvent.causes.map(id => ({ id, ...historicalData[id], type: 'cause' }));
    const effectEvents = mainEvent.effects.map(id => ({ id, ...historicalData[id], type: 'effect' }));

    const allEvents = [...causeEvents, { id: mainEventId, ...mainEvent, type: 'main' }, ...effectEvents];

    // 각 이벤트 카드를 생성하는 함수
    const createEventCard = (event) => `
        <div class="event-card ${event.type}" data-id="${event.id}">
            <span class="tag ${event.type}">
                ${event.type === 'cause' ? '원인' : event.type === 'main' ? '중심 사건' : '결과'}
            </span>
            <h3>${event.title}</h3>
            <p>${event.year}년</p>
        </div>
    `;

    const timelineHtml = `
        <div class="timeline-view">
            <div class="timeline-header">
                <button class="back-button" id="back-to-home">
                    <span class="material-icons">arrow_back</span>
                    새로 검색하기
                </button>
                <h2>'${mainEvent.title}'의 역사적 맥락</h2>
            </div>
            <div class="timeline-container">
                <div class="timeline-line"></div>
                ${allEvents.map(createEventCard).join('')}
            </div>
        </div>
    `;

    app.innerHTML = timelineHtml;

    // 이벤트 리스너 추가
    document.getElementById('back-to-home').addEventListener('click', renderSearchScreen);
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            showModal(card.dataset.id);
        });
    });
}

// 검색 화면을 렌더링하는 함수
function renderSearchScreen() {
    app.innerHTML = `
        <div class="search-container">
            <h1>꼬리물기 역사 탐험 🗺️</h1>
            <p>교과서 속 역사 사건을 검색하고 원인과 결과를 한눈에 살펴보세요.</p>
            <div class="search-box">
                <input type="text" id="search-input" placeholder="예) 4.19 혁명, 3.1 운동, 6.25 전쟁">
                <button id="search-button"><span class="material-icons">search</span></button>
            </div>
        </div>
    `;

    // 검색 버튼 이벤트 리스너
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    const handleSearch = () => {
        const query = searchInput.value;
        if (!query) {
            alert("검색어를 입력해주세요.");
            return;
        }
        const foundEventId = findEventIdByKeyword(query);
        if (foundEventId) {
            renderTimeline(foundEventId);
        } else {
            alert("검색 결과가 없습니다.\n교과서에 나오는 핵심 용어로 검색해보세요.");
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// 앱 시작!
renderSearchScreen();
