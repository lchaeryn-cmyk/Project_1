/**
 * 캐릭터(독) 클릭 시 메뉴를 띄워주는 함수
 */
JavaScript
let currentPos = 0;
function toggleMenu() {
    // 1. 메뉴 리스트 요소를 찾습니다.
    const menu = document.getElementById('quickMenu');
    
    // 2. 'active' 클래스가 있으면 제거하고, 없으면 추가합니다 (토글).
    // 이 클래스가 추가될 때 CSS에 작성한 애니메이션이 실행됩니다.
    menu.classList.toggle('active');
    
    // 3. (선택사항) 캐릭터 클릭 시 살짝 팅기는 효과를 주고 싶다면 추가
    const character = document.querySelector('.character-dock');
    character.style.transform = 'scale(0.9)'; // 클릭 순간 살짝 작아졌다가
    
    setTimeout(() => {
        character.style.transform = ''; // 다시 원래대로 (또는 hover 상태로) 복구
    }, 100);
}

// 메뉴 바깥 영역을 클릭했을 때 메뉴가 자동으로 닫히게 하고 싶다면 아래 코드도 추가하세요.
document.addEventListener('click', function(event) {
    const container = document.querySelector('.dock-container');
    const menu = document.getElementById('quickMenu');
    
    // 클릭된 곳이 캐릭터나 메뉴 내부가 아니라면 메뉴를 닫음
    if (!container.contains(event.target)) {
        menu.classList.remove('active');
    }
});


const slider = document.getElementById('menuSlider');

function slideNext() {
    const cardWidth = document.querySelector('.menu-card').offsetWidth + 20; // 가로폭 + 간격
    const maxSlide = 2; // 총 6개 중 4개 보이니 2번 이동 가능
    
    if (currentPos < maxSlide) {
        currentPos++;
    } else {
        currentPos = 0; // 마지막이면 다시 처음으로 (선택사항)
    }
    
    slider.style.transform = `translateX(-${currentPos * cardWidth}px)`;
}