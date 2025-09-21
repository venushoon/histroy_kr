// ::: 가로 타임라인 + 위키 요약 + 지니 효과 :::

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementById('timeline-viewport');
  const container = document.getElementById('timeline-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // ----- 1) 타임라인 렌더링 (가로) -----
  timelineData.forEach(item => {
    const wrap = document.createElement('div');

    if (item.type === 'era') {
      wrap.className = 'era-card';
      wrap.textContent = item.title;
    } else {
      wrap.className = 'event-item';

      if (item.type === 'event') {
        wrap.innerHTML = buildEventCard(item);
        wrap.querySelector('.event-card').addEventListener('click', (e) => showModal(e.currentTarget, item));
      } else if (item.type === 'eventCluster') {
        wrap.classList.add('event-cluster');

        const relatedCardsHtml = item.relatedEvents.map(related => buildRelatedCard(related)).join('');
        wrap.innerHTML = `
          <div class="cluster-title">${item.clusterTitle}</div>
          <div class="main-card">
            ${buildEventCard(item.mainEvent)}
          </div>
          <div class="related-events">
            ${relatedCardsHtml}
          </div>
          <div class="timeline-point ${item.mainEvent.important ? 'important' : ''}"></div>
        `;

        wrap.querySelector('.main-card .event-card')
            .addEventListener('click', (e) => showModal(e.currentTarget, item.mainEvent));
        wrap.querySelectorAll('.related-card').forEach((card, idx) => {
          card.addEventListener('click', (e) => showModal(e.currentTarget, item.relatedEvents[idx]));
        });
      }
    }
    container.appendChild(wrap);
  });

  // 스크롤 인뷰 애니메이션
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { root: container, threshold: .4 });
  container.querySelectorAll('.event-item').forEach(node => observer.observe(node));

  // 스냅 위치 탐색
  const snapNodes = [...container.children].filter(n => !n.classList.contains('axis-line'));
  let currentIndex = 0;
  const scrollToIndex = (idx) => {
    currentIndex = Math.max(0, Math.min(snapNodes.length - 1, idx));
    snapNodes[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };
  prevBtn.addEventListener('click', () => scrollToIndex(currentIndex - 1));
  nextBtn.addEventListener('click', () => scrollToIndex(currentIndex + 1));
  container.addEventListener('scroll', debounce(() => {
    // 가장 가운데에 가까운 카드로 인덱스 갱신
    const mid = container.scrollLeft + container.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    snapNodes.forEach((n, i) => {
      const x = n.offsetLeft + n.clientWidth/2;
      const d = Math.abs(x - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    currentIndex = best;
  }, 120));

  // 키보드 내비게이션(←/→)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });
});

// ----- 카드 / 관련 카드 템플릿 -----
function buildEventCard(data) {
  const isImportant = data.important ? 'important' : '';
  const yearText = data.year ? `<div class="year">${data.year}년</div>` : '';
  return `
    <div class="event-card ${isImportant}" data-year="${data.year || ''}" data-title="${escapeHtml(data.title)}">
      ${yearText}
      <div class="title">${data.title}</div>
      <div class="meta">클릭하여 자세히 보기</div>
    </div>
    <div class="timeline-point ${isImportant}"></div>
  `;
}
function buildRelatedCard(data){
  return `
    <div class="related-card event-card" data-year="${data.year || ''}" data-title="${escapeHtml(data.title)}">
      <div class="relation-tag ${data.relation}">${data.relation}</div>
      <div class="title">${data.title}</div>
    </div>
  `;
}

// ----- 모달 + 요술램프 '지니' 효과 & 위키 요약 -----
async function showModal(cardEl, data){
  // 지니 효과 시작점 계산(카드 중심 → CSS 변수 주입)
  const rect = cardEl.getBoundingClientRect();
  const gx = Math.round(rect.left + rect.width/2);
  const gy = Math.round(rect.top + rect.height/2);

  // 기존 모달 제거
  document.querySelectorAll('.modal-overlay').forEach(m => m.remove());

  // 위키 요약 가져오기 (ko → en fallback)
  const wiki = await getWikipediaSummary(bestWikiTitle(data));

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.style.setProperty('--gx', `${gx}px`);
  overlay.style.setProperty('--gy', `${gy}px`);
  overlay.innerHTML = `
    <div class="modal-content">
      <span class="modal-close material-icons" title="닫기">close</span>
      ${data.image ? `<img src="${data.image}" alt="${escapeHtml(data.title)}" />` : ''}
      <h2>${data.title}</h2>
      ${data.year ? `<div class="year">${data.year}년</div>` : ''}
      <div class="desc">
        <p>${escapeHtml(data.description || '')}</p>
        ${wiki ? `
          <p>${escapeHtml(wiki.extract)}</p>
          <p><a class="wikipedia-link" href="${wiki.content_urls.desktop.page}" target="_blank" rel="noopener">출처: 위키백과에서 더 보기</a></p>
        ` : `<p class="hint">위키 요약을 찾지 못했어요. 제목을 조금 다르게 적어보면 더 잘 찾아와요.</p>`}
      </div>
      ${data.youtubeId ? `
        <div class="modal-actions">
          <a href="https://www.youtube.com/watch?v=${data.youtubeId}" class="youtube-button" target="_blank" rel="noopener">
            <span class="material-icons">smart_display</span> 영상으로 더 알아보기
          </a>
        </div>` : ''}
    </div>
  `;
  document.body.appendChild(overlay);

  // 지니 열림
  requestAnimationFrame(() => overlay.classList.add('genie-open'));

  // 닫기
  const close = () => overlay.remove();
  overlay.querySelector('.modal-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); }, { passive:true });
}

// 위키백과 요약 (REST v1 summary)
async function getWikipediaSummary(title){
  if(!title) return null;
  const kourl = `https://ko.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const enurl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

  try{
    let res = await fetch(kourl, { headers:{ 'Accept':'application/json' }});
    if (res.ok){
      const json = await res.json();
      if(json && json.extract) return json;
    }
  }catch(e){/* ignore ko fail */}
  try{
    let res = await fetch(enurl, { headers:{ 'Accept':'application/json' }});
    if (res.ok){
      const json = await res.json();
      if(json && json.extract) return json;
    }
  }catch(e){/* ignore en fail */}
  return null;
}

// 타이틀 보정(위키 검색 정확도 향상용)
function bestWikiTitle(data){
  // 기본: 카드의 제목. 연도가 있으면 흔한 수식어 제거/보정.
  let t = (data && data.title) ? String(data.title) : '';
  // 예: "6.25 전쟁 발발" → "한국 전쟁" 으로 보정 등 원하는 규칙 추가 가능
  const rules = [
    { find:/6\.?25\s*전쟁.*$/g, replace:'한국 전쟁' },
    { find:/4\.?19\s*혁명.*$/g, replace:'4·19 혁명' },
    { find:/6월\s*민주\s*항쟁.*$/g, replace:'6월 민주항쟁' },
    { find:/광복.*$/g, replace:'대한민국의 광복' },
  ];
  rules.forEach(r => t = t.replace(r.find, r.replace));
  return t.trim();
}

// Utils
function debounce(fn, wait=150){
  let t; return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn(...args), wait); };
}
function escapeHtml(str=''){
  return str.replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
