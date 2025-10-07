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
                title: '대통령 직선제 개
