const timelineData = [
    {
        type: 'era',
        title: '광복과 대한민국 정부 수립 (1945~1950)'
    },
    {
        type: 'event', // 단일 사건
        year: 1945,
        title: '8.15 광복',
        description: "35년간의 긴 일본의 식민 지배에서 벗어나 우리나라가 독립을 맞이한 기쁜 날이에요. 하지만 이후 미국과 소련의 영향으로 남과 북이 나뉘게 되는 아픔도 시작되었답니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Korean_independence_celebration_in_1945.jpg/1280px-Korean_independence_celebration_in_1945.jpg",
        youtubeId: "h-3k_k6y-M8",
        important: true
    },
    {
        type: 'event',
        year: 1948,
        title: '대한민국 정부 수립',
        description: "남한의 총선거를 통해 이승만을 초대 대통령으로 하는 대한민국 정부가 공식적으로 세워졌어요. 이로써 우리나라는 자유 민주주의 국가로서 첫발을 내딛게 되었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/ROK_Government_establishment_ceremony_1948.jpg/1280px-ROK_Government_establishment_ceremony_1948.jpg",
        youtubeId: "R-yLK-4IkLA",
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
        youtubeId: "Vd5n_2j2pG0",
        important: true
    },
    {
        type: 'era',
        title: '민주주의를 향한 열망 (1960~1987)'
    },
    {
        type: 'eventCluster', // 이야기 묶음
        clusterTitle: '4.19 혁명, 민주주의의 불꽃을 피우다',
        mainEvent: {
            year: 1960,
            title: '4.19 혁명',
            description: "3.15 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. 시민의 힘으로 잘못된 정치를 바로잡을 수 있다는 것을 보여준 위대한 사건입니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg/1280px-1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg",
            youtubeId: "QzLbfA4E_38",
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1960,
                title: '3.15 부정선거',
                description: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요. 이에 국민들의 분노가 커졌답니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/3.15%EC%9D%BC_%EB%A7%88%EC%82%B0%EC%9D%98%EA%B1%B0.jpg",
                youtubeId: "1-y6yT4nB-c"
            },
            {
                relation: '결과',
                year: 1960,
                title: '이승만 대통령 하야',
                description: "4.19 혁명의 거센 물결에 이승만 대통령이 결국 자리에서 물러났어요. 국민들의 힘으로 독재 정권이 무너진 역사적인 순간입니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Syngman_Rhee_announces_his_resignation.jpg",
                youtubeId: "6a-A_h3z-A8"
            }
        ]
    },
    {
        type: 'event',
        year: 1961,
        title: '5.16 군사 쿠데타',
        description: "박정희 장군이 군인들을 이끌고 정부를 빼앗은 사건이에요. 혼란스러운 상황을 바로잡는다는 명분으로 시작되었지만, 민주주의에는 큰 상처를 남겼습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Park_Chung-hee_and_the_leaders_of_the_May_16_coup.jpg/1280px-Park_Chung-hee_and_the_leaders_of_the_May_16_coup.jpg",
        youtubeId: "f-S5yT1aK9w",
        important: true
    },
    {
        type: 'eventCluster',
        clusterTitle: '유신 헌법과 독재 심화',
        mainEvent: {
            year: 1972,
            title: '유신 헌법 선포',
            description: "박정희 대통령이 오랫동안 대통령을 하기 위해 만든 아주 강력한 헌법이에요. 국민의 자유를 제한하고 대통령에게 엄청난 힘을 주어 민주주의가 크게 후퇴했습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Yushin_Constitution.jpg/1280px-Yushin_Constitution.jpg",
            youtubeId: "4Rz_b5t0y-U",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1972,
                title: '7.4 남북 공동 성명',
                description: "남한과 북한이 통일을 위해 함께 노력하자는 약속을 한 것이에요. 박정희 대통령은 이를 이용해 '통일을 위해 강력한 힘이 필요하다'며 유신 헌법을 만들었어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/7.4_South-North_Joint_Statement.jpg/1280px-7.4_South-North_Joint_Statement.jpg",
                youtubeId: "4A3C2B1D0E1"
            },
            {
                relation: '결과',
                year: 1979,
                title: '부마 민주 항쟁',
                description: "YH 무역 회사 노동자들이 부당 해고에 맞서 농성을 벌이고, 이 농성을 진압하는 과정에서 시위가 번져 부산과 마산 지역에서 독재에 반대하는 큰 시위가 일어났어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Y_H_%EB%AC%B4%EC%97%AD_%EC%82%AC%EA%B1%B4.jpg/1280px-Y_H_%EB%AC%B4%EC%97%AD_%EC%82%AC%EA%B1%B4.jpg",
                youtubeId: "V2w3e4r5t6y"
            }
        ]
    },
    {
        type: 'event',
        year: 1979,
        title: '10.26 사태 (박정희 대통령 서거)',
        description: "오랫동안 나라를 다스리던 박정희 대통령이 김재규 중앙정보부장의 총에 맞아 갑자기 돌아가신 사건이에요. 이 사건으로 유신 독재 시대가 끝났지만, 또 다른 혼란의 시작이기도 했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/President_Park_Chung-hee%27s_state_funeral.jpg/1280px-President_Park_Chung-hee%27s_state_funeral.jpg",
        youtubeId: "QzLbfA4E_38",
        important: false
    },
    {
        type: 'eventCluster',
        clusterTitle: '신군부의 등장과 5.18 민주화 운동',
        mainEvent: {
            year: 1980,
            title: '5.18 민주화 운동',
            description: "12.12 군사 쿠데타로 권력을 잡은 전두환 신군부가 민주화를 외치는 사람들을 탄압하자, 광주 시민과 학생들이 '민주주의를 지키자!'며 맞서 싸웠던 운동이에요. 많은 희생이 있었지만, 우리나라 민주주의 발전에 큰 영향을 주었습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/May_18_Democratization_Movement_archives_Man_and_woman_on_the_truck.jpg/1280px-May_18_Democratization_Movement_archives_Man_and_woman_on_the_truck.jpg",
            youtubeId: "JfcJDb-7GN0",
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
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/President_Chun_Doo-hwan_inauguration_1980.jpg/1280px-President_Chun_Doo-hwan_inauguration_1980.jpg",
                youtubeId: "QzLbfA4E_38"
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
            youtubeId: "mE8aA5a2a7Q",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1987,
                title: '박종철 고문치사 사건',
                description: "경찰 조사를 받던 대학생 박종철 군이 고문으로 사망한 사건이에요. 정부가 이를 숨기려 하자, 국민들의 분노가 폭발하는 직접적인 계기가 되었어요.",
                image: "https://upload.wikimedia.org/wikipedia/ko/thumb/3/35/%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A9%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg/1280px-%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A9%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg",
                youtubeId: "WnNgpQ-o-yM"
            },
            {
                relation: '결과',
                year: 1987,
                title: '대통령 직선제 개헌',
                description: "6월 민주 항쟁의 결과로, 국민이 직접 5년 임기의 대통령을 한 번만 뽑는 지금의 헌법으로 바뀌었어요. 이 헌법은 우리나라 민주주의 역사의 중요한 전환점이 되었답니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Republic_of_Korea_Constitution_1987.jpg/1280px-Republic_of_Korea_Constitution_1987.jpg",
                youtubeId: "P8q9r0s1t2u"
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
        youtubeId: "0oPCmrj2s74",
        important: false
    },
    {
        type: 'event',
        year: 1993,
        title: '김영삼 문민정부 출범',
        description: "군인 출신이 아닌, 국민이 직접 뽑은 민간인 대통령이 이끄는 정부가 처음으로 들어섰어요. 금융 실명제 실시 등 많은 개혁을 추진했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/President_Kim_Young-sam_inauguration.jpg/1280px-President_Kim_Young-sam_inauguration.jpg",
        youtubeId: "R5t6y7u8i9o",
        important: false
    },
    {
        type: 'event',
        year: 1998,
        title: '김대중 국민의 정부 출범',
        description: "외환 위기라는 어려운 상황에서 김대중 대통령이 당선되어 나라를 이끌었어요. 금모으기 운동 등으로 위기를 극복하고 남북 관계 개선을 위한 노력도 많이 했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/President_Kim_Dae-jung_inauguration.jpg/1280px-President_Kim_Dae-jung_inauguration.jpg",
        youtubeId: "U2i3o4p5l6k",
        important: false
    },
    {
        type: 'event',
        year: 2003,
        title: '노무현 참여정부 출범',
        description: "국민과 소통하며 '참여 민주주의'를 강조한 노무현 대통령의 정부가 시작되었어요. 권위주의를 없애고 지역 균형 발전을 위해 노력했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/President_Roh_Moo-hyun_inauguration.jpg/1280px-President_Roh_Moo-hyun_inauguration.jpg",
        youtubeId: "X0y1z2a3b4c",
        important: false
    },
    {
        type: 'event',
        year: 2017,
        title: '문재인 정부 출범',
        description: "촛불 혁명 이후 문재인 대통령이 취임하여, 국민의 뜻을 받들어 나라다운 나라를 만들겠다는 약속과 함께 새로운 정부가 시작되었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/President_Moon_Jae-in_inauguration_2017.jpg/1280px-President_Moon_Jae-in_inauguration_2017.jpg",
        youtubeId: "Z9y8x7w6v5u",
        important: false
    }
];
