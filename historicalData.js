const timelineData = [
    {
        type: 'era',
        title: '근대 사회의 시작 (1863~1910)'
    },
    {
        type: 'event',
        year: 1863,
        title: '흥선대원군 집권',
        description: "어린 고종 임금을 대신해 아버지 흥선대원군이 나라를 다스리기 시작했어요. 강력한 정책으로 왕의 권위를 높이고, 외세의 침략에 맞서 나라의 문을 굳게 지키려 했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Heungseon_Daewongun.jpg/1024px-Heungseon_Daewongun.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0065830",
        important: true
    },
    {
        type: 'event',
        year: 1876,
        title: '강화도 조약',
        description: "일본의 무력 시위에 의해 맺어진 우리나라 최초의 근대적 조약이지만, 우리에게 불리한 내용이 많았어요. 이 조약을 계기로 나라의 문을 열고 외국과 교류를 시작했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Korea-Japan_Treaty_of_1876-page1.jpg/1024px-Korea-Japan_Treaty_of_1876-page1.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0001508",
        important: false
    },
    {
        type: 'event',
        year: 1894,
        title: '동학농민운동',
        description: "부패한 관리와 외세에 맞서 농민들이 스스로 일어났어요. '사람이 곧 하늘'이라는 평등 사상을 바탕으로 더 나은 세상을 만들고자 했던 중요한 자주적 개혁 운동이었습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Donghak_Peasant_Revolution_monument_in_Jeongeup.jpg/1280px-Donghak_Peasant_Revolution_monument_in_Jeongeup.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0016865",
        important: true
    },
    {
        type: 'event',
        year: 1897,
        title: '대한제국 선포',
        description: "고종 임금이 우리나라가 다른 나라와 동등한 자주독립 국가임을 전 세계에 알리기 위해 나라 이름을 '대한제국'으로 바꾸고 스스로 황제의 자리에 올랐습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hwanggungu.JPG/1280px-Hwanggungu.JPG",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0015187",
        important: true
    },
    {
        type: 'era',
        title: '일제강점기 (1910~1945)'
    },
    {
        type: 'eventCluster',
        clusterTitle: '전 국민의 외침, 3.1 운동',
        mainEvent: {
            year: 1919,
            title: '3.1 운동',
            description: "일본의 식민 지배에 맞서 전 국민이 '대한 독립 만세'를 외친 비폭력 저항 운동이에요. 이 운동을 계기로 대한민국 임시정부가 세워지는 등 독립운동이 더욱 체계화되었습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/March_1st_movement_demonstration.jpg/1280px-March_1st_movement_demonstration.jpg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0026772",
            important: true
        },
        relatedEvents: [
            {
                relation: '결과',
                year: 1919,
                title: '대한민국 임시정부 수립',
                description: "3.1 운동 이후, 독립운동을 더욱 체계적으로 이끌기 위해 중국 상하이에 우리나라의 정부를 세웠어요.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Provisional_Government_of_the_Republic_of_Korea_Museum_in_Chongqing.jpg/1280px-Provisional_Government_of_the_Republic_of_Korea_Museum_in_Chongqing.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0015017"
            }
        ]
    },
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
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0005138",
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
            }
        ]
    },
    {
        type: 'eventCluster',
        clusterTitle: '광주의 아픔, 민주주의의 횃불이 되다',
        mainEvent: {
            year: 1980,
            title: '5.18 광주민주화운동',
            description: "전두환 신군부의 쿠데타와 비상계엄 확대에 저항하여 광주 시민들이 민주주의를 지키기 위해 일어났어요. 수많은 희생이 있었지만, 이 용감한 저항은 훗날 6월 민주 항쟁의 밑거름이 되었습니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gwangju_Uprising_in_1980.jpg/1280px-Gwangju_Uprising_in_1980.jpg",
            encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0038496",
            important: true
        },
        relatedEvents: [
            {
                relation: '원인',
                year: 1979,
                title: '12.12 군사 반란',
                description: "박정희 대통령 서거 이후, 전두환을 중심으로 한 신군부가 군사 반란을 일으켜 권력을 장악한 사건이에요.",
                image: "https://upload.wikimedia.org/wikipedia/ko/c/c9/1212kudeta.jpg",
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0034018"
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
                encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0021319"
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
        year: 2008,
        title: '이명박 정부 출범',
        description: "CEO 출신 대통령으로 '실용주의'를 내세웠어요. 4대강 정비 사업, G20 정상회의 유치 등을 통해 대한민국의 국제적 위상을 높이고 경제 성장을 위해 노력했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lee_Myung-bak_2012.jpg/1024px-Lee_Myung-bak_2012.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0049213",
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
        year: 2017,
        title: '문재인 정부 출범',
        description: "촛불집회 이후 당선된 대통령으로, 검찰 개혁, 한반도 평화 프로세스 추진 등 사회 곳곳의 문제를 해결하고 '나라다운 나라'를 만들고자 노력했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Moon_Jae-in_in_September_2017.jpg/1024px-Moon_Jae-in_in_September_2017.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0078835",
        important: false
    },
    {
        type: 'event',
        year: 2022,
        title: '윤석열 정부 출범',
        description: "20대 대통령 선거를 통해 윤석열 대통령이 당선되어 새로운 정부가 출범했어요. 공정과 상식을 바탕으로 나라를 이끌어가겠다고 약속했습니다.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Inauguration_ceremony_of_President_Yoon_Suk-yeol_20.jpg",
        encyclopediaUrl: "https://encykorea.aks.ac.kr/Article/E0056565",
        important: false
    },
    {
        type: 'era',
        title: '미래를 향한 대한민국의 도전 (~2025)'
    },
    {
        type: 'event',
        year: '현재',
        title: '세계 속의 대한민국',
        description: "우리는 수많은 역경을 이겨내고 눈부신 발전을 이루었어요. 이제 대한민국은 K-POP, 영화 등 대중문화를 비롯한 다양한 분야에서 세계를 이끌고 있습니다. 2025년을 향해, 우리는 어떤 미래를 만들어갈까요?",
        image: "https://images.unsplash.com/photo-1628126933539-a88deb8e06f1?q=80&w=2532&auto=format&fit=crop",
        encyclopediaUrl: "https://www.kocis.go.kr/koreanet/index.do",
        important: false
    }
];
