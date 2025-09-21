const timelineData = [
    {
        type: 'era',
        title: '광복과 대한민국 정부 수립 (1945~1950)'
    },
    {
        type: 'event',
        year: 1945,
        title: '8.15 광복',
        description: "35년간의 긴 일본의 식민 지배에서 벗어나 우리나라가 독립을 맞이한 기쁜 날이에요. 하지만 이후 미국과 소련의 영향으로 남과 북이 나뉘게 되는 아픔도 시작되었답니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Korean_independence_celebration_in_1945.jpg/1280px-Korean_independence_celebration_in_1945.jpg",
        youtubeId: "h-3k_k6y-M8", // 관련 유튜브 영상
        important: true
    },
    {
        type: 'event',
        year: 1948,
        title: '대한민국 정부 수립',
        description: "남한의 총선거를 통해 이승만을 초대 대통령으로 하는 대한민국 정부가 공식적으로 세워졌어요. 이로써 우리나라는 자유 민주주의 국가로서 첫발을 내딛게 되었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/ROK_Government_establishment_ceremony_1948.jpg/1280px-ROK_Government_establishment_ceremony_1948.jpg",
        youtubeId: "R-yLK-4IkLA", // 관련 유튜브 영상
        important: false
    },
    {
        type: 'era',
        title: '6.25 전쟁과 혼란의 시대 (1950~1959)'
    },
    {
        type: 'event',
        year: 1950,
        title: '6.25 전쟁 발발',
        description: "북한이 남한을 침공하면서 우리 민족의 가장 큰 비극인 6.25 전쟁이 시작되었어요. 3년간의 전쟁으로 온 국토가 폐허가 되고 수많은 사람들이 소중한 가족과 터전을 잃었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korean_War_Montage_2.png/1280px-Korean_War_Montage_2.png",
        youtubeId: "Vd5n_2j2pG0", // 관련 유튜브 영상
        important: true
    },
    {
        type: 'event',
        year: 1952,
        title: '발췌개헌 (간선제→직선제)',
        description: "6.25 전쟁 중 이승만 대통령이 국회의원들이 뽑던 대통령을 국민이 직접 뽑는 방식으로 바꾸기 위해 진행한 헌법 개정이에요. 전쟁의 혼란을 틈타 대통령이 계속 권력을 잡으려는 의도도 있었어요.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/%EB%B0%9C%EC%B6%94%EA%B0%9C%ED%97%8C_%EC%B0%B8%EC%84%B1_%ED%91%9C%EA%B2%B0_1952.jpg", // 발췌개헌 관련 이미지
        youtubeId: "W9t2f5G_w-A", // 발췌개헌 관련 유튜브 (예시, 실제 영상 찾아야 함)
        important: false
    },
    {
        type: 'event',
        year: 1954,
        title: '사사오입 개헌 (초대 대통령 중임 제한 철폐)',
        description: "이승만 대통령이 영원히 대통령을 하고 싶어서, '초대 대통령만 두 번 넘게 할 수 있도록' 헌법을 바꾼 사건이에요. 수학 계산을 엉터리로 하여 억지로 통과시켜서 '사사오입'이라는 이름이 붙었어요.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/%EC%82%AC%EC%82%AC%EC%98%A4%EC%9E%85_%EA%B0%9C%ED%97%8C.jpg", // 사사오입 개헌 관련 이미지
        youtubeId: "sX1_n8Y9f-g", // 사사오입 개헌 관련 유튜브 (예시, 실제 영상 찾아야 함)
        important: true
    },
    {
        type: 'event',
        year: 1956,
        title: '진보당 사건',
        description: "이승만 정권에 반대하던 조봉암 선생님이 만든 진보당을 정부에서 간첩과 연결되었다고 몰아세워 해산시키고 조봉암 선생님을 처형한 사건이에요. 이승만 정권의 독재가 심해지던 시기였어요.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/%EC%A7%84%EB%B3%B4%EB%8B%B9_%EC%82%AC%EA%B1%B4.jpg", // 진보당 사건 이미지
        youtubeId: "Z-1qT1Z3z1A", // 진보당 사건 유튜브 (예시)
        important: false
    },
    {
        type: 'era',
        title: '민주주의의 불꽃, 4.19 혁명 (1960)'
    },
    {
        type: 'eventCluster', // 이야기 묶음
        clusterTitle: '4.19 혁명, 민주주의를 지키다',
        mainEvent: {
            year: 1960,
            title: '4.19 혁명',
            description: "이승만 정부의 3.15 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. 시민의 힘으로 잘못된 정치를 바로잡을 수 있다는 것을 보여준 위대한 사건입니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg/1280px-1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg",
            youtubeId: "QzLbfA4E_38", // EBS 4.19 혁명 영상
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1960,
                title: '3.15 부정선거',
                description: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요. 이에 국민들의 분노가 커졌답니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/3.15%EC%9D%BC_%EB%A7%88%EC%82%B0%EC%9D%98%EA%B1%B0.jpg", // 3.15 부정선거 관련 이미지
                youtubeId: "1-y6yT4nB-c" // 3.15 부정선거 관련 유튜브
            },
            {
                relation: '결과',
                year: 1960,
                title: '이승만 대통령 하야',
                description: "4.19 혁명의 거센 물결에 이승만 대통령이 결국 자리에서 물러났어요. 국민들의 힘으로 독재 정권이 무너진 역사적인 순간입니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Syngman_Rhee_announces_his_resignation.jpg", // 이승만 하야 이미지
                youtubeId: "6a-A_h3z-A8" // 이승만 대통령 하야 관련 뉴스
            }
        ]
    },
    {
        type: 'event',
        year: 1960,
        title: '허정 과도정부와 내각 책임제 개헌',
        description: "이승만 대통령이 물러난 후, 허정 과도정부가 임시로 나라를 다스렸어요. 이때 대통령보다는 총리가 중심이 되어 나라를 이끄는 '내각 책임제'로 헌법을 바꾸었답니다. 우리나라 역사상 처음이자 마지막이었어요.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Heo_Jeong_Cabinet.jpg/1280px-Heo_Jeong_Cabinet.jpg", // 허정 과도정부 이미지
        youtubeId: "c2t5p5j9hC8", // 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'era',
        title: '군사 정권과 경제 성장 (1961~1979)'
    },
    {
        type: 'eventCluster', // 이야기 묶음
        clusterTitle: '5.16 군사 쿠데타와 박정희 정권의 시작',
        mainEvent: {
            year: 1961,
            title: '5.16 군사 쿠데타',
            description: "박정희 장군이 군인들을 이끌고 정부를 빼앗은 사건이에요. 혼란스러운 상황을 바로잡는다는 명분으로 시작되었지만, 민주주의에는 큰 상처를 남겼습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Park_Chung-hee_and_the_leaders_of_the_May_16_coup.jpg/1280px-Park_Chung-hee_and_the_leaders_of_the_May_16_coup.jpg",
            youtubeId: "f-S5yT1aK9w", // 5.16 쿠데타 관련 유튜브
            important: true
        },
        relatedEvents: [
            {
                relation: '결과',
                year: 1961,
                title: '박정희 군정 시작',
                description: "5.16 쿠데타 이후 박정희 장군이 국가재건최고회의 의장이 되어 2년간 나라를 다스리는 군사 정치가 시작되었어요. 이 기간 동안 경제 개발 계획이 세워지기 시작합니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Park_Chung-hee_in_uniform.jpg/1280px-Park_Chung-hee_in_uniform.jpg",
                youtubeId: "U_7s7k2lX3A" // 박정희 군정 관련 유튜브 (예시)
            }
        ]
    },
    {
        type: 'event',
        year: 1962,
        title: '5차 개헌 (대통령 직선제 부활)',
        description: "군정을 끝내고 다시 민간인에게 정권을 넘겨주겠다는 약속을 했지만, 박정희 장군 스스로 민간인이 되어 대통령 선거에 나오기 위해 헌법을 바꾼 사건이에요. 이때부터 다시 대통령을 국민이 직접 뽑게 되었어요.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/1962%EB%85%84_%EC%9E%84%EC%8B%9C%ED%97%8C%EB%B2%95_%EA%B3%B5%ED%8F%AC.jpg", // 5차 개헌 관련 이미지
        youtubeId: "V_0a9_b1c2D", // 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'event',
        year: 1965,
        title: '한일 국교 정상화',
        description: "우리나라와 일본이 외교 관계를 다시 맺은 사건이에요. 경제 발전을 위해 일본의 도움을 받는다는 이유였지만, 일본에게 식민 지배에 대한 제대로 된 사과를 받지 못했다는 비판도 많았습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Korea-Japan_Treaty_Signing.jpg/1280px-Korea-Japan_Treaty_Signing.jpg",
        youtubeId: "J8t3f0G4h5I", // 한일 수교 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'event',
        year: 1965,
        title: '베트남 파병 시작',
        description: "미국을 돕기 위해 우리나라 군인들이 베트남 전쟁에 참여한 사건이에요. 많은 국군이 희생되었지만, 이로 인해 경제 발전 자금을 얻기도 했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ROK_troops_in_Vietnam.jpg/1280px-ROK_troops_in_Vietnam.jpg",
        youtubeId: "K1p0q7r8s9T", // 베트남 파병 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'eventCluster', // 이야기 묶음
        clusterTitle: '3선 개헌과 유신 헌법, 독재 심화',
        mainEvent: {
            year: 1972,
            title: '유신 헌법 선포',
            description: "박정희 대통령이 오랫동안 대통령을 하기 위해 만든 아주 강력한 헌법이에요. 국민의 자유를 제한하고 대통령에게 엄청난 힘을 주어 민주주의가 크게 후퇴했습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Yushin_Constitution.jpg/1280px-Yushin_Constitution.jpg",
            youtubeId: "4Rz_b5t0y-U", // 유신헌법 관련 유튜브
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1969,
                title: '3선 개헌',
                description: "박정희 대통령이 세 번까지 대통령을 할 수 있도록 헌법을 바꾼 사건이에요. 이미 두 번 대통령을 했던 박정희 대통령이 계속 권력을 잡으려는 시도였어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Park_Chung-hee_after_1969_constitutional_amendment.jpg/1280px-Park_Chung-hee_after_1969_constitutional_amendment.jpg", // 3선 개헌 관련 이미지
                youtubeId: "M2n_z9x0w-Q" // 3선 개헌 관련 유튜브 (예시)
            },
            {
                relation: '계기',
                year: 1972,
                title: '7.4 남북 공동 성명',
                description: "남한과 북한이 통일을 위해 함께 노력하자는 약속을 한 것이에요. 박정희 대통령은 이를 이용해 '통일을 위해 강력한 힘이 필요하다'며 유신 헌법을 만들었어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/7.4_South-North_Joint_Statement.jpg/1280px-7.4_South-North_Joint_Statement.jpg", // 7.4 남북 공동 성명 이미지
                youtubeId: "4A3C2B1D0E1" // 7.4 남북 공동 성명 관련 유튜브 (예시)
            }
        ]
    },
    {
        type: 'event',
        year: 1979,
        title: 'YH 무역 사건 & 부마 민주 항쟁',
        description: "YH 무역 회사 노동자들이 부당 해고에 맞서 농성을 벌이고, 이 농성을 진압하는 과정에서 시위가 번져 부산과 마산 지역에서 독재에 반대하는 큰 시위가 일어났어요.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Y_H_%EB%AC%B4%EC%97%AD_%EC%82%AC%EA%B1%B4.jpg/1280px-Y_H_%EB%AC%B4%EC%97%AD_%EC%82%AC%EA%B1%B4.jpg", // YH 무역 사건 이미지
        youtubeId: "V2w3e4r5t6y", // 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'eventCluster',
        clusterTitle: '10.26 사태와 새로운 독재의 시작',
        mainEvent: {
            year: 1979,
            title: '10.26 사태 (박정희 대통령 사망)',
            description: "오랫동안 나라를 다스리던 박정희 대통령이 김재규 중앙정보부장의 총에 맞아 갑자기 돌아가신 사건이에요. 이 사건으로 유신 독재 시대가 끝났지만, 또 다른 혼란의 시작이기도 했습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/President_Park_Chung-hee%27s_state_funeral.jpg/1280px-President_Park_Chung-hee%27s_state_funeral.jpg",
            youtubeId: "QzLbfA4E_38", // 10.26 사태 관련 유튜브 (박정희 사망)
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1979,
                title: '유신 독재의 심화',
                description: "박정희 대통령의 유신 독재가 심해지면서 국민들의 불만이 매우 커져있던 상황이었어요. YH 무역 사건과 부마 항쟁이 대표적인 예시예요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/President_Park_Chung-hee%27s_inauguration_in_1972.jpg/1280px-President_Park_Chung-hee%27s_inauguration_in_1972.jpg", // 유신 독재 심화 이미지 (예시)
                youtubeId: "W2X3Y4Z5A6B" // 관련 유튜브 (예시)
            },
            {
                relation: '결과',
                year: 1979,
                title: '12.12 군사 쿠데타',
                description: "10.26 사태로 혼란스러운 틈을 타, 군인 전두환을 중심으로 한 '신군부' 세력이 군대를 동원해 다시 권력을 빼앗은 사건이에요. 또 다른 독재가 시작될 징조였습니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chun_Doo-hwan_and_military_officers_in_1979.jpg/1280px-Chun_Doo-hwan_and_military_officers_in_1979.jpg", // 12.12 사태 이미지
                youtubeId: "jGJVvBH0eqk" // 12.12 사태 관련 유튜브 (제공된 영상)
            }
        ]
    },
    {
        type: 'era',
        title: '광주와 6월, 민주주의를 외치다 (1980~1987)'
    },
    {
        type: 'eventCluster',
        clusterTitle: '5.18 민주화 운동, 희생으로 피운 민주주의',
        mainEvent: {
            year: 1980,
            title: '5.18 민주화 운동',
            description: "12.12 군사 쿠데타로 권력을 잡은 전두환 신군부가 민주화를 외치는 사람들을 탄압하자, 광주 시민과 학생들이 '민주주의를 지키자!'며 맞서 싸웠던 운동이에요. 많은 희생이 있었지만, 우리나라 민주주의 발전에 큰 영향을 주었습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/May_18_Democratization_Movement_archives_Man_and_woman_on_the_truck.jpg/1280px-May_18_Democratization_Movement_archives_Man_and_woman_on_the_truck.jpg",
            youtubeId: "JfcJDb-7GN0", // 5.18 민주화 운동 관련 유튜브
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1979,
                title: '12.12 군사 쿠데타',
                description: "10.26 사태 후 혼란을 틈타 전두환을 중심으로 한 신군부가 군사력을 이용해 권력을 잡았어요. 이는 민주주의를 다시 억압하려는 움직임이었죠.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chun_Doo-hwan_and_military_officers_in_1979.jpg/1280px-Chun_Doo-hwan_and_military_officers_in_1979.jpg",
                youtubeId: "jGJVvBH0eqk"
            },
            {
                relation: '결과',
                year: 1980,
                title: '전두환 정권 출범',
                description: "5.18 민주화 운동을 무력으로 진압하고, 전두환이 7년 임기의 대통령으로 취임하며 새로운 군사 독재 정권이 시작되었어요. 하지만 국민들의 민주화 열망은 식지 않았습니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/President_Chun_Doo-hwan_inauguration_1980.jpg/1280px-President_Chun_Doo-hwan_inauguration_1980.jpg", // 전두환 대통령 취임 이미지
                youtubeId: "QzLbfA4E_38" // 관련 유튜브 (예시)
            }
        ]
    },
    {
        type: 'eventCluster',
        clusterTitle: '6월 민주 항쟁, 대통령 직선제를 이끌어내다',
        mainEvent: {
            year: 1987,
            title: '6월 민주 항쟁',
            description: "'대통령을 우리 손으로 직접 뽑게 해달라!'는 국민들의 뜨거운 함성이 전국적으로 울려 퍼졌어요. 이 항쟁의 결과로 지금처럼 대통령을 직접 뽑는 '직선제'가 이루어졌습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Korea-Seoul-June_Democracy_Movement_1987.6.10-2.jpg/1280px-Korea-Seoul-June_Democracy_Movement_1987.6.10-2.jpg",
            youtubeId: "mE8aA5a2a7Q", // 6월 민주 항쟁 관련 유튜브
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1987,
                title: '박종철 고문치사 사건',
                description: "경찰 조사를 받던 대학생 박종철 군이 고문으로 사망한 사건이에요. 정부가 이를 숨기려 하자, 국민들의 분노가 폭발하는 직접적인 계기가 되었어요.",
                image: "https://upload.wikimedia.org/wikipedia/ko/thumb/3/35/%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A8%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg/1280px-%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A8%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg",
                youtubeId: "WnNgpQ-o-yM" // 박종철 고문치사 사건 유튜브
            },
            {
                relation: '원인',
                year: 1987,
                title: '4.13 호헌 조치',
                description: "전두환 대통령이 국민들의 직선제 요구를 무시하고 현재의 헌법을 계속 지키겠다고 발표한 것이에요. 이는 민주화를 원하는 국민들의 분노를 더욱 키웠어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Chun_Doo-hwan_announces_4.13_Hoheon_Jochi.jpg/1280px-Chun_Doo-hwan_announces_4.13_Hoheon_Jochi.jpg", // 4.13 호헌 조치 이미지
                youtubeId: "K1s2d3f4g5h" // 관련 유튜브 (예시)
            },
            {
                relation: '결과',
                year: 1987,
                title: '6.29 민주화 선언',
                description: "6월 민주 항쟁의 결과로, 노태우 대표가 국민들의 요구를 받아들여 대통령을 국민이 직접 뽑는 직선제를 실시하겠다고 발표했어요. 우리나라 민주주의의 큰 승리였습니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Roh_Tae-woo_announces_6.29_Declaration.jpg/1280px-Roh_Tae-woo_announces_6.29_Declaration.jpg", // 6.29 선언 이미지
                youtubeId: "L0m1n2o3p4q" // 6.29 선언 관련 유튜브 (예시)
            },
            {
                relation: '결과',
                year: 1987,
                title: '9차 개헌 (5년 단임제 직선제)',
                description: "6.29 선언을 바탕으로 국민이 직접 5년 임기의 대통령을 한 번만 뽑는 지금의 헌법으로 바뀌었어요. 이 헌법은 우리나라 민주주의 역사의 중요한 전환점이 되었답니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Republic_of_Korea_Constitution_1987.jpg/1280px-Republic_of_Korea_Constitution_1987.jpg", // 9차 개헌 이미지
                youtubeId: "P8q9r0s1t2u" // 관련 유튜브 (예시)
            }
        ]
    },
    {
        type: 'era',
        title: '민주화 이후의 발전 (1988~현재)'
    },
    {
        type: 'event',
        year: 1988,
        title: '서울 올림픽 개최',
        description: "우리나라의 발전된 모습을 전 세계에 알린 성공적인 올림픽이었어요. '손에 손잡고'라는 주제가처럼 동서양의 화합을 이끌어내며 세계 평화에 기여했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Seoul_Olympics_Opening_Ceremony.jpg/1280px-Seoul_Olympics_Opening_Ceremony.jpg",
        youtubeId: "0oPCmrj2s74", // 서울 올림픽 관련 유튜브
        important: false
    },
    {
        type: 'event',
        year: 1993,
        title: '김영삼 문민정부 출범',
        description: "군인 출신이 아닌, 국민이 직접 뽑은 민간인 대통령이 이끄는 정부가 처음으로 들어섰어요. 금융 실명제 실시 등 많은 개혁을 추진했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/President_Kim_Young-sam_inauguration.jpg/1280px-President_Kim_Young-sam_inauguration.jpg",
        youtubeId: "R5t6y7u8i9o", // 김영삼 정부 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'event',
        year: 1998,
        title: '김대중 국민의 정부 출범',
        description: "외환 위기라는 어려운 상황에서 김대중 대통령이 당선되어 나라를 이끌었어요. 금모으기 운동 등으로 위기를 극복하고 남북 관계 개선을 위한 노력도 많이 했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/President_Kim_Dae-jung_inauguration.jpg/1280px-President_Kim_Dae-jung_inauguration.jpg",
        youtubeId: "U2i3o4p5l6k", // 김대중 정부 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'event',
        year: 2003,
        title: '노무현 참여정부 출범',
        description: "국민과 소통하며 '참여 민주주의'를 강조한 노무현 대통령의 정부가 시작되었어요. 권위주의를 없애고 지역 균형 발전을 위해 노력했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/President_Roh_Moo-hyun_inauguration.jpg/1280px-President_Roh_Moo-hyun_inauguration.jpg",
        youtubeId: "X0y1z2a3b4c", // 노무현 정부 관련 유튜브 (예시)
        important: false
    },
    {
        type: 'event',
        year: 2017,
        title: '문재인 정부 출범',
        description: "촛불 혁명 이후 문재인 대통령이 취임하여, 국민의 뜻을 받들어 나라다운 나라를 만들겠다는 약속과 함께 새로운 정부가 시작되었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/President_Moon_Jae-in_inauguration_2017.jpg/1280px-President_Moon_Jae-in_inauguration_2017.jpg",
        youtubeId: "Z9y8x7w6v5u", // 문재인 정부 관련 유튜브 (예시)
        important: false
    }
];
