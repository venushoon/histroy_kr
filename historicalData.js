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
        image: "https://i.imgur.com/3d0yM9A.jpeg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0005122",
        important: true
    },
    {
        type: 'event',
        year: 1948,
        title: '대한민국 정부 수립',
        description: "남한의 총선거를 통해 이승만을 초대 대통령으로 하는 대한민국 정부가 공식적으로 세워졌어요. 이로써 우리나라는 자유 민주주의 국가로서 첫발을 내딛게 되었습니다.",
        image: "https://i.imgur.com/8p3x8y8.jpeg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0015028",
        important: false
    },
    {
        type: 'era',
        title: '6.25 전쟁과 민주주의를 향한 열망 (1950~1987)'
    },
    {
        type: 'event',
        year: 1950,
        title: '6.25 전쟁 발발',
        description: "북한이 남한을 침공하면서 우리 민족의 가장 큰 비극인 6.25 전쟁이 시작되었어요. 3년간의 전쟁으로 온 국토가 폐허가 되고 수많은 사람들이 소중한 가족과 터전을 잃었습니다.",
        image: "https://i.imgur.com/8Q5gE7e.jpeg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0033470",
        important: true
    },
    {
        type: 'eventCluster',
        clusterTitle: '4.19 혁명, 민주주의의 불꽃을 피우다',
        mainEvent: {
            year: 1960,
            title: '4.19 혁명',
            description: "3.15 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. 시민의 힘으로 잘못된 정치를 바로잡을 수 있다는 것을 보여준 위대한 사건입니다.",
            image: "https://i.imgur.com/x0p7H4e.jpeg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0026131",
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1960,
                title: '3.15 부정선거',
                description: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요.",
                image: "https://i.imgur.com/PZeATc2.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0027142"
            },
            {
                relation: '결과',
                year: 1960,
                title: '이승만 대통령 하야',
                description: "4.19 혁명으로 보여준 국민들의 거센 저항에 결국 이승만 대통령이 자리에서 스스로 내려온 사건이에요.",
                image: "https://i.imgur.com/w9z48tS.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0045163"
            }
        ]
    },
    {
        type: 'event',
        year: 1961,
        title: '5.16 군사정변',
        description: "박정희 장군이 군인들을 이끌고 정부를 빼앗은 사건이에요. 혼란스러운 상황을 바로잡는다는 명분으로 시작되었지만, 민주주의에는 큰 상처를 남겼습니다.",
        image: "https://i.imgur.com/fA71J3B.jpeg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0031835",
        important: false
    },
    {
        type: 'eventCluster',
        clusterTitle: '유신 헌법과 길어진 독재',
        mainEvent: {
            year: 1972,
            title: '유신 헌법 선포',
            description: "박정희 대통령이 오랫동안 대통령을 하기 위해 만든 아주 강력한 헌법이에요. 국민의 자유를 제한하고 대통령에게 엄청난 힘을 주어 민주주의가 크게 후퇴했습니다.",
            image: "https://i.imgur.com/dK3fW1R.jpeg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0041846",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1972,
                title: '7.4 남북 공동 성명',
                description: "남한과 북한이 통일을 위해 함께 노력하자는 약속을 한 것이에요. 하지만 박정희 정부는 이를 독재를 강화하는 데 이용하기도 했어요.",
                image: "https://i.imgur.com/8E5q9kU.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0058569"
            }
        ]
    },
    {
        type: 'eventCluster',
        clusterTitle: '신군부의 등장과 5.18 민주화 운동',
        mainEvent: {
            year: 1980,
            title: '5.18 민주화 운동',
            description: "12.12 군사 쿠데타로 권력을 잡은 전두환 신군부가 민주화를 외치는 사람들을 탄압하자, 광주 시민과 학생들이 맞서 싸웠던 운동이에요. 많은 희생이 있었지만 우리나라 민주주의 발전의 소중한 밑거름이 되었습니다.",
            image: "https://i.imgur.com/2oE0K0b.jpeg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0031835",
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1979,
                title: '12.12 군사 반란',
                description: "박정희 대통령 서거 후 혼란을 틈타 전두환을 중심으로 한 신군부가 군사력을 이용해 권력을 잡았어요. 이는 민주주의를 다시 억압하려는 움직임이었죠.",
                image: "https://i.imgur.com/pYj3sV6.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0033181"
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
            image: "https://i.imgur.com/qL4Y0jT.jpeg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0038932",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1987,
                title: '박종철 고문치사 사건',
                description: "경찰 조사를 받던 대학생 박종철 군이 고문으로 사망한 사건이에요. 정부가 이를 숨기려 하자, 국민들의 분노가 폭발하는 직접적인 계기가 되었어요.",
                image: "https://i.imgur.com/OqG3j1y.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0021303"
            },
            {
                relation: '결과',
                year: 1987,
                title: '대통령 직선제 개헌',
                description: "6월 민주 항쟁의 결과로, 국민이 직접 5년 임기의 대통령을 한 번만 뽑는 지금의 헌법으로 바뀌었어요. 우리나라 민주주의 역사의 중요한 전환점이 되었답니다.",
                image: "https://i.imgur.com/1B9t6gJ.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0068019"
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
        image: "https://i.imgur.com/s6k1A1R.jpeg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0027370",
        important: false
    }
];
