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
        type: 'era',
        title: '6.25 전쟁과 민주주의를 향한 열망 (1950~1987)'
    },
    {
        type: 'event', // 단일 사건
        year: 1950,
        title: '6.25 전쟁 발발',
        description: "북한이 남한을 침공하면서 우리 민족의 가장 큰 비극인 6.25 전쟁이 시작되었어요. 3년간의 전쟁으로 온 국토가 폐허가 되고 수많은 사람들이 소중한 가족과 터전을 잃었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korean_War_Montage_2.png/1280px-Korean_War_Montage_2.png",
        youtubeId: "Vd5n_2j2pG0",
        important: true
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
                description: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/3.15%EC%9D%BC_%EB%A7%88%EC%82%B0%EC%9D%98%EA%B1%B0.jpg",
                youtubeId: "1-y6yT4nB-c"
            },
            {
                relation: '결과',
                year: 1960,
                title: '이승만 대통령 하야',
                description: "4.19 혁명으로 보여준 국민들의 거센 저항에 결국 이승만 대통령이 '국민이 원한다면 물러나겠다'며 대통령 자리에서 스스로 내려온 사건이에요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Syngman_Rhee_announces_his_resignation.jpg",
                youtubeId: "6a-A_h3z-A8"
            }
        ]
    },
    {
        type: 'eventCluster', // 이야기 묶음
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
                description: "경찰 조사를 받던 대학생 박종철 군이 고문으로 사망한 사건이에요. 정부가 이 사실을 숨기려 하자, 진실을 밝히려는 노력들이 이어지며 6월 민주 항쟁의 직접적인 계기가 되었어요.",
                image: "https://upload.wikimedia.org/wikipedia/ko/thumb/3/35/%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A8%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg/1280px-%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A9%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg",
                youtubeId: "WnNgpQ-o-yM"
            }
        ]
    }
];
