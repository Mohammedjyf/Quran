const parts = [
    { name: "الجزء الأول", link: "https://youtu.be/CFi6LLvN79Y?si=s_QI9IK2iIMI9OWT" },
    { name: "الجزء الثاني", link: "https://youtu.be/TlVjfJe6I-8?si=MzU3QioKYTYidKeF" },
    { name: "الجزء الثالث", link: "https://youtu.be/Ne1-zYYNkns?si=HGsfZUADY3j5coQr" },
    { name: "الجزء الرابع", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الرابع" },
    { name: "الجزء الخامس", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الخامس" },
    { name: "الجزء السادس", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السادس" },
    { name: "الجزء السابع", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السابع" },
    { name: "الجزء الثامن", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثامن" },
    { name: "الجزء التاسع", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_التاسع" },
    { name: "الجزء العاشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_العاشر" },
    { name: "الجزء الحادي عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الحادي_عشر" },
    { name: "الجزء الثاني عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثاني_عشر" },
    { name: "الجزء الثالث عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثالث_عشر" },
    { name: "الجزء الرابع عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الرابع_عشر" },
    { name: "الجزء الخامس عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الخامس_عشر" },
    { name: "الجزء السادس عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السادس_عشر" },
    { name: "الجزء السابع عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السابع_عشر" },
    { name: "الجزء الثامن عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثامن_عشر" },
    { name: "الجزء التاسع عشر", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_التاسع_عشر" },
    { name: "الجزء العشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_العشرون" },
    { name: "الجزء الحادي والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الحادي_والعشرون" },
    { name: "الجزء الثاني والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثاني_والعشرون" },
    { name: "الجزء الثالث والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثالث_والعشرون" },
    { name: "الجزء الرابع والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الرابع_والعشرون" },
    { name: "الجزء الخامس والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الخامس_والعشرون" },
    { name: "الجزء السادس والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السادس_والعشرون" },
    { name: "الجزء السابع والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السابع_والعشرون" },
    { name: "الجزء الثامن والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثامن_والعشرون" },
    { name: "الجزء التاسع والعشرون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_التاسع_والعشرون" },
    { name: "الجزء الثلاثون", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثلاثون" },
];

let startDate = localStorage.getItem('startDate') ? new Date(localStorage.getItem('startDate')) : null;

function generateCalendar() {
    const honeycomb = document.querySelector('.honeycomb');
    honeycomb.innerHTML = '';

    if (!startDate) return;

    const today = new Date();
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const remainingDays = 30 - daysPassed;

    if (remainingDays <= 0) {
        document.getElementById('remainingDays').textContent = "لقد انتهى شهر رمضان!";
        return;
    }

    document.getElementById('remainingDays').textContent = `الأيام المتبقية لنهاية شهر الخير والبركة فاستثمرها: ${remainingDays} أيام`;

    for (let i = 1; i <= 30; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = parts[i - 1].name; // اسم الجزء
        day.addEventListener('click', () => openPopup(parts[i - 1].link)); // رابط الجزء

        if (i < daysPassed) {
            day.classList.add('past');
        } else if (i === daysPassed) {
            day.classList.add('current');
        }

        honeycomb.appendChild(day);
    }
}

function setStartDate() {
    const dateInput = document.getElementById('startDate');
    startDate = new Date(dateInput.value);
    localStorage.setItem('startDate', startDate);
    generateCalendar();
}

function openPopup(link) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    popupText.innerHTML = `<iframe width="100%" height="300" src="${link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', generateCalendar);