// ==========================================
// SAFELY CHECK FOR PDF LIBRARY
// ==========================================
let jsPDF;
if (window.jspdf && window.jspdf.jsPDF) {
    jsPDF = window.jspdf.jsPDF;
}

// ==========================================
// MODAL DATA
// ==========================================
const modalData = {
    'army': {
        title: 'Iraqi Army Details',
        body: `<p>The Iraqi Army is the land component of the Iraqi Armed Forces. It is currently organized into 14 divisions, including armored, mechanized, and infantry divisions.</p>`
    },
    'airforce': {
        title: 'Iraqi Air Force (IQAF)',
        body: `<p>The IQAF has undergone a massive modernization program since 2004. Its primary airbase is Balad Air Base.</p>`
    },
    'navy': {
        title: 'Iraqi Navy',
        body: `<p>Despite being a relatively small force, the Iraqi Navy is vital for protecting the nation's economic lifeline—the oil export platforms in the Persian Gulf.</p>`
    },
    'cts': {
        title: 'Counter Terrorism Service (CTS)',
        body: `<p>The CTS is considered the most elite unit in the Iraqi military. They were the primary spearhead during the liberation of Mosul.</p>`
    },
    'eq_abrams': {
        title: 'M1A1 Abrams Specifications',
        body: `<ul><li><strong>Manufacturer:</strong> General Dynamics Land Systems (USA)</li><li><strong>Gun:</strong> 120mm Smoothbore M256</li><li><strong>Engine:</strong> Honeywell AGT1500 Turbine (1,500 hp)</li></ul>`
    },
    'eq_bradley': {
        title: 'M2 Bradley Specifications',
        body: `<ul><li><strong>Role:</strong> Infantry Fighting Vehicle</li><li><strong>Armament:</strong> 25mm M242 Chain Gun</li></ul>`
    },
    'eq_f16': {
        title: 'F-16IQ Fighting Falcon',
        body: `<ul><li><strong>Role:</strong> Multirole Fighter / Strike</li><li><strong>Engine:</strong> F110-GE-129</li></ul>`
    },
    'eq_t72': {
        title: 'T-72M1 (Upgraded)',
        body: `<ul><li><strong>Origin:</strong> Soviet Union (Upgraded locally)</li><li><strong>Armament:</strong> 125mm 2A46M Smoothbore</li></ul>`
    },
    'eq_rifle': {
        title: 'M4 Carbine / M16A4',
        body: `<ul><li><strong>Caliber:</strong> 5.56x45mm NATO</li><li><strong>Effective Range:</strong> 500m</li></ul>`
    },
    'eq_blackhawk': {
        title: 'UH-60 Black Hawk',
        body: `<ul><li><strong>Role:</strong> Utility / Medevac</li><li><strong>Speed:</strong> 294 km/h</li></ul>`
    },
    'eq_humvee': {
        title: 'M1151 Up-Armored Humvee',
        body: `<ul><li><strong>Role:</strong> Tactical / Patrol</li><li><strong>Armor:</strong> Level 3A + Frag Kit</li></ul>`
    },
    'eq_paladin': {
        title: 'M109A7 Paladin',
        body: `<ul><li><strong>Role:</strong> Self-Propelled Howitzer</li><li><strong>Caliber:</strong> 155mm</li></ul>`
    },
    'eq_btr4': {
        title: 'BTR-4 Bucephalus',
        body: `<ul><li><strong>Role:</strong> 8x8 Armored Personnel Carrier</li><li><strong>Speed:</strong> 110 km/h</li></ul>`
    },
    'op_mosul': {
        title: 'Operation We Are Coming - After Action Report',
        body: `
            <h4>Operation Summary</h4>
            <p>This report details the nine-month offensive to retake the city of Mosul from Daesh (ISIS) control. It stands as the largest urban battle since WWII.</p>
            <h4>Key Strategic Points:</h4>
            <ul>
                <li><strong>Phasing:</strong> Eastern Mosul (Jan 2017) and Western Mosul (July 2017).</li>
                <li><strong>Forces:</strong> Over 100,000 Iraqi Security Forces.</li>
                <li><strong>Outcome:</strong> On July 10, 2017, Prime Minister Haider al-Abadi declared victory.</li>
            </ul>
        `
    },
    'submit_success': {
        title: 'Success',
        body: `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-check-circle fa-4x" style="color: #007A3D; margin-bottom: 20px;"></i>
                <h3>Request Received</h3>
                <p>Thank you for contacting us. Your message/application has been received and is being processed.</p>
            </div>
        `
    }
};

// ==========================================
// MODAL FUNCTIONS
// ==========================================
function openModal(key) {
    const data = modalData[key];
    if (!data) return;
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalOverlay = document.getElementById('info-modal');
    if(modalTitle && modalBody && modalOverlay) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modalOverlay.classList.add('open');
    }
}

