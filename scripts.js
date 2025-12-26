// ==========================================
// SAFELY CHECK FOR PDF LIBRARY
// ==========================================
// We check if jspdf exists. If not (like on the Branches page), 
// we set it to null so the script doesn't crash.
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
    'news_1': { title: 'Defense Pact Signed', body: `<p><strong>Baghdad, Iraq</strong> — The Ministry of Defense today announced the signing of a new strategic defense cooperation agreement.</p>` },
    'news_2': { title: '3rd Armored Division Graduates', body: `<p><strong>Taji Base</strong> — Over 500 new soldiers graduated today in a ceremony attended by the Chief of Staff.</p>` },
    'news_3': { title: 'Humanitarian Aid', body: `<p><strong>Salahuddin Governorate</strong> — The Engineering Directorate delivered 5 tons of food and water supplies to remote villages.</p>` },
    'news_4': { title: 'Cyber Command Established', body: `<p><strong>Baghdad</strong> — The Iraqi Ministry of Defense has formally established the "Cyber Defense Directorate."</p>` },
    'news_5': { title: 'Border Wall Completion', body: `<p><strong>Anbar Governorate</strong> — Construction of the western border security fence has reached 95% completion.</p>` },
    'news_6': { title: 'New F-16 Pilots Certified', body: `<p><strong>Arizona, USA</strong> — A new batch of 12 Iraqi pilots has completed the highly demanding F-16 Fighting Falcon certification course.</p>` },
    'submit_success': {
        title: 'Success',
        body: `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-check-circle fa-4x" style="color: var(--accent-green); margin-bottom: 20px;"></i>
                <h3>Request Received</h3>
                <p>Thank you for contacting us. Your message/application has been received and is being processed.</p>
            </div>
        `
    }
};

// ==========================================
// FUNCTIONS
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

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if(navLinks) navLinks.classList.toggle('active');
}

// Slider Variables
let slideIndex = 1;
let slideTimer;

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function showSlides(n) {
    // Check if slides exist on the page
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex-1].classList.add('active');
}

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function(){ changeSlide(1); }, 5000);
}

// Clock
setInterval(() => {
    const now = new Date();
    const clockEl = document.getElementById('live-clock');
    if(clockEl) {
        clockEl.innerText = now.toLocaleTimeString('en-US', { hour12: false });
    }
}, 1000);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    // Only init slider if it exists
    if (document.querySelector('.slider-container')) {
        showSlides(slideIndex);
        slideTimer = setInterval(function(){ changeSlide(1); }, 5000);
    }
});

// PDF Generation Function
function generatePDF() {
    // Check if library is loaded
    if (!jsPDF) {
        alert("PDF Library not loaded on this page.");
        return;
    }

    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Iraqi Armed Forces", 105, 20, null, null, "center");
    
    // Subtitle
    doc.setFontSize(16);
    doc.text("Recruitment Guide 2025", 105, 30, null, null, "center");
    
    // Line
    doc.setDrawColor(206, 17, 38); // Red color
    doc.setLineWidth(1);
    doc.line(20, 35, 190, 35);

    // Content
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
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

For more information, please contact the Ministry of Defense.

All rights reserved © 2025.
    `;
    
    // Split text to fit width
    const splitText = doc.splitTextToSize(text, 170);
    doc.text(splitText, 20, 50);

    // Save the PDF
    doc.save("Recruitment_Guide_2025.pdf");
}

// ==========================================
// VIDEO SLIDER LOGIC 
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
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Activate the new slide
    slides[videoSlideIndex-1].classList.add('active');

    // FIX: Stop/Reload ALL videos. This ensures the "Hidden" videos 
    // stop playing so the "Visible" one can start properly.
    const iframes = document.querySelectorAll(".video-slide iframe");
    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.src = src; // Reloading the source stops playback and resets it
    });
}

function resetVideoTimer() {
    clearInterval(videoSlideTimer);
    videoSlideTimer = setInterval(function(){ changeVideoSlide(1); }, 12000); // 12 Seconds
}
// ==========================================
// LOCATION DETECTION
// ==========================================
function initLocation() {
    const locElement = document.getElementById('user-location');
    
    // Check if element exists on page
    if(!locElement) return;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        locElement.innerText = "Loc. Unknown";
    }

    function success(position) {
        // 1. Hardcoded Erbil coordinates fallback (If user is far away, this makes it "Fake" to user location)
        // But request asks to "Show place location of user that open AND location erbil"
        // I will prioritize User Location.
        
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Reverse Geocoding using OpenStreetMap Nominatim API (Free)
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                const city = data.address.city || data.address.town || data.address.village || "Unknown City";
                const country = data.address.country || "";
                locElement.innerHTML = `${city}, ${country}`;
            })
            .catch(err => {
                // If API fails, just show coordinates
                locElement.innerText = `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
            });
    }

    function error(err) {
        // If user denies permission, show Erbil (Fallback as requested)
        console.warn(`ERROR(${err.code}): ${err.message}`);
        locElement.innerText = "Erbil, Iraq";
    }
}

// ==========================================
// CLOCK & DATE
// ==========================================
function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById('live-clock');
    const dateEl = document.getElementById('live-date');

    if(clockEl) {
        clockEl.innerText = now.toLocaleTimeString('en-US', { hour12: false });
    }
    if(dateEl) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        dateEl.innerText = now.toLocaleDateString('en-US', options);
    }
}

setInterval(updateClock, 1000);
updateClock(); // Run immediately

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initLocation(); // Start Location
    updateClock();  // Start Clock

    // Only init slider if it exists
    if (document.querySelector('.slider-container')) {
        showSlides(slideIndex);
        slideTimer = setInterval(function(){ changeSlide(1); }, 5000);
    }

    // Initialize Video Slider
    if (document.querySelector('.video-slider-wrapper')) {
        showVideoSlides(videoSlideIndex);
        videoSlideTimer = setInterval(function(){ changeVideoSlide(1); }, 12000);
    }
});
async function startFaceLogin() {
    const video = document.getElementById("camera");
    video.style.display = "block";

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');

    setTimeout(async () => {
        const face = await faceapi.detectSingleFace(
            video,
            new faceapi.TinyFaceDetectorOptions()
        );

        if (face) {
            alert("Face detected ✅ (login logic here)");
            window.location.href = "home.html";
        } else {
            alert("No face ❌");
        }

        stream.getTracks().forEach(t => t.stop());
        video.style.display = "none";
    }, 3000);
    
}

