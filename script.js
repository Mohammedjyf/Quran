const parts = [
    { name: "الجزء الأول", link: "https://www.youtube.com/embed/ZE_-O9mrtaE?si=JuF82AZGKEAjDTzz" },
    { name: "الجزء الثاني", link: "https://www.youtube.com/embed/vABx93OWNOY?si=DkokJ0VXS_4-6Qwk" },
    { name: "الجزء الثالث", link: "https://www.youtube.com/embed/8CZgAynTKiY?si=vnlsuwzLb20p605D" },
    { name: "الجزء الرابع", link: "https://www.youtube.com/embed/8CZgAynTKiY?si=s8Hh2FOEiAFtentC" },
    { name: "الجزء الخامس", link: "https://www.youtube.com/embed/28mImpnlgP4?si=wPQSjmuwltYQHRDF" },
    { name: "الجزء السادس", link: "https://www.youtube.com/embed/3gEU1eb_3A4?si=EbhC9-zpYKDUrGZc" },
    { name: "الجزء السابع", link: "https://www.youtube.com/embed/nqDa2_gaVwQ?si=n0k-3oB9VhPXScxk" },
    { name: "الجزء الثامن", link: "https://www.youtube.com/embed/5hrSQtMCqpE?si=BTCe4H9i__IyjnNm" },
    { name: "الجزء التاسع", link: "https://www.youtube.com/embed/3CAPDOhgOds?si=wxm19x1LHX5ESIxW" },
    { name: "الجزء العاشر", link: "https://www.youtube.com/embed/ydKfjBd9jFw?si=3vYmQf4N7ct9xSkm" },
    { name: "الجزء الحادي عشر", link: "https://www.youtube.com/embed/7Ski64Rx4Nk?si=ijb7lW2V6CMEyF-h" },
    { name: "الجزء الثاني عشر", link: "https://www.youtube.com/embed/_FlMLS9yEKE?si=bFIMV9L3CdDLss5i" },
    { name: "الجزء الثالث عشر", link: "https://www.youtube.com/embed/s4iJ4D9bT_U?si=KTDCOwbjbarpU_Yn" },
    { name: "الجزء الرابع عشر", link: "https://www.youtube.com/embed/cy3lkZh0_WU?si=IFbJi3Sa5lh44yWk" },
    { name: "الجزء الخامس عشر", link: "https://www.youtube.com/embed/IqGB7KPNJp0?si=yPCLn6IKmNuCCgda" },
    { name: "الجزء السادس عشر", link: "https://www.youtube.com/embed/SCTZ0aX7c-A?si=LhNUSAIAowu04YXF" },
    { name: "الجزء السابع عشر", link: "https://www.youtube.com/embed/zcbqqUNTJx4?si=pxSAQ5m-ptHXq5il" },
    { name: "الجزء الثامن عشر", link: "https://www.youtube.com/embed/lkzu_4MM-9w?si=DYLcUjnxJBXSP5fD" },
    { name: "الجزء التاسع عشر", link: "https://www.youtube.com/embed/xVJNzk7b6sk?si=g1bd4kPRROdwqN74" },
    { name: "الجزء العشرون", link: "https://www.youtube.com/embed/WbDBMuyFk_s?si=SLxLrLgDDDNzvjyK" },
    { name: "الجزء الحادي والعشرون", link: "https://www.youtube.com/embed/F30lPzcY5F4?si=BKCqZ7hXqxDsNQdT" },
    { name: "الجزء الثاني والعشرون", link: "https://www.youtube.com/embed/wNa6yHn_v9k?si=qicUwl62n00nqbY9" },
    { name: "الجزء الثالث والعشرون", link: "https://www.youtube.com/embed/QVTVaftZpLQ?si=ETbQ3fygzvJs-2sz" },
    { name: "الجزء الرابع والعشرون", link: "https://www.youtube.com/embed/kIU7outehnc?si=_1wcb2cCBRO7ufuw" },
    { name: "الجزء الخامس والعشرون", link: "https://www.youtube.com/embed/IbSwjThQXRE?si=xkeRN6V3Ult5qYA_" },
    { name: "الجزء السادس والعشرون", link: "https://www.youtube.com/embed/GJCrysBUw90?si=ejjbRyf2pxi4UxJk" },
    { name: "الجزء السابع والعشرون", link: "https://www.youtube.com/embed/K5oZrrHbp-A?si=3a8DH3lDrFwdwhqg" },
    { name: "الجزء الثامن والعشرون", link: "https://www.youtube.com/embed/tHhaPwKG-Ls?si=I2JPZwsRzlYYahlV" },
    { name: "الجزء التاسع والعشرون", link: "https://www.youtube.com/embed/OLg28wvqPC0?si=hkbdVSo_VVxzblcX" },
    { name: "الجزء الثلاثون", link: "https://www.youtube.com/embed/eY78slfWvVY?si=SUr2vsJ9ypUpvZdB" } // لا فارزة هنا
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
