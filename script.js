// 역사적 사건 데이터 (이미지 및 설명 업데이트)
const historicalData = [
    {
        id: 1,
        year: 1894,
        date: "1894년",
        title: "동학농민운동",
        category: "history",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Donghak_Peasant_Revolution_in_1894.jpg/1280px-Donghak_Peasant_Revolution_in_1894.jpg",
        description: "조선 후기, 일부 탐관오리들의 괴롭힘이 심해지자 전봉준을 중심으로 농민들이 들고일어났어요. '사람이 곧 하늘이다'라는 생각으로 모든 사람이 평등한 세상을 만들고, 외세의 간섭에서 벗어나고자 했던 우리나라의 중요한 자주적 농민 운동이랍니다."
    },
    {
        id: 2,
        year: 1919,
        date: "1919년 3월 1일",
        title: "3.1 운동",
        category: "history",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/March_First_Movement_in_1919.jpg/1280px-March_First_Movement_in_1919.jpg",
        description: "일본에게 나라를 빼앗긴 시절, 우리 민족이 독립을 간절히 바라는 마음을 전 세계에 알리기 위해 평화적으로 '대한 독립 만세!'를 외쳤던 운동이에요. 비록 바로 독립을 이루진 못했지만, 이 운동을 계기로 대한민국 임시정부가 세워지는 등 독립운동의 큰 불씨가 되었어요."
    },
    {
        id: 3,
        year: 1948,
        date: "1948년 4월 3일",
        title: "제주 4.3 사건",
        category: "modern",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jeju_4%C2%B73_Peace_Park_10.jpg/1280px-Jeju_4%C2%B73_Peace_Park_10.jpg",
        description: "광복 이후 우리나라가 남과 북으로 나뉘어 혼란스러웠던 시기, 제주도에서 일어난 매우 가슴 아픈 역사예요. 당시 잘못된 결정과 오해 때문에 수많은 제주도민들이 억울하게 희생되었어요. 우리는 이 사건을 통해 평화와 인권이 얼마나 소중한지 꼭 기억해야 해요."
    },
    {
        id: 4,
        year: 1950,
        date: "1950년 6월 25일",
        title: "6.25 전쟁",
        category: "modern",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korean_War_Montage_2.png/1280px-Korean_War_Montage_2.png",
        description: "북한이 갑작스럽게 남한을 침공하면서 시작된 우리 민족의 가장 큰 비극이에요. 3년이 넘는 긴 시간 동안 온 나라가 폐허가 되고, 수많은 군인과 사람들이 목숨을 잃거나 다쳤어요. 지금도 많은 가족이 남과 북으로 흩어져 만나지 못하는 아픔을 남긴 전쟁이랍니다."
    },
    {
        id: 5,
        year: 1960,
        date: "1960년 4월 19일",
        title: "4.19 혁명",
        category: "modern",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg/1280px-1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg",
        description: "당시 이승만 정부가 선거에서 이기기 위해 투표를 조작하는 등 정직하지 못한 행동을 했어요. 이에 분노한 초등학생, 중고등학생, 대학생 등 학생들이 중심이 되어 '잘못된 정치는 물러나라!'고 외쳤어요. 이 혁명은 우리나라 민주주의를 지켜낸 위대한 시민의 힘을 보여준 사건이에요."
    },
    {
        id: 6,
        year: 1980,
        date: "1980년 5월 18일",
        title: "5.18 광주민주화운동",
        category: "modern",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/5-18_Democracy_Plaza_at_the_May_18th_National_Cemetery_in_Gwangju%2C_South_Korea.jpg/1280px-5-18_Democracy_Plaza_at_the_May_18th_National_Cemetery_in_Gwangju%2C_South_Korea.jpg",
        description: "군인 출신인 전두환이 권력을 잡고 민주주의를 억압하자, 광주 시민들과 학생들이 '민주주의를 지키자!'며 맞서 싸웠던 운동이에요. 많은 분들의 용감한 희생이 있었기에, 이후 우리나라의 민주주의가 더욱 발전할 수 있는 중요한 밑거름이 되었답니다."
    },
    {
        id: 7,
        year: 1987,
        date: "1987년 6월",
        title: "6월 민주항쟁",
        category: "modern",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Korea-Seoul-June_Democracy_Movement_1987.6.10-2.jpg/1280px-Korea-Seoul-June_Democracy_Movement_1987.6.10-2.jpg",
        description: "대통령을 국민이 직접 뽑지 못하고 체육관에서 간접적으로 뽑던 시절이었어요. 국민들은 '내 손으로 직접 대통령을 뽑게 해달라!'고 전국적으로 시위를 벌였어요. 결국 국민들의 뜨거운 함성이 승리하여, 지금처럼 대통령을 직접 뽑는 '대통령 직선제'가 이루어지게 된 역사적인 사건입니다."
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
