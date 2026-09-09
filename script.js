/* ============================================================
   CAMPUS CONNECT - FRONTEND ONLY
   ============================================================ */

/* ================= STORAGE KEYS ================= */

const STORAGE = {
    auth: "campus_auth",
    theme: "campus_theme",
    registeredEvents: "registered_events",
    complaints: "campus_complaints",
    notificationsRead: "notifications_read",
    notificationsEnabled: "notifications_enabled"
};


/* ================= HELPERS ================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


/* ================= APP STATE ================= */

let state = {
    page: "overview",
    noticeFilter: "All",
    noticeSearch: "",
    eventSearch: "",
    eventCategory: "All",
    complaintSearch: ""
};


/* ================= DATA ================= */

const notices = [
    {
        id: 1,
        icon: "📚",
        title: "Mid-Semester Examination Schedule",
        category: "Exam",
        date: "Sep 08, 2026",
        text: "The mid-semester examination schedule has been released. Students are requested to check the timetable and prepare accordingly."
    },

    {
        id: 2,
        icon: "📢",
        title: "Library Timing Extended",
        category: "General",
        date: "Sep 07, 2026",
        text: "The central library will now remain open until 9:00 PM on weekdays for students."
    },

    {
        id: 3,
        icon: "🎓",
        title: "Assignment Submission Deadline",
        category: "Academic",
        date: "Sep 06, 2026",
        text: "All pending assignments must be submitted through the student portal before the specified deadline."
    },

    {
        id: 4,
        icon: "🎤",
        title: "Annual Tech Fest Registrations Open",
        category: "Events",
        date: "Sep 05, 2026",
        text: "Registrations for the annual technical festival are now open. Participate in workshops and competitions."
    },

    {
        id: 5,
        icon: "🚌",
        title: "Transport Route Update",
        category: "General",
        date: "Sep 03, 2026",
        text: "A temporary change has been made to selected campus transport routes."
    },

    {
        id: 6,
        icon: "🏫",
        title: "Classroom Allocation Notice",
        category: "Academic",
        date: "Sep 01, 2026",
        text: "Updated classroom allocation details are available in the student portal."
    }
];


const events = [
    {
        id: "EV101",
        icon: "💻",
        title: "Web Development Workshop",
        category: "Workshop",
        date: "Sep 12",
        time: "10:00 AM",
        place: "Lab 2",
        description: "Learn modern frontend development through a practical hands-on workshop.",
        seats: 80
    },

    {
        id: "EV102",
        icon: "🏆",
        title: "Coding Challenge",
        category: "Competition",
        date: "Sep 14",
        time: "2:00 PM",
        place: "Auditorium",
        description: "Compete with students from different departments in a coding challenge.",
        seats: 120
    },

    {
        id: "EV103",
        icon: "🎨",
        title: "Cultural Evening",
        category: "Cultural",
        date: "Sep 16",
        time: "6:00 PM",
        place: "Main Ground",
        description: "Enjoy music, dance and performances by students.",
        seats: 300
    },

    {
        id: "EV104",
        icon: "⚽",
        title: "Inter College Football",
        category: "Sports",
        date: "Sep 18",
        time: "4:00 PM",
        place: "Sports Ground",
        description: "Inter-college football tournament starting this weekend.",
        seats: 200
    },

    {
        id: "EV105",
        icon: "☁️",
        title: "Cloud Computing Seminar",
        category: "Workshop",
        date: "Sep 20",
        time: "11:00 AM",
        place: "Seminar Hall",
        description: "Explore cloud computing concepts, services and career opportunities.",
        seats: 90
    },

    {
        id: "EV106",
        icon: "🤖",
        title: "Project Expo",
        category: "Competition",
        date: "Sep 22",
        time: "12:00 PM",
        place: "Innovation Hall",
        description: "Showcase your innovative academic and technical projects.",
        seats: 150
    }
];


const resources = [
    {
        icon: "📘",
        title: "Study Notes",
        text: "Access subject-wise notes and reference material.",
        action: "Open Notes"
    },

    {
        icon: "📅",
        title: "Academic Calendar",
        text: "View semester dates, holidays and important academic events.",
        action: "Open Calendar"
    },

    {
        icon: "📝",
        title: "Exam Timetable",
        text: "Quickly check your upcoming examination timetable.",
        action: "View Timetable"
    },

    {
        icon: "💻",
        title: "Coding Practice",
        text: "Practice programming and improve your problem-solving skills.",
        action: "Practice Now"
    },

    {
        icon: "🎓",
        title: "Student ERP",
        text: "Access attendance, marks and academic information.",
        action: "Open ERP"
    },

    {
        icon: "📂",
        title: "Assignment Portal",
        text: "Submit and track your academic assignments.",
        action: "Open Portal"
    }
];