function closeModal(event) {
    const modalOverlay = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-modal');
    if (!modalOverlay) return;
    if (!event || event.target === modalOverlay || event.target === closeBtn) {
        modalOverlay.classList.remove('open');
    }
}

// ==========================================
// NAV MENU
// ==========================================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if(navLinks) navLinks.classList.toggle('active');
}

// ==========================================
// IMAGE SLIDER
// ==========================================
let slideIndex = 1;
let slideTimer;

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) slides[i].classList.remove('active');
    slides[slideIndex-1].classList.add('active');
}

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function(){ changeSlide(1); }, 5000);
}

// ==========================================
// VIDEO SLIDER
// ==========================================
let videoSlideIndex = 1;
let videoSlideTimer;

function changeVideoSlide(n) {
    showVideoSlides(videoSlideIndex += n);
    resetVideoTimer();
}

function showVideoSlides(n) {
    let slides = document.getElementsByClassName("video-slide");
    if (slides.length === 0) return;
    if (n > slides.length) {videoSlideIndex = 1}
    if (n < 1) {videoSlideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) slides[i].classList.remove('active');
    slides[videoSlideIndex-1].classList.add('active');

    // Stop hidden videos
    document.querySelectorAll(".video-slide iframe").forEach(iframe => {
        const src = iframe.src;
        iframe.src = src;
    });
}

function resetVideoTimer() {
    clearInterval(videoSlideTimer);
    videoSlideTimer = setInterval(function(){ changeVideoSlide(1); }, 12000);
}

// ==========================================
// CLOCK
// ==========================================
function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById('live-clock');
    const dateEl = document.getElementById('live-date');
    if(clockEl) clockEl.innerText = now.toLocaleTimeString('en-US', { hour12: false });
    if(dateEl) dateEl.innerText = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}
setInterval(updateClock, 1000);
updateClock();

// ==========================================
// LOCATION
// ==========================================
function initLocation() {
    const locElement = document.getElementById('user-location');
    if(!locElement) return;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
    } else locElement.innerText = "Loc. Unknown";

    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
            .then(res => res.json())
            .then(data => {
                const city = data.address.city || data.address.town || data.address.village || "Unknown City";
                const country = data.address.country || "";
                locElement.innerText = `${city}, ${country}`;
            })
            .catch(err => locElement.innerText = `${lat.toFixed(2)}, ${lon.toFixed(2)}`);
    }

    function error(err) { locElement.innerText = "Erbil, Iraq"; }
}

// ==========================================
// PDF GENERATION
// ==========================================
function generatePDF() {
    if (!jsPDF) { alert("PDF Library not loaded."); return; }
    const doc = new jsPDF();
    doc.setFontSize(22); doc.setTextColor(40,40,40); doc.text("Iraqi Armed Forces", 105, 20, null, null, "center");
    doc.setFontSize(16); doc.text("Recruitment Guide 2025", 105, 30, null, null, "center");
    doc.setDrawColor(206,17,38); doc.setLineWidth(1); doc.line(20,35,190,35);
    doc.setFontSize(12); doc.setTextColor(0,0,0);
    const text = `
Thank you for your interest in serving the Republic of Iraq.

1. ELIGIBILITY REQUIREMENTS
- Must be an Iraqi citizen.
- Age: 18 to 35 years old.
- Minimum height: 165cm for males.
- Good physical health (Class A medical).
- No criminal record.
- High school diploma or equivalent.

2. BRANCHES AVAILABLE
- Iraqi Army
- Iraqi Air Force
- Iraqi Navy
- Counter Terrorism Service (Requires advanced testing)
- Federal Police

3. BENEFITS
- Competitive salary based on rank.
- Housing allowance.
- Medical coverage for service member and immediate family.
- Opportunity for higher education and specialized training.

4. APPLICATION PROCESS
1. Visit your nearest Recruitment Center.
2. Bring your National ID (Jawiy) and Education Certificate.
3. Undergo physical fitness test.
4. Pass medical examination.
5. Interview with selection board.

All rights reserved © 2025.
`;
    const splitText = doc.splitTextToSize(text, 170);
    doc.text(splitText, 20, 50);
    doc.save("Recruitment_Guide_2025.pdf");
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initLocation();
    updateClock();

    if (document.querySelector('.slider-container')) {
        showSlides(slideIndex);
        slideTimer = setInterval(function(){ changeSlide(1); }, 5000);
    }
    if (document.querySelector('.video-slider-wrapper')) {
        showVideoSlides(videoSlideIndex);
        videoSlideTimer = setInterval(function(){ changeVideoSlide(1); }, 12000);
    }
});
