// 역사적 사건 데이터
// 이미지 주소는 실제 인터넷에 있는 이미지 주소로 변경해야 합니다.
const historicalData = [
    {
        id: 1,
        year: 1894,
        date: "1894년",
        title: "동학농민운동",
        category: "history",
        image: "https://via.placeholder.com/600x400.png?text=Donghak+Peasant+Revolution",
        description: "부패한 관리들에 맞서고 외세의 침략을 막기 위해 농민들이 중심이 되어 일으킨 큰 운동이에요. 평등한 세상을 만들고 싶어 했어요."
    },
    {
        id: 2,
        year: 1919,
        date: "1919년 3월 1일",
        title: "3.1 운동",
        category: "history",
        image: "https://via.placeholder.com/600x400.png?text=March+1st+Movement",
        description: "일본의 식민 지배에 저항하여 우리나라의 독립을 외쳤던 평화적인 만세 운동이에요. 전 국민이 한마음으로 '대한 독립 만세'를 외쳤답니다."
    },
    {
        id: 3,
        year: 1948,
        date: "1948년 4월 3일",
        title: "제주 4.3 사건",
        category: "modern",
        image: "https://via.placeholder.com/600x400.png?text=Jeju+4.3+Incident",
        description: "대한민국 정부 수립 과정에서 제주도에서 일어난 매우 슬픈 사건이에요. 수많은 무고한 사람들이 희생되었고, 우리는 이 아픈 역사를 꼭 기억해야 해요."
    },
    {
        id: 4,
        year: 1950,
        date: "1950년 6월 25일",
        title: "6.25 전쟁",
        category: "modern",
        image: "https://via.placeholder.com/600x400.png?text=Korean+War",
        description: "북한의 남침으로 시작된 우리 민족의 가장 큰 비극 중 하나예요. 이 전쟁으로 온 나라가 파괴되고 수많은 가족이 흩어졌답니다."
    },
    {
        id: 5,
        year: 1960,
        date: "1960년 4월 19일",
        title: "4.19 혁명",
        category: "modern",
        image: "https://via.placeholder.com/600x400.png?text=April+19+Revolution",
        description: "이승만 정부의 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. 불의에 맞서 싸운 용감한 시민들의 힘으로 우리나라 민주주의가 한 단계 발전했어요."
    },
    {
        id: 6,
        year: 1980,
        date: "1980년 5월 18일",
        title: "5.18 광주민주화운동",
        category: "modern",
        image: "https://via.placeholder.com/600x400.png?text=Gwangju+Democratization+Movement",
        description: "신군부의 독재에 저항하고 민주주의를 지키기 위해 광주 시민과 학생들이 들고일어난 운동이에요. 많은 희생이 있었지만, 우리나라 민주주의 발전에 큰 영향을 주었답니다."
    },
    {
        id: 7,
        year: 1987,
        date: "1987년 6월",
        title: "6월 민주항쟁",
        category: "modern",
        image: "https://via.placeholder.com/600x400.png?text=June+Democracy+Movement",
        description: "대통령을 우리 손으로 직접 뽑게 해달라고 요구하며 전국적으로 일어난 민주화 운동이에요. 이 항쟁의 결과로 지금처럼 대통령을 직접 뽑는 직선제가 이루어졌어요."
    }
];

// 메인 앱 DOM 요소
const app = document.getElementById('app');

// 모달(상세 설명창)을 보여주는 함수
function showModal(eventId) {
    const eventData = historicalData.find(event => event.id === eventId);
    if (!eventData) return;

    // 모달 HTML 생성
    const modalHtml = `
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal-content">
                <span class="modal-close" id="modal-close">&times;</span>
                <img src="${eventData.image}" alt="${eventData.title}">
                <h2>${eventData.title}</h2>
                <div class="event-date">${eventData.date}</div>
                <p>${eventData.description}</p>
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

// 타임라인 화면을 렌더링하는 함수
function renderTimeline(filter) {
    let filteredData = [];
    if (filter === 'history' || filter === 'modern') {
        filteredData = historicalData.filter(event => event.category === filter);
    } else { // 검색어 필터링
        filteredData = historicalData.filter(event => event.title.includes(filter) || event.description.includes(filter));
    }

    // 타임라인 상단 (뒤로가기, 검색창) HTML
    const headerHtml = `
        <div class="timeline-header">
            <button class="back-button" id="back-to-home">처음으로</button>
            <div class="search-container">
                <input type="text" id="search-input" placeholder="키워드로 검색 (예: 4.19)">
                <button id="search-button">검색</button>
            </div>
        </div>
    `;

    // 타임라인 이벤트 포인트 HTML 생성
    const eventsHtml = filteredData.map(event => {
        // 타임라인 시작 연도(1890)와 끝 연도(2000) 기준으로 위치 계산
        const position = ((event.year - 1890) / (2000 - 1890)) * 100;
        return `
            <div class="event-point" style="left: ${position}%;" data-id="${event.id}">
                <span class="tooltip">${event.title}</span>
            </div>
        `;
    }).join('');

    // 최종 타임라인 HTML 조립
    app.innerHTML = `
        ${headerHtml}
        <div class="timeline-wrapper">
            <div class="timeline">
                ${eventsHtml}
            </div>
        </div>
    `;

    // 이벤트 리스너 추가
    document.getElementById('back-to-home').addEventListener('click', renderHomeScreen);
    
    document.getElementById('search-button').addEventListener('click', () => {
        const searchTerm = document.getElementById('search-input').value;
        if(searchTerm) {
            renderTimeline(searchTerm);
        }
    });

    document.querySelectorAll('.event-point').forEach(point => {
        point.addEventListener('click', () => {
            const eventId = parseInt(point.dataset.id);
            showModal(eventId);
        });
    });
}

// 홈 화면을 렌더링하는 함수
function renderHomeScreen() {
    app.innerHTML = `
        <div class="home-container">
            <h1>🇰🇷 시간 탐험 뉴스</h1>
            <p>알고 싶은 시대의 버튼을 눌러 역사 여행을 시작해 보세요!</p>
            <div class="choice-buttons">
                <button class="history-btn" id="history-btn">대한민국 역사</button>
                <button class="modern-btn" id="modern-btn">대한민국 현대사</button>
            </div>
        </div>
    `;

    // 버튼에 이벤트 리스너 추가
    document.getElementById('history-btn').addEventListener('click', () => renderTimeline('history'));
    document.getElementById('modern-btn').addEventListener('click', () => renderTimeline('modern'));
}

// 앱 시작!
renderHomeScreen();