const announcements = [
    {
        icon: "📢",
        title: "Campus Placement Drive",
        text: "Registration for the upcoming placement drive is now available.",
        date: "Today"
    },

    {
        icon: "🏆",
        title: "Inter College Competition",
        text: "Students can register for the upcoming inter-college technical competition.",
        date: "Yesterday"
    },

    {
        icon: "📚",
        title: "New Study Material Added",
        text: "Additional academic resources have been uploaded for students.",
        date: "Sep 07"
    }
];


const notifications = [
    {
        icon: "📢",
        title: "New Notice",
        text: "Mid-Semester Examination Schedule is available."
    },

    {
        icon: "🎟️",
        title: "Event Registration",
        text: "Web Development Workshop registration is open."
    },

    {
        icon: "📚",
        title: "New Resource",
        text: "New study material has been uploaded."
    }
];


/* ============================================================
   LOCAL STORAGE
   ============================================================ */

function getRegisteredEvents() {

    try {

        return JSON.parse(
            localStorage.getItem(
                STORAGE.registeredEvents
            ) || "[]"
        );

    } catch {

        return [];

    }
}


function saveRegisteredEvents(data) {

    localStorage.setItem(
        STORAGE.registeredEvents,
        JSON.stringify(data)
    );
}


function getComplaints() {

    try {

        const stored =
            localStorage.getItem(
                STORAGE.complaints
            );

        if (stored) {

            return JSON.parse(stored);

        }

    } catch {

        // ignore corrupted storage

    }


    return [
        {
            id: "CMP-2418",
            title: "Wi-Fi not working in Block A",
            category: "Wi-Fi",
            description: "Internet connection is unavailable.",
            status: "In Progress",
            date: "Sep 06, 2026"
        },

        {
            id: "CMP-2294",
            title: "Library AC issue",
            category: "Library",
            description: "Air conditioning problem in reading room.",
            status: "Pending",
            date: "Sep 04, 2026"
        }
    ];
}


function saveComplaints(data) {

    localStorage.setItem(
        STORAGE.complaints,
        JSON.stringify(data)
    );
}


/* ============================================================
   AUTH
   ============================================================ */

function isAuthenticated() {

    return (
        localStorage.getItem(
            STORAGE.auth
        ) === "true"
    );

}


function showDashboard() {

    $("#authScreen").setAttribute(
        "hidden",
        ""
    );

    $("#dashboardApp").removeAttribute(
        "hidden"
    );

}


function showLoginScreen() {

    $("#dashboardApp").setAttribute(
        "hidden",
        ""
    );

    $("#authScreen").removeAttribute(
        "hidden"
    );

}


/* ============================================================
   THEME
   ============================================================ */

function applyTheme() {

    const theme =
        localStorage.getItem(
            STORAGE.theme
        ) || "light";


    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }


    updateThemeSwitch();

}


function setTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const isDark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        STORAGE.theme,
        isDark ? "dark" : "light"
    );


    updateThemeSwitch();


    showToast(
        isDark
            ? "Dark mode enabled"
            : "Light mode enabled",

        isDark
            ? "🌙"
            : "☀️"
    );

}


function updateThemeSwitch() {

    const isDark =
        document.body.classList.contains(
            "dark"
        );


    const switchElement =
        $("#themeSwitch");


    if (switchElement) {

        switchElement.classList.toggle(
            "dark",
            isDark
        );

    }

}


/* ============================================================
   TOAST
   ============================================================ */

let toastTimer = null;


function showToast(message, icon = "✓") {

    const toast = $("#toast");


    if (!toast) return;


    $("#toastMessage").textContent =
        message;

    $("#toastIcon").textContent =
        icon;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer = setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2600);

}


/* ============================================================
   SIDEBAR
   ============================================================ */

function openSidebar() {

    $("#sidebar")
        .classList.add("open");

    $("#sidebarOverlay")
        .classList.add("open");

}


function closeSidebar() {

    $("#sidebar")
        .classList.remove("open");

    $("#sidebarOverlay")
        .classList.remove("open");

}


/* ============================================================
   DROPDOWNS
   ============================================================ */

function closeDropdowns() {

    $("#notificationDropdown")
        ?.classList.remove("open");

    $("#profileDropdown")
        ?.classList.remove("open");

}


/* ============================================================
   PAGE NAVIGATION + BROWSER HISTORY
   ============================================================ */

