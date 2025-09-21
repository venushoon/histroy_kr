const historicalData = {
    "3_1_movement": {
        year: 1919,
        title: "3.1 운동",
        keywords: ["3.1", "3.1운동", "삼일운동", "만세운동", "유관순"],
        causes: [],
        effects: ["korea_provisional_gov"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/March_First_Movement_in_1919.jpg/1280px-March_First_Movement_in_1919.jpg",
        description: {
            summary: "일본의 식민 지배에 저항하여 우리나라의 독립을 외쳤던 평화적인 만세 운동이에요. 남녀노소, 신분, 종교를 넘어 전 국민이 한마음으로 '대한 독립 만세'를 외쳤답니다.",
            cause: "일본이 우리나라의 주권을 빼앗고 무력으로 통치하며 우리 민족을 억압했기 때문이에요. 또한, 다른 나라들이 스스로의 운명을 결정할 수 있다는 '민족 자결주의'의 영향을 받았어요.",
            result: "비록 바로 독립하지는 못했지만, 우리 민족의 독립 의지를 전 세계에 알렸고, 독립운동을 더욱 체계적으로 이끌 '대한민국 임시정부'가 세워지는 계기가 되었어요."
        },
        youtubeId: "8s_Y4Oa54I8" // EBS 3.1운동 영상
    },
    "korea_provisional_gov": {
        year: 1919,
        title: "대한민국 임시정부 수립",
        keywords: ["임시정부", "대한민국임시정부", "김구"],
        causes: ["3_1_movement"],
        effects: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Provisional_Government_of_the_Republic_of_Korea_in_Shanghai.jpg/1024px-Provisional_Government_of_the_Republic_of_Korea_in_Shanghai.jpg",
        description: {
            summary: "3.1 운동 이후, 독립운동을 더욱 체계적으로 이끌기 위해 중국 상하이에 세워진 우리나라의 정부예요. 김구 선생님 등이 중심이 되어 독립할 때까지 나라를 대표하는 역할을 했어요.",
            cause: "3.1 운동을 통해 보여준 우리 민족의 독립에 대한 열망을 하나로 모으고, 독립운동을 이끌어갈 구심점이 필요했기 때문이에요.",
            result: "광복군을 만들어 무장 독립 투쟁을 준비하고, 외교 활동을 통해 우리나라의 독립이 정당함을 세계에 알리는 등 다양한 독립운동을 이끌었어요."
        },
        youtubeId: "D83s3s33H-A" // EBS 대한민국 임시정부
    },
    "korean_war": {
        year: 1950,
        title: "6.25 전쟁",
        keywords: ["6.25", "625", "한국전쟁"],
        causes: [],
        effects: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korean_War_Montage_2.png/1280px-Korean_War_Montage_2.png",
        description: {
            summary: "북한이 남한을 침공하면서 시작된 우리 민족의 가장 큰 비극이에요. 3년 넘게 이어진 전쟁으로 온 나라가 폐허가 되고 수많은 사람들이 목숨을 잃거나 가족과 헤어졌어요.",
            cause: "광복 이후 미국과 소련의 영향으로 우리나라가 남과 북으로 나뉘었고, 이념 대립이 심해지던 상황에서 북한이 무력으로 통일을 시도했기 때문이에요.",
            result: "전쟁은 잠시 멈춘 '휴전' 상태로 끝이 났고, 남과 북의 분단이 더욱 굳어졌어요. 또한, 수많은 이산가족이 생겨나는 등 깊은 상처를 남겼습니다."
        },
        youtubeId: "Vd5n_2j2pG0" // EBS 지식채널e 6.25 전쟁
    },
    "election_fraud_1960": {
        year: 1960,
        title: "3.15 부정선거",
        keywords: ["3.15", "부정선거"],
        causes: [],
        effects: ["april_19_revolution"],
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/3.15%EC%9D%BC_%EB%A7%88%EC%82%B0%EC%9D%98%EA%B1%B0.jpg",
        description: {
            summary: "당시 이승만 정부가 선거에서 이기기 위해 투표함을 미리 채워놓거나, 투표 결과를 조작하는 등 민주주의의 기본을 어긴 사건이에요.",
            cause: "자유당 정권이 장기 집권을 위해 비민주적인 방법을 동원하여 선거에서 승리하려고 했기 때문이에요.",
            result: "이 사건에 분노한 마산 지역의 시위를 시작으로, 전국적으로 학생과 시민들이 참여하는 4.19 혁명이 일어나는 직접적인 계기가 되었어요."
        },
        youtubeId: "1-y6yT4nB-c" // 3.15 부정선거 관련 영상
    },
    "april_19_revolution": {
        year: 1960,
        title: "4.19 혁명",
        keywords: ["4.19", "419", "사일구", "혁명"],
        causes: ["election_fraud_1960"],
        effects: ["syngman_rhee_resignation"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg/1280px-1960_4_19_%EC%84%9C%EC%9A%B8_%EC%88%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg",
        description: {
            summary: "3.15 부정선거에 맞서 학생들이 중심이 되어 일으킨 민주주의 혁명이에요. '잘못된 정치는 물러나라!'고 외친 용감한 시민들의 힘으로 우리나라 민주주의가 한 단계 발전했어요.",
            cause: "선거의 공정성을 잃어버린 3.15 부정선거는 민주주의를 훼손하는 행위였고, 이를 바로잡으려는 시민들의 열망이 폭발했기 때문이에요.",
            result: "결국 이승만 대통령이 자리에서 물러났으며, 4.19 혁명은 '나라의 주인은 국민'이라는 민주주의의 원칙을 시민의 힘으로 지켜낸 위대한 사건으로 기억되고 있어요."
        },
        youtubeId: "QzLbfA4E_38" // EBS 4.19 혁명
    },
    "syngman_rhee_resignation": {
        year: 1960,
        title: "이승만 대통령 하야",
        keywords: ["이승만", "하야"],
        causes: ["april_19_revolution"],
        effects: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Syngman_Rhee_announces_his_resignation.jpg",
        description: {
            summary: "4.19 혁명으로 보여준 국민들의 거센 저항에 결국 이승만 대통령이 '국민이 원한다면 물러나겠다'며 대통령 자리에서 스스로 내려온 사건이에요.",
            cause: "3.15 부정선거로 시작된 불만이 4.19 혁명으로 이어지며 전국적으로 확산되었고, 더 이상 국민들의 요구를 외면할 수 없었기 때문이에요.",
            result: "독재 정권이 국민의 힘에 의해 무너지고, 새로운 형태의 민주적인 정부가 들어서는 계기가 되었어요."
        },
        youtubeId: "6a-A_h3z-A8" // 이승만 대통령 하야 관련 뉴스
    }
};
