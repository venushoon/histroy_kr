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
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Korean_independence_celebration_in_1945.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0059769",
        important: true
    },
    {
        type: 'event',
        year: 1948,
        title: '대한민국 정부 수립',
        description: "남한의 총선거를 통해 이승만을 초대 대통령으로 하는 대한민국 정부가 공식적으로 세워졌어요. 이로써 우리나라는 자유 민주주의 국가로서 첫발을 내딛게 되었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/ROK_Government_establishment_ceremony_1948.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0015002",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korean_War_Montage_2.png/1280px-Korean_War_Montage_2.png",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0042143",
        important: true
    },
    {
        type: 'eventCluster',
        clusterTitle: '4.19 혁명, 민주주의의 불꽃을 피우다',
        mainEvent: {
            year: 1960,
            title: '4.19 혁명',
            description: "3.15 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. 시민의 힘으로 잘못된 정치를 바로잡을 수 있다는 것을 보여준 위대한 사건입니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0025902",
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1960,
                title: '3.15 부정선거',
                description: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/3.15%EC%9D%BC_%EB%A7%88%EC%82%B0%EC%9D%98%EA%B1%B0.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0026771"
            },
            {
                relation: '결과',
                year: 1960,
                title: '이승만 대통령 하야',
                description: "4.19 혁명으로 보여준 국민들의 거센 저항에 결국 이승만 대통령이 자리에서 스스로 내려온 사건이에요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Syngman_Rhee_announces_his_resignation.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0044938"
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
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Korea-Seoul-June_Democracy_Movement_1987.6.10-2.jpg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0068343",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1987,
                title: '박종철 고문치사 사건',
                description: "경찰 조사를 받던 대학생 박종철 군이 고문으로 사망한 사건이에요. 정부가 이를 숨기려 하자, 진실을 밝히려는 노력들이 이어지며 항쟁의 직접적인 계기가 되었어요.",
                image: "https://upload.wikimedia.org/wikipedia/ko/3/35/%EB%B0%95%EC%A2%85%EC%B2%A0%EC%94%A8_%EA%B3%A0%EB%AC%B8%EC%B9%98%EC%82%AC%EC%82%AC%EA%B1%B4_%EB%8B%A9%EC%8B%A0%EB%AC%B8%EB%B3%B4%EB%8F%84_%EC%82%AC%EC%A7%84.jpeg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0068065"
            },
            {
                relation: '결과',
                year: 1987,
                title: '대통령 직선제 개헌',
                description: "6월 민주 항쟁의 결과로, 국민이 직접 5년 임기의 대통령을 한 번만 뽑는 지금의 헌법으로 바뀌었어요. 우리나라 민주주의 역사의 중요한 전환점이 되었답니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Republic_of_Korea_Constitution_1987.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0075869"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Seoul_Olympics_Opening_Ceremony.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0028046",
        important: false
    },
    {
        type: 'event',
        year: 1993,
        title: '김영삼 문민정부 출범',
        description: "군인 출신이 아닌, 국민이 직접 뽑은 민간인 대통령이 이끄는 정부가 처음으로 들어섰어요. 금융실명제, 역사 바로 세우기 등 많은 개혁을 추진했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kim_Young-sam_inauguration_ceremony_-_25_February_1993.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0080723",
        important: true
    },
    {
        type: 'event',
        year: 1997,
        title: 'IMF 외환위기',
        description: "우리나라에 달러(외국 돈)가 부족해져 국제통화기금(IMF)에 구제금융을 요청한 경제 위기 상황이에요. 많은 기업이 문을 닫고, 어려운 시기를 겪었지만 '금 모으기 운동' 등으로 극복해냈습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Seoul_SK-building_1998.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0068313",
        important: false
    },
    {
        type: 'eventCluster',
        clusterTitle: '김대중 정부와 남북 화해의 시대',
        mainEvent: {
            year: 2000,
            title: '최초의 남북정상회담',
            description: "김대중 대통령이 북한 평양을 방문하여 김정일 국방위원장과 만나 분단 이후 처음으로 남북 정상이 손을 맞잡은 역사적인 사건이에요. 이 회담으로 6.15 남북 공동 선언이 발표되었어요.",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Kim_Dae-jung_and_Kim_Jong-il_shaking_hands_at_the_first_inter-Korean_summit.jpg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0070317",
            important: true
        },
        relatedEvents: [
            {
                relation: '계기',
                year: 1998,
                title: '국민의 정부 출범',
                description: "IMF 외환 위기라는 어려운 상황 속에서, 평화적인 정권 교체로 김대중 대통령의 '국민의 정부'가 출범했어요. 햇볕정책을 통해 남북 화해를 적극적으로 추진했습니다.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Kim_Dae-jung_takes_the_oath_of_office_on_25_February_1998.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0078635"
            },
            {
                relation: '결과',
                year: 2000,
                title: '노벨 평화상 수상',
                description: "남북정상회담을 성공적으로 이끌어 한반도의 긴장을 완화하고 평화에 기여한 공로를 인정받아, 김대중 대통령이 한국인 최초로 노벨 평화상을 수상했어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Kim_Dae-jung_Nobel_Peace_Prize.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0008882"
            }
        ]
    },
    {
        type: 'event',
        year: 2002,
        title: '한일 월드컵 개최',
        description: "우리나라와 일본이 함께 개최한 세계적인 축구 축제예요. '대~한민국!'을 외치던 붉은악마의 응원과 4강 신화는 모든 국민에게 큰 감동과 자신감을 주었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/2002_FIFA_World_Cup_South_Korea_national_football_team.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0068367",
        important: false
    },
    {
        type: 'event',
        year: 2003,
        title: '노무현 참여정부 출범',
        description: "국민과의 소통을 중요하게 생각했던 노무현 대통령의 '참여정부'가 출범했어요. 권위주의를 없애고, 국민들이 정치에 직접 참여하는 문화를 만들기 위해 노력했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/07/President_Roh_Moo-hyun_inauguration.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0080713",
        important: false
    },
    {
        type: 'event',
        year: 2017,
        title: '박근혜 대통령 탄핵',
        description: "국민이 맡긴 대통령의 권한을 잘못 사용한 책임을 물어, 헌법재판소의 결정으로 박근혜 대통령이 임기 중에 물러나게 된 사건이에요. 촛불집회를 통해 보여준 국민의 힘으로 민주주의를 지켜냈습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Anti-Park_Geun-hye_protest_on_2016-11-26_11.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0080714",
        important: true
    },
    {
        type: 'event',
        year: 2022,
        title: '윤석열 정부 출범',
        description: "20대 대통령 선거를 통해 윤석열 대통령이 당선되어 새로운 정부가 출범했어요. 공정과 상식을 바탕으로 나라를 이끌어가겠다고 약속했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Inauguration_ceremony_of_President_Yoon_Suk-yeol_20.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0056565",
        important: false
    }
];