function navigate(page, addHistory = true) {

    const validPages = [
        "overview",
        "notices",
        "events",
        "complaints",
        "resources",
        "announcements",
        "help"
    ];


    if (!validPages.includes(page)) {

        page = "overview";

    }


    state.page = page;


    /* Show correct page */

    $$(".page").forEach((section) => {

        section.classList.toggle(
            "active-page",
            section.id === `page-${page}`
        );

    });


    /* Active sidebar */

    $$(".nav-item[data-page]").forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });


    /* Top title */

    const titles = {

        overview:
            "Good morning, Versha 👋",

        notices:
            "Notices & updates",

        events:
            "Events & activities",

        complaints:
            "Complaints & tracking",

        resources:
            "Learning resources",

        announcements:
            "Announcements",

        help:
            "Help & support"

    };


    $("#pageTitle").textContent =
        titles[page];


    /* Browser history */

    if (addHistory) {

        const currentPage =
            history.state?.page;


        /*
         * Same page ko baar-baar history
         * mein add nahi karna.
         */

        if (currentPage !== page) {

            history.pushState(
                {
                    page: page,
                    dashboard: true
                },
                "",
                `#${page}`
            );

        }

    }


    closeDropdowns();

    closeSidebar();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ============================================================
   HISTORY INITIALIZATION
   ============================================================ */

function initializeHistory() {

    let currentHash =
        window.location.hash
            .replace("#", "")
            .trim();


    const validPages = [
        "overview",
        "notices",
        "events",
        "complaints",
        "resources",
        "announcements",
        "help"
    ];


    if (
        !validPages.includes(
            currentHash
        )
    ) {

        currentHash = "overview";

    }


    /*
     * Login ke baad dashboard ka first
     * history state create hota hai.
     */

    history.replaceState(
        {
            page: currentHash,
            dashboard: true
        },
        "",
        `#${currentHash}`
    );


    navigate(
        currentHash,
        false
    );

}


/* ============================================================
   BROWSER BACK / FORWARD
   ============================================================ */

function handleBrowserNavigation() {

    /*
     * Agar user logout kar chuka hai,
     * browser navigation dashboard ko
     * open nahi karegi.
     */

    if (!isAuthenticated()) {

        showLoginScreen();

        return;

    }


    let page =
        history.state?.page;


    const validPages = [
        "overview",
        "notices",
        "events",
        "complaints",
        "resources",
        "announcements",
        "help"
    ];


    /*
     * Hash se page recover.
     */

    if (
        !validPages.includes(page)
    ) {

        page =
            window.location.hash
                .replace("#", "")
                .trim();

    }


    /*
     * Invalid / empty state.
     */

    if (
        !validPages.includes(page)
    ) {

        /*
         * Overview ko current history
         * state bana dete hain.
         */

        history.pushState(
            {
                page: "overview",
                dashboard: true
            },
            "",
            "#overview"
        );


        navigate(
            "overview",
            false
        );


        return;

    }


    navigate(
        page,
        false
    );

}


/* ============================================================
   NOTIFICATIONS
   ============================================================ */

function renderNotifications() {

    const enabled =
        localStorage.getItem(
            STORAGE.notificationsEnabled
        ) !== "false";


    const list =
        $("#notificationList");


    if (!list) return;


    if (!enabled) {

        list.innerHTML = `

            <div class="notification-item">

                <div class="n-icon">
                    🔕
                </div>

                <div>

                    <strong>
                        Notifications disabled
                    </strong>

                    <p>
                        Enable notifications from Settings.
                    </p>

                </div>

            </div>

        `;


        $("#notificationBadge").style.display =
            "none";


        return;

    }


    list.innerHTML =
        notifications.map((notification) => `

            <div class="notification-item">

                <div class="n-icon">
                    ${notification.icon}
                </div>

                <div>

                    <strong>
                        ${notification.title}
                    </strong>

                    <p>
                        ${notification.text}
                    </p>

                </div>

            </div>

        `).join("");


    const read =
        localStorage.getItem(
            STORAGE.notificationsRead
        ) === "true";


    $("#notificationBadge").style.display =
        read ? "none" : "grid";

}


/* ============================================================
   OVERVIEW
   ============================================================ */

