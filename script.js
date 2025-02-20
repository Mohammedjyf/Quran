const parts = [
    { name: "الجزء 1", link: "https://www.youtube.com/embed/ZE_-O9mrtaE?si=JuF82AZGKEAjDTzz" },
    { name: "الجزء 2", link: "https://www.youtube.com/embed/vABx93OWNOY?si=DkokJ0VXS_4-6Qwk" },
    { name: "الجزء 3", link: "https://www.youtube.com/embed/8CZgAynTKiY?si=vnlsuwzLb20p605D" },
    { name: "الجزء 4", link: "https://www.youtube.com/embed/8CZgAynTKiY?si=s8Hh2FOEiAFtentC" },
    { name: "الجزء 5", link: "https://www.youtube.com/embed/28mImpnlgP4?si=wPQSjmuwltYQHRDF" },
    { name: "الجزء 6", link: "https://www.youtube.com/embed/3gEU1eb_3A4?si=EbhC9-zpYKDUrGZc" },
    { name: "الجزء 7", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السابع" },
    { name: "الجزء 8", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثامن" },
    { name: "الجزء 9", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_التاسع" },
    { name: "الجزء 10", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_العاشر" },
    { name: "الجزء 11", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الحادي_عشر" },
    { name: "الجزء 12", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثاني_عشر" },
    { name: "الجزء 13", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثالث_عشر" },
    { name: "الجزء 14", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الرابع_عشر" },
    { name: "الجزء 15", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الخامس_عشر" },
    { name: "الجزء 16", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السادس_عشر" },
    { name: "الجزء 17", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السابع_عشر" },
    { name: "الجزء 18", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثامن_عشر" },
    { name: "الجزء 19", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_التاسع_عشر" },
    { name: "الجزء 20", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_العشرون" },
    { name: "الجزء 21", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الحادي_والعشرون" },
    { name: "الجزء 22", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثاني_والعشرون" },
    { name: "الجزء 23", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثالث_والعشرون" },
    { name: "الجزء 24", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الرابع_والعشرون" },
    { name: "الجزء 25", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الخامس_والعشرون" },
    { name: "الجزء 26", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السادس_والعشرون" },
    { name: "الجزء 27", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_السابع_والعشرون" },
    { name: "الجزء 28", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثامن_والعشرون" },
    { name: "الجزء 29", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_التاسع_والعشرون" },
    { name: "الجزء 30", link: "https://www.youtube.com/embed/رابط_اليوتيوب_للجزء_الثلاثون" } // لا فارزة هنا
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

      document.getElementById('remainingDays').textContent = ` (${remainingDays}) يوم هي الأيام المتبقية لنهاية شهر الخير والبركة فاستثمرها`;

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
