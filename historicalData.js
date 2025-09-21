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
        image: "https://i.imgur.com/3d0yM9A.jpeg", // 안정적인 URL로 교체
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0005122",
        important: true
    },
    {
        type: 'era',
        title: '민주주의를 향한 열망 (1960~1987)'
    },
    {
        type: 'eventCluster',
        clusterTitle: '4.19 혁명, 민주주의의 불꽃을 피우다',
        mainEvent: {
            year: 1960,
            title: '4.19 혁명',
            description: "3.15 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. 시민의 힘으로 잘못된 정치를 바로잡을 수 있다는 것을 보여준 위대한 사건입니다.",
            image: "https://i.imgur.com/x0p7H4e.jpeg", // 안정적인 URL로 교체
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0026131",
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1960,
                title: '3.15 부정선거',
                description: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요.",
                image: "https://i.imgur.com/PZeATc2.jpeg", // 안정적인 URL로 교체
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0027142"
            },
            {
                relation: '결과',
                year: 1960,
                title: '이승만 대통령 하야',
                description: "4.19 혁명으로 보여준 국민들의 거센 저항에 결국 이승만 대통령이 자리에서 스스로 내려온 사건이에요.",
                image: "https://i.imgur.com/w9z48tS.jpeg", // 안정적인 URL로 교체
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0045163"
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
            image: "https://i.imgur.com/qL4Y0jT.jpeg", // 안정적인 URL로 교체
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0038932",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1987,
                title: '박종철 고문치사 사건',
                description: "경찰 조사를 받던 대학생 박종철 군이 고문으로 사망한 사건이에요. 정부가 이 사실을 숨기려 하자, 진실을 밝히려는 노력들이 이어지며 항쟁의 직접적인 계기가 되었어요.",
                image: "https://i.imgur.com/OqG3j1y.jpeg", // 안정적인 URL로 교체
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0021303"
            },
            {
                relation: '결과',
                year: 1987,
                title: '대통령 직선제 개헌',
                description: "6월 민주 항쟁의 결과로, 국민이 직접 5년 임기의 대통령을 한 번만 뽑는 지금의 헌법으로 바뀌었어요. 우리나라 민주주의 역사의 중요한 전환점이 되었답니다.",
                image: "https://i.imgur.com/1B9t6gJ.jpeg", // 안정적인 URL로 교체
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0068019"
            }
        ]
    }
    // 다른 사건들도 필요에 따라 같은 구조로 추가할 수 있습니다.
];