function renderOverview() {

    const overviewNotices =
        $("#overviewNotices");


    if (overviewNotices) {

        overviewNotices.innerHTML =
            notices.slice(0, 4)
                .map((notice) => `

                    <div
                        class="notice-row"
                        data-notice-id="${notice.id}"
                    >

                        <div class="notice-icon">
                            ${notice.icon}
                        </div>

                        <div class="notice-row-content">

                            <strong>
                                ${notice.title}
                            </strong>

                            <p>
                                ${notice.category}
                            </p>

                        </div>

                        <span class="notice-date">
                            ${notice.date}
                        </span>

                    </div>

                `)
                .join("");

    }


    const complaintData =
        getComplaints();


    if ($("#statNotices")) {

        $("#statNotices").textContent =
            notices.slice(0, 4).length;

    }


    if ($("#statComplaints")) {

        $("#statComplaints").textContent =
            complaintData.length;

    }


    if ($("#overviewEvents")) {

        $("#overviewEvents").innerHTML =
            events
                .slice(0, 3)
                .map(eventCard)
                .join("");

    }


    bindDynamicButtons();

}


/* ============================================================
   NOTICES
   ============================================================ */

function renderNotices() {

    const search =
        state.noticeSearch.toLowerCase();


    const filtered =
        notices.filter((notice) => {

            const matchesCategory =
                state.noticeFilter === "All" ||
                notice.category ===
                state.noticeFilter;


            const matchesSearch =
                notice.title
                    .toLowerCase()
                    .includes(search) ||

                notice.text
                    .toLowerCase()
                    .includes(search);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    const container =
        $("#noticeList");


    if (!container) return;


    if (filtered.length === 0) {

        container.innerHTML = `

            <div class="panel">

                <p
                    style="
                        color:var(--muted);
                        text-align:center;
                        padding:15px;
                    "
                >
                    No notices found.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        filtered
            .map((notice) => `

                <article
                    class="notice-card"
                    data-notice-open="${notice.id}"
                >

                    <div class="notice-icon">
                        ${notice.icon}
                    </div>

                    <div class="notice-card-content">

                        <div class="notice-card-top">

                            <span class="category-badge">
                                ${notice.category}
                            </span>

                            <span class="notice-date">
                                ${notice.date}
                            </span>

                        </div>

                        <h3>
                            ${notice.title}
                        </h3>

                        <p>
                            ${notice.text}
                        </p>

                    </div>

                </article>

            `)
            .join("");


    bindDynamicButtons();

}


/* ============================================================
   EVENTS
   ============================================================ */

function eventCard(event) {

    const registered =
        getRegisteredEvents()
            .includes(event.id);


    return `

        <article class="event-card">

            <div class="event-image">
                ${event.icon}
            </div>

            <div class="event-body">

                <div class="event-meta">

                    <span>
                        ${event.category}
                    </span>

                    <span>
                        ${event.date}
                    </span>

                </div>

                <h3>
                    ${event.title}
                </h3>

                <p>
                    ${event.description}
                </p>

                <div class="event-footer">

                    <span class="register-count">
                        ${event.time} • ${event.place}
                    </span>

                    <button
                        class="event-register ${
                            registered
                                ? "registered"
                                : ""
                        }"
                        data-register="${event.id}"
                    >

                        ${
                            registered
                                ? "Registered ✓"
                                : "Register"
                        }

                    </button>

                </div>

            </div>

        </article>

    `;

}


function renderEvents() {

    const search =
        state.eventSearch.toLowerCase();


    const filtered =
        events.filter((event) => {

            const matchesSearch =
                event.title
                    .toLowerCase()
                    .includes(search) ||

                event.description
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                state.eventCategory === "All" ||
                event.category ===
                state.eventCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    if ($("#eventList")) {

        $("#eventList").innerHTML =
            filtered
                .map(eventCard)
                .join("");

    }


    if ($("#overviewEvents")) {

        $("#overviewEvents").innerHTML =
            events
                .slice(0, 3)
                .map(eventCard)
                .join("");

    }


    if ($("#statEvents")) {

        $("#statEvents").textContent =
            events.length;

    }


    bindDynamicButtons();

}


/* ============================================================
   COMPLAINTS
   ============================================================ */

function renderComplaints() {

    const data =
        getComplaints();


    const search =
        state.complaintSearch.toLowerCase();


    const filtered =
        data.filter((complaint) => {

            return (

                complaint.title
                    .toLowerCase()
                    .includes(search)

                ||

                complaint.id
                    .toLowerCase()
                    .includes(search)

            );

        });


    const container =
        $("#complaintList");


    if (!container) return;


    if (filtered.length === 0) {

        container.innerHTML = `

            <div
                style="
                    padding:30px;
                    text-align:center;
                    color:var(--muted)
                "
            >

                No complaints found.

            </div>

        `;

    } else {

        container.innerHTML =
            filtered
                .map((complaint) => `

                    <div class="complaint-row">

                        <div class="complaint-title">

                            <strong>
                                ${complaint.title}
                            </strong>

                            <small>
                                ${complaint.id}
                                •
                                ${complaint.category}
                            </small>

                        </div>


                        <span
                            class="status ${
                                complaint.status ===
                                "Resolved"
                                    ? "resolved"
                                    : complaint.status ===
                                      "Pending"
                                    ? "pending"
                                    : "progress"
                            }"
                        >
                            ${complaint.status}
                        </span>


                        <span class="complaint-date">
                            ${complaint.date}
                        </span>


                        <span
                            class="complaint-date"
                            title="${complaint.description}"
                        >
                            View details
                        </span>

                    </div>

                `)
                .join("");

    }


    const total =
        data.length;


    const pending =
        data.filter(
            (c) =>
                c.status === "Pending"
        ).length;


    const progress =
        data.filter(
            (c) =>
                c.status === "In Progress"
        ).length;


    const resolved =
        data.filter(
            (c) =>
                c.status === "Resolved"
        ).length;


    if ($("#complaintTotal")) {

        $("#complaintTotal").textContent =
            total;

    }


    if ($("#complaintPending")) {

        $("#complaintPending").textContent =
            pending;

    }


    if ($("#complaintProgress")) {

        $("#complaintProgress").textContent =
            progress;

    }


    if ($("#complaintResolved")) {

        $("#complaintResolved").textContent =
            resolved;

    }


    if ($("#statComplaints")) {

        $("#statComplaints").textContent =
            total;

    }

}


/* ============================================================
   RESOURCES
   ============================================================ */

function renderResources() {

    const container =
        $("#resourceGrid");


    if (!container) return;


    container.innerHTML =
        resources
            .map((resource) => `

                <article class="resource-card">

                    <div class="resource-icon">
                        ${resource.icon}
                    </div>

                    <h3>
                        ${resource.title}
                    </h3>

                    <p>
                        ${resource.text}
                    </p>

                    <button
                        data-resource="${resource.title}"
                    >
                        ${resource.action} →
                    </button>

                </article>

            `)
            .join("");


    $$("[data-resource]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    showToast(
                        `${button.dataset.resource} opened`,
                        "📚"
                    );

                }
            );

        });

}


/* ============================================================
   ANNOUNCEMENTS
   ============================================================ */

function renderAnnouncements() {

    const container =
        $("#announcementList");


    if (!container) return;


    container.innerHTML =
        announcements
            .map((item) => `

                <article class="announcement-item">

                    <div class="announcement-icon">
                        ${item.icon}
                    </div>

                    <div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.text}
                        </p>

                    </div>

                    <time>
                        ${item.date}
                    </time>

                </article>

            `)
            .join("");

}


/* ============================================================
   MODALS
   ============================================================ */

function openModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.add(
            "open"
        );

    }

}


function closeModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.remove(
            "open"
        );

    }

}


/* ============================================================
   NOTICE DETAIL
   ============================================================ */

function openNotice(id) {

    const notice =
        notices.find(
            (item) =>
                item.id === id
        );


    if (!notice) return;


    const avatar =
        $(".profile-modal .big-avatar");


    const label =
        $(".profile-modal .modal-label");


    const title =
        $("#profileModalName");


    const subtitle =
        $(".profile-modal > p");


    const details =
        $(".profile-details");


    if (
        avatar &&
        label &&
        title &&
        subtitle &&
        details
    ) {

        avatar.textContent =
            notice.icon;


        label.textContent =
            notice.category;


        title.textContent =
            notice.title;


        subtitle.textContent =
            "Published: " +
            notice.date;


        details.innerHTML = `

            <div>

                <small>
                    Category
                </small>

                <strong>
                    ${notice.category}
                </strong>

            </div>


            <div>

                <small>
                    Published
                </small>

                <strong>
                    ${notice.date}
                </strong>

            </div>


            <div
                style="
                    grid-column:1/-1
                "
            >

                <small>
                    Notice
                </small>

                <strong>
                    ${notice.text}
                </strong>

            </div>

        `;


        openModal(
            "profileModal"
        );

    }

}


/* ============================================================
   PROFILE MODAL
   ============================================================ */

function restoreProfileModal() {

    const avatar =
        $(".profile-modal .big-avatar");


    const label =
        $(".profile-modal .modal-label");


    const title =
        $("#profileModalName");


    const subtitle =
        $(".profile-modal > p");


    const details =
        $(".profile-details");


    if (avatar) {

        avatar.textContent =
            "VD";

    }


    if (label) {

        label.textContent =
            "MY ACCOUNT";

    }


    if (title) {

        title.textContent =
            "Versha Dewangan";

    }


    if (subtitle) {

        subtitle.textContent =
            "B.Tech CSE • Student";

    }


    if (details) {

        details.innerHTML = `

            <div>

                <small>
                    Email
                </small>

                <strong>
                    student@campus.edu
                </strong>

            </div>


            <div>

                <small>
                    Semester
                </small>

                <strong>
                    4th Semester
                </strong>

            </div>


            <div>

                <small>
                    Department
                </small>

                <strong>
                    Computer Science
                </strong>

            </div>


            <div>

                <small>
                    Status
                </small>

                <strong class="active-text">
                    Active
                </strong>

            </div>

        `;

    }

}


/* ============================================================
   DYNAMIC BUTTONS
   ============================================================ */

function bindDynamicButtons() {

    /* ---------------- EVENT REGISTER ---------------- */

    $$("[data-register]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const eventId =
                        button.dataset.register;


                    const selectedEvent =
                        events.find(
                            (event) =>
                                event.id ===
                                eventId
                        );


                    if (!selectedEvent) {
                        return;
                    }


                    let registered =
                        getRegisteredEvents();


                    if (
                        !registered.includes(
                            eventId
                        )
                    ) {

                        registered.push(
                            eventId
                        );


                        saveRegisteredEvents(
                            registered
                        );


                        showToast(
                            `Registered for ${selectedEvent.title}`,
                            "✓"
                        );


                    } else {

                        registered =
                            registered.filter(
                                (id) =>
                                    id !==
                                    eventId
                            );


                        saveRegisteredEvents(
                            registered
                        );


                        showToast(
                            "Registration cancelled",
                            "↩"
                        );

                    }


                    renderEvents();

                }
            );

        });


    /* ---------------- NOTICE CARDS ---------------- */

    $$("[data-notice-open]")
        .forEach((card) => {

            card.addEventListener(
                "click",
                () => {

                    openNotice(
                        Number(
                            card.dataset.noticeOpen
                        )
                    );

                }
            );

        });


    /* ---------------- OVERVIEW NOTICE ROWS ---------------- */

    $$("[data-notice-id]")
        .forEach((row) => {

            row.addEventListener(
                "click",
                () => {

                    openNotice(
                        Number(
                            row.dataset.noticeId
                        )
                    );

                }
            );

        });

}


/* ============================================================
   SETUP
   ============================================================ */

function setup() {

    /* ---------------- THEME ---------------- */

    applyTheme();


    /* ---------------- RENDER ---------------- */

    renderNotifications();

    renderOverview();

    renderNotices();

    renderEvents();

    renderComplaints();

    renderResources();

    renderAnnouncements();


    /* ---------------- AUTH STATE ---------------- */

    if (isAuthenticated()) {

        showDashboard();

        initializeHistory();

    } else {

        showLoginScreen();

        /*
         * Login screen ke liye normal state.
         */

        history.replaceState(
            {
                page: "login",
                dashboard: false
            },
            "",
            window.location.pathname +
            window.location.search
        );

    }


    /* ========================================================
       LOGIN
       ======================================================== */

    $("#loginForm")
        .addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const email =
                    $("#loginEmail")
                        .value
                        .trim();


                const password =
                    $("#loginPassword")
                        .value
                        .trim();


                const message =
                    $("#loginMessage");


                if (
                    email ===
                        "student@campus.edu"
                    &&
                    password ===
                        "123456"
                ) {

                    localStorage.setItem(
                        STORAGE.auth,
                        "true"
                    );


                    message.textContent =
                        "";


                    showDashboard();


                    /*
                     * Dashboard ki initial
                     * history state.
                     */

                    history.replaceState(
                        {
                            page: "overview",
                            dashboard: true
                        },
                        "",
                        "#overview"
                    );


                    navigate(
                        "overview",
                        false
                    );


                    showToast(
                        "Welcome back, Versha!",
                        "👋"
                    );


                } else {

                    message.className =
                        "form-message error";


                    message.textContent =
                        "Invalid login. Use the demo credentials shown below.";

                }

            }
        );


    /* ========================================================
       PASSWORD SHOW / HIDE
       ======================================================== */

    $("#togglePassword")
        .addEventListener(
            "click",
            () => {

                const input =
                    $("#loginPassword");


                if (
                    input.type ===
                    "password"
                ) {

                    input.type =
                        "text";


                    $("#togglePassword")
                        .textContent =
                        "Hide";


                } else {

                    input.type =
                        "password";


                    $("#togglePassword")
                        .textContent =
                        "Show";

                }

            }
        );


    /* ========================================================
       SIDEBAR NAVIGATION
       ======================================================== */

    $$(".nav-item[data-page]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    navigate(
                        button.dataset.page
                    );

                }
            );

        });


    /* ========================================================
       MOBILE SIDEBAR
       ======================================================== */

    $("#openSidebar")
        .addEventListener(
            "click",
            openSidebar
        );


    $("#closeSidebar")
        .addEventListener(
            "click",
            closeSidebar
        );


    $("#sidebarOverlay")
        .addEventListener(
            "click",
            closeSidebar
        );


    /* ========================================================
       QUICK ACTIONS
       ======================================================== */

    $$("[data-action]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.action;


                    if (
                        action ===
                        "complaint"
                    ) {

                        openModal(
                            "complaintModal"
                        );


                    } else {

                        navigate(
                            action
                        );

                    }

                }
            );

        });


    /* ========================================================
       THEME
       ======================================================== */

    $("#themeToggle")
        .addEventListener(
            "click",
            setTheme
        );


    $("#settingsThemeToggle")
        .addEventListener(
            "click",
            setTheme
        );


    /* ========================================================
       NOTIFICATION DROPDOWN
       ======================================================== */

    $("#notificationButton")
        .addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                $("#notificationDropdown")
                    .classList.toggle(
                        "open"
                    );


                $("#profileDropdown")
                    .classList.remove(
                        "open"
                    );

            }
        );


    /* ========================================================
       PROFILE DROPDOWN
       ======================================================== */

    $("#profileButton")
        .addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                $("#profileDropdown")
                    .classList.toggle(
                        "open"
                    );


                $("#notificationDropdown")
                    .classList.remove(
                        "open"
                    );

            }
        );


    /* ========================================================
       CLICK OUTSIDE DROPDOWNS
       ======================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !event.target.closest(
                    ".dropdown-wrapper"
                )
            ) {

                closeDropdowns();

            }

        }
    );


    /* ========================================================
       MARK NOTIFICATIONS READ
       ======================================================== */

    $("#markRead")
        .addEventListener(
            "click",
            () => {

                localStorage.setItem(
                    STORAGE.notificationsRead,
                    "true"
                );


                renderNotifications();


                showToast(
                    "Notifications marked as read",
                    "✓"
                );

            }
        );


    /* ========================================================
       PROFILE
       ======================================================== */

    $("#sidebarProfileBtn")
        .addEventListener(
            "click",
            () => {

                restoreProfileModal();

                openModal(
                    "profileModal"
                );

            }
        );


    $$("[data-profile='profile']")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    closeDropdowns();

                    restoreProfileModal();

                    openModal(
                        "profileModal"
                    );

                }
            );

        });


    $$("[data-profile='settings']")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    closeDropdowns();

                    openModal(
                        "settingsModal"
                    );

                }
            );

        });


    /* ========================================================
       LOGOUT
       ======================================================== */

    $("#logoutBtn")
        .addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    STORAGE.auth
                );


                closeDropdowns();

                closeSidebar();


                /*
                 * Login par wapas.
                 */

                showLoginScreen();


                /*
                 * Dashboard history ko login
                 * state se replace kar dete hain.
                 */

                history.replaceState(
                    {
                        page: "login",
                        dashboard: false
                    },
                    "",
                    window.location.pathname +
                    window.location.search
                );


                $("#loginForm").reset();


                showToast(
                    "Logged out successfully",
                    "↪"
                );

            }
        );


    /* ========================================================
       MODAL CLOSE BUTTONS
       ======================================================== */

    $$("[data-close]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.close;


                    closeModal(id);


                    if (
                        id ===
                        "profileModal"
                    ) {

                        restoreProfileModal();

                    }

                }
            );

        });


    /* ========================================================
       CLICK OUTSIDE MODAL
       ======================================================== */

    $$(".modal")
        .forEach((modal) => {

            modal.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target ===
                        modal
                    ) {

                        modal.classList.remove(
                            "open"
                        );


                        if (
                            modal.id ===
                            "profileModal"
                        ) {

                            restoreProfileModal();

                        }

                    }

                }
            );

        });


    /* ========================================================
       ESC KEY
       ======================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {

                closeDropdowns();


                $$(".modal.open")
                    .forEach((modal) => {

                        modal.classList.remove(
                            "open"
                        );

                    });


                closeSidebar();

            }

        }
    );


    /* ========================================================
       NOTICE SEARCH
       ======================================================== */

    $("#noticeSearch")
        .addEventListener(
            "input",
            (event) => {

                state.noticeSearch =
                    event.target.value;


                renderNotices();

            }
        );


    /* ========================================================
       NOTICE FILTER
       ======================================================== */

    $$("#noticeFilters .filter-pill")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    $$("#noticeFilters .filter-pill")
                        .forEach(
                            (item) => {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    state.noticeFilter =
                        button.dataset.filter;


                    renderNotices();

                }
            );

        });


    /* ========================================================
       EVENT SEARCH
       ======================================================== */

    $("#eventSearch")
        .addEventListener(
            "input",
            (event) => {

                state.eventSearch =
                    event.target.value;


                renderEvents();

            }
        );


    /* ========================================================
       EVENT CATEGORY
       ======================================================== */

    $("#eventCategory")
        .addEventListener(
            "change",
            (event) => {

                state.eventCategory =
                    event.target.value;


                renderEvents();

            }
        );


    /* ========================================================
       COMPLAINT SEARCH
       ======================================================== */

    $("#complaintSearch")
        .addEventListener(
            "input",
            (event) => {

                state.complaintSearch =
                    event.target.value;


                renderComplaints();

            }
        );


    /* ========================================================
       NEW COMPLAINT
       ======================================================== */

    $("#newComplaint")
        .addEventListener(
            "click",
            () => {

                openModal(
                    "complaintModal"
                );

            }
        );


    /* ========================================================
       COMPLAINT SUBMIT
       ======================================================== */

    $("#complaintForm")
        .addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const title =
                    $("#complaintTitle")
                        .value
                        .trim();


                const category =
                    $("#complaintCategory")
                        .value;


                const description =
                    $("#complaintDescription")
                        .value
                        .trim();


                if (
                    !title ||
                    !category ||
                    !description
                ) {

                    return;

                }


                const complaints =
                    getComplaints();


                /*
                 * Unique complaint ID.
                 */

                const id =
                    `CMP-${Date.now()
                        .toString()
                        .slice(-6)}`;


                const today =
                    new Date()
                        .toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric"
                            }
                        );


                complaints.unshift({

                    id: id,

                    title: title,

                    category: category,

                    description:
                        description,

                    status:
                        "Pending",

                    date:
                        today

                });


                saveComplaints(
                    complaints
                );


                renderComplaints();

                renderOverview();


                $("#complaintMessage")
                    .className =
                    "form-message success";


                $("#complaintMessage")
                    .textContent =
                    `Complaint ${id} submitted successfully.`;


                showToast(
                    `Complaint ${id} submitted`,
                    "✓"
                );


                setTimeout(() => {

                    closeModal(
                        "complaintModal"
                    );


                    $("#complaintForm")
                        .reset();


                    $("#complaintMessage")
                        .textContent =
                        "";


                }, 900);

            }
        );


    /* ========================================================
       COPY SUPPORT EMAIL
       ======================================================== */

    $("#copySupport")
        .addEventListener(
            "click",
            async () => {

                const email =
                    "campus-support@campus.edu";


                try {

                    await navigator.clipboard
                        .writeText(email);


                    showToast(
                        "Support email copied",
                        "📋"
                    );


                } catch {

                    showToast(
                        email,
                        "✉️"
                    );

                }

            }
        );


    /* ========================================================
       NOTIFICATION SETTINGS
       ======================================================== */

    $("#settingsNotifyToggle")
        .addEventListener(
            "click",
            () => {

                const enabled =
                    localStorage.getItem(
                        STORAGE.notificationsEnabled
                    ) !== "false";


                const newValue =
                    !enabled;


                localStorage.setItem(
                    STORAGE.notificationsEnabled,
                    String(newValue)
                );


                $("#settingsNotifyToggle")
                    .textContent =
                    newValue
                        ? "On"
                        : "Off";


                $("#settingsNotifyToggle")
                    .classList.toggle(
                        "active",
                        newValue
                    );


                renderNotifications();


                showToast(
                    newValue
                        ? "Notifications enabled"
                        : "Notifications disabled",

                    newValue
                        ? "🔔"
                        : "🔕"
                );

            }
        );


    /* ========================================================
       INITIAL NOTIFICATION SETTING
       ======================================================== */

    const notifyEnabled =
        localStorage.getItem(
            STORAGE.notificationsEnabled
        ) !== "false";


    $("#settingsNotifyToggle")
        .textContent =
        notifyEnabled
            ? "On"
            : "Off";


    $("#settingsNotifyToggle")
        .classList.toggle(
            "active",
            notifyEnabled
        );


    /* ========================================================
       BROWSER BACK / FORWARD
       ======================================================== */

    window.addEventListener(
        "popstate",
        handleBrowserNavigation
    );

}


/* ============================================================
   START APP
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    setup
);