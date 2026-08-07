/* =========================================================
   CampusConnect - Events
   API Events + PSAIAC Academic Calendar 2026-27
========================================================= */

let allEvents = [];




const academicCalendarEvents = [

    

    {
        id: "calendar-001",
        category: "Academic",
        title: "Odd Semester - DAC 1",
        description: "Odd Semester - DAC 1",
        event_date: "2026-05-22",
        event_time: "22 May 2026 to 30 May 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-002",
        category: "Academic",
        title: "Odd Semester - BoS",
        description: "Odd Semester - Board of Studies",
        event_date: "2026-05-27",
        event_time: "27 May 2026 to 10 June 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       JULY 2026
    ========================= */

    {
        id: "calendar-003",
        category: "FDP",
        title: "FDP on Java Programming for Problem Solving and Application Development",
        description: "Faculty Development Programme on Java Programming for Problem Solving and Application Development.",
        event_date: "2026-07-06",
        event_time: "6 July 2026 to 10 July 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-004",
        category: "FDP",
        title: "CUDA to Cloud: Accelerating AI through Supercomputing and Advanced Computing",
        description: "Hands-on Faculty Development Programme on CUDA to Cloud.",
        event_date: "2026-07-20",
        event_time: "20 July 2026 to 24 July 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-005",
        category: "Orientation",
        title: "Registration and Orientation Programme - First-Year B.Tech",
        description: "Registration and Orientation Programme for all First-Year B.Tech Programs.",
        event_date: "2026-07-22",
        event_time: "22 July 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       AUGUST 2026
    ========================= */

    {
        id: "calendar-006",
        category: "Academic",
        title: "Commencement of Odd Semester Classes",
        description: "Registration and commencement of classes for the Odd Semester for senior batches and First Year B.Tech Programs.",
        event_date: "2026-08-05",
        event_time: "5 August 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-007",
        category: "Hackathon",
        title: "Ignite2SIH – 2026: Pre SIH Internal Hackathon",
        description: "Internal hackathon conducted as part of Ignite2SIH 2026.",
        event_date: "2026-08-08",
        event_time: "8 August 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-008",
        category: "Project Review",
        title: "Mini Project – Review – I (CA-01)",
        description: "First mini project review.",
        event_date: "2026-08-08",
        event_time: "8 August 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-009",
        category: "Holiday",
        title: "Independence Day",
        description: "Independence Day Holiday - Flag Hoisting in the University.",
        event_date: "2026-08-15",
        event_time: "15 August 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-010",
        category: "Holiday",
        title: "Eid Milad",
        description: "Eid Milad Holiday.",
        event_date: "2026-08-26",
        event_time: "26 August 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-011",
        category: "Project Review",
        title: "Mini Project – Review – II (CA-02)",
        description: "Second mini project review.",
        event_date: "2026-08-29",
        event_time: "29 August 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-012",
        category: "Cultural",
        title: "Fresher's Day - AARAMBH",
        description: "Fresher's Day celebration for new students.",
        event_date: "2026-08-29",
        event_time: "29 August 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       SEPTEMBER 2026
    ========================= */

    {
        id: "calendar-013",
        category: "Orientation",
        title: "First-Year Postgraduate Orientation Programme",
        description: "Registration and Orientation Programme for all First-Year Postgraduate programs.",
        event_date: "2026-09-03",
        event_time: "3 September 2026 to 9 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-014",
        category: "Celebration",
        title: "Teachers' Day",
        description: "Teachers' Day celebration.",
        event_date: "2026-09-05",
        event_time: "5 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-015",
        category: "Awareness",
        title: "International Literacy Day",
        description: "International Literacy Day.",
        event_date: "2026-09-08",
        event_time: "8 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-016",
        category: "FDP",
        title: "Mastering Reflection Agents in AI",
        description: "FDP on Mastering Reflection Agents in AI: Unlocking the Power of LLMs with LangGraph.",
        event_date: "2026-09-09",
        event_time: "9 September 2026 to 12 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-017",
        category: "Academic",
        title: "Commencement of First-Year Postgraduate Classes",
        description: "Commencement of classes for all First-Year Postgraduate programs.",
        event_date: "2026-09-10",
        event_time: "10 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-018",
        category: "Examination",
        title: "CA-1 Unit Test",
        description: "CA-1 Unit Test.",
        event_date: "2026-09-09",
        event_time: "9 September 2026 to 12 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-019",
        category: "Holiday",
        title: "Vinayaka Chaturthi",
        description: "Vinayaka Chaturthi Holiday.",
        event_date: "2026-09-14",
        event_time: "14 September 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-020",
        category: "Celebration",
        title: "Engineer's Day",
        description: "Engineer's Day.",
        event_date: "2026-09-15",
        event_time: "15 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-021",
        category: "Academic",
        title: "Odd Semester - CCM I",
        description: "Odd Semester CCM I.",
        event_date: "2026-09-15",
        event_time: "15 September 2026 to 18 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-022",
        category: "Examination",
        title: "Mid-Term Lab Exam",
        description: "Mid-term laboratory examinations.",
        event_date: "2026-09-21",
        event_time: "21 September 2026 to 26 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-023",
        category: "Meeting",
        title: "Parent Teachers Meeting - I",
        description: "First Parent Teachers Meeting.",
        event_date: "2026-09-26",
        event_time: "26 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-024",
        category: "Project Review",
        title: "Mini Project – Review – III (CA-03)",
        description: "Third mini project review.",
        event_date: "2026-09-26",
        event_time: "26 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-025",
        category: "Cultural",
        title: "Cultural Carnival - Kal-Utsav",
        description: "Cultural Carnival.",
        event_date: "2026-09-26",
        event_time: "26 September 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       OCTOBER 2026
    ========================= */

    {
        id: "calendar-026",
        category: "Holiday",
        title: "Gandhi Jayanti",
        description: "Gandhi Jayanti Holiday.",
        event_date: "2026-10-02",
        event_time: "2 October 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-027",
        category: "Examination",
        title: "Mid-Term Examinations - Odd Semester",
        description: "Mid-Term Examinations for senior Undergraduate and Postgraduate programs.",
        event_date: "2026-10-05",
        event_time: "5 October 2026 to 9 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-028",
        category: "Technology",
        title: "Presidency AI Recordathon 2026",
        description: "Theme: Empowering Innovation through Artificial Intelligence and Emerging Technologies.",
        event_date: "2026-10-09",
        event_time: "9 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-029",
        category: "Holiday",
        title: "Mahalaya Amavasye",
        description: "Mahalaya Amavasye Holiday.",
        event_date: "2026-10-10",
        event_time: "10 October 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-030",
        category: "Tech Fest",
        title: "CyberStorm 2026",
        description: "Cybersecurity Tech Week.",
        event_date: "2026-10-12",
        event_time: "12 October 2026 to 16 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-031",
        category: "Holiday",
        title: "Mahanavami & Vijayadashmi",
        description: "Mahanavami and Vijayadashmi Holiday.",
        event_date: "2026-10-20",
        event_time: "20 October 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-032",
        category: "Sports",
        title: "Presidency Premier League",
        description: "Intra Sport Event.",
        event_date: "2026-10-21",
        event_time: "21 October 2026 to 25 November 2026",
        venue: "University Sports Ground",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-033",
        category: "Meeting",
        title: "Parent Teachers Meeting - II",
        description: "Second Parent Teachers Meeting.",
        event_date: "2026-10-24",
        event_time: "24 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-034",
        category: "Academic",
        title: "Remedial Classes - Odd Semester Day 1",
        description: "Remedial Classes for Odd Semester.",
        event_date: "2026-10-24",
        event_time: "24 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-035",
        category: "Alumni",
        title: "Annual Alumni Meet - Samudgam",
        description: "Annual Alumni Meet.",
        event_date: "2026-10-24",
        event_time: "24 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-036",
        category: "Project Review",
        title: "Mini Project – Review – IV (CA-04)",
        description: "Fourth mini project review.",
        event_date: "2026-10-24",
        event_time: "24 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-037",
        category: "Academic",
        title: "International Teaching Week - 2026",
        description: "International Teaching Week.",
        event_date: "2026-10-26",
        event_time: "26 October 2026 to 30 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-038",
        category: "Conference",
        title: "ISAC 2026",
        description: "First International Conference on Intelligent Systems and Ambient Communication.",
        event_date: "2026-10-29",
        event_time: "29 October 2026 to 30 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-039",
        category: "Education",
        title: "Global Education Fair - 2026",
        description: "Global Education Fair.",
        event_date: "2026-10-31",
        event_time: "31 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-040",
        category: "Examination",
        title: "CA-2 Unit Test",
        description: "CA-2 Unit Test.",
        event_date: "2026-10-31",
        event_time: "31 October 2026 to 3 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-041",
        category: "Academic",
        title: "Remedial Classes - Odd Semester Day 2",
        description: "Remedial Classes for Odd Semester.",
        event_date: "2026-10-31",
        event_time: "31 October 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       NOVEMBER 2026
    ========================= */

    {
        id: "calendar-042",
        category: "Holiday",
        title: "Kannada Rajyotsava",
        description: "Kannada Rajyotsava Holiday.",
        event_date: "2026-11-01",
        event_time: "1 November 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-043",
        category: "Academic",
        title: "Pre-Registration for Even Semester 2026–27",
        description: "Pre-Registration for the Even Semester for all programs.",
        event_date: "2026-11-02",
        event_time: "2 November 2026 to 13 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-044",
        category: "Holiday",
        title: "Naraka Chaturdashi",
        description: "Naraka Chaturdashi Holiday.",
        event_date: "2026-11-08",
        event_time: "8 November 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-045",
        category: "Academic",
        title: "Odd Semester - CCM II",
        description: "Odd Semester CCM II.",
        event_date: "2026-11-09",
        event_time: "9 November 2026 to 13 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-046",
        category: "Holiday",
        title: "Balipadyami / Diwali",
        description: "Balipadyami and Diwali Holiday.",
        event_date: "2026-11-10",
        event_time: "10 November 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-047",
        category: "Academic",
        title: "Remedial Classes - Odd Semester Day 3",
        description: "Remedial Classes for Odd Semester.",
        event_date: "2026-11-14",
        event_time: "14 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-048",
        category: "Examination",
        title: "Mid-Term Examinations - First-Year Postgraduate",
        description: "Mid-Term Examinations for all First-Year Postgraduate programs.",
        event_date: "2026-11-16",
        event_time: "16 November 2026 to 20 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-049",
        category: "Academic",
        title: "Odd Semester - DAC 2",
        description: "Odd Semester DAC 2.",
        event_date: "2026-11-19",
        event_time: "19 November 2026 to 28 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-050",
        category: "Examination",
        title: "Mini Project – Final Viva (CA-05)",
        description: "Final Mini Project Viva.",
        event_date: "2026-11-20",
        event_time: "20 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-051",
        category: "University",
        title: "Convocation",
        description: "University Convocation. Date is tentative and subject to confirmation.",
        event_date: "2026-11-28",
        event_time: "28 November 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       DECEMBER 2026
    ========================= */

    {
        id: "calendar-052",
        category: "Academic",
        title: "Last Day of Instruction - Odd Semester",
        description: "Last Day of Instruction for senior Undergraduate and Postgraduate batches.",
        event_date: "2026-12-01",
        event_time: "1 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-053",
        category: "Expo",
        title: "9th Innovative Project Expo",
        description: "Innovative Project Expo.",
        event_date: "2026-12-02",
        event_time: "2 December 2026 & 3 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-054",
        category: "Examination",
        title: "End-Term Examinations - Odd Semester",
        description: "End-Term Examinations including Lab Exams for senior Undergraduate and Postgraduate programs.",
        event_date: "2026-12-07",
        event_time: "7 December 2026 to 30 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-055",
        category: "FDP",
        title: "Generative AI and Large Language Models Using NVIDIA DGX Platforms",
        description: "AICTE ATAL Sponsored Faculty Development Program.",
        event_date: "2026-12-07",
        event_time: "7 December 2026 to 12 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-056",
        category: "FDP",
        title: "CyberVerse 2026",
        description: "FDP on AI-Powered Security, Threat Intelligence & Digital Trust.",
        event_date: "2026-12-14",
        event_time: "14 December 2026 to 18 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-057",
        category: "FDP",
        title: "Edge Intelligence",
        description: "FDP on Deploying AI Models on IoT Devices.",
        event_date: "2026-12-14",
        event_time: "14 December 2026 to 18 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-058",
        category: "Academic",
        title: "Even Semester - DAC 1",
        description: "Even Semester DAC 1.",
        event_date: "2026-12-15",
        event_time: "15 December 2026 to 26 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-059",
        category: "Conference",
        title: "3rd International Conference on Responsible Artificial Intelligence",
        description: "ICRAI in association with Cardiff Metropolitan University, UK.",
        event_date: "2026-12-17",
        event_time: "17 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-060",
        category: "Academic",
        title: "Even Semester - BoS",
        description: "Even Semester Board of Studies.",
        event_date: "2026-12-23",
        event_time: "23 December 2026 to 31 December 2026",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-061",
        category: "Holiday",
        title: "Christmas",
        description: "Christmas Holiday.",
        event_date: "2026-12-25",
        event_time: "25 December 2026",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       JANUARY 2027
    ========================= */

    {
        id: "calendar-062",
        category: "Holiday",
        title: "New Year",
        description: "New Year Holiday.",
        event_date: "2027-01-01",
        event_time: "1 January 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-063",
        category: "Academic",
        title: "Last Day of Instruction - First-Year Postgraduate",
        description: "Last Day of Instruction for First-Year Postgraduate programs.",
        event_date: "2027-01-06",
        event_time: "6 January 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-064",
        category: "Examination",
        title: "End-Term Examinations - First-Year Postgraduate",
        description: "End-Term Examinations including Lab Exams.",
        event_date: "2027-01-07",
        event_time: "7 January 2027 to 14 January 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-065",
        category: "Celebration",
        title: "National Youth Day",
        description: "National Youth Day.",
        event_date: "2027-01-12",
        event_time: "12 January 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-066",
        category: "Holiday",
        title: "Makara Sankranti",
        description: "Makara Sankranti Holiday.",
        event_date: "2027-01-15",
        event_time: "15 January 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-067",
        category: "Academic",
        title: "Commencement of Even Semester Classes",
        description: "Registration and commencement of classes for the Even Semester for all Undergraduate and Postgraduate Programs.",
        event_date: "2027-01-18",
        event_time: "18 January 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-068",
        category: "Academic",
        title: "Declaration of Odd Semester Results",
        description: "Declaration of results of End-Term Examinations for senior batches and First Year B.Tech Programs.",
        event_date: "2027-01-25",
        event_time: "25 January 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-069",
        category: "Holiday",
        title: "Republic Day",
        description: "Republic Day Holiday.",
        event_date: "2027-01-26",
        event_time: "26 January 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       FEBRUARY 2027
    ========================= */

    {
        id: "calendar-070",
        category: "Celebration",
        title: "Founder's Day",
        description: "Founder's Day celebration.",
        event_date: "2027-02-03",
        event_time: "3 February 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-071",
        category: "Academic",
        title: "First-Year Postgraduate Results",
        description: "Declaration of results of End-Term Examinations for First-Year Postgraduate programs.",
        event_date: "2027-02-04",
        event_time: "4 February 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-072",
        category: "Examination",
        title: "Make-up Examinations - Odd Semester",
        description: "Make-up Examinations for senior batches, First Year B.Tech and First-Year Postgraduate programs.",
        event_date: "2027-02-08",
        event_time: "8 February 2027 to 19 February 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-073",
        category: "Sports",
        title: "UDAAN - Inter College Sports Fest",
        description: "Inter College Sports Fest.",
        event_date: "2027-02-16",
        event_time: "16 February 2027 to 19 February 2027",
        venue: "University Sports Ground",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-074",
        category: "Cultural",
        title: "Ethnic Day",
        description: "Ethnic Day celebration.",
        event_date: "2027-02-27",
        event_time: "27 February 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-075",
        category: "Science",
        title: "National Science Day",
        description: "National Science Day.",
        event_date: "2027-02-28",
        event_time: "28 February 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       MARCH 2027
    ========================= */

    {
        id: "calendar-076",
        category: "Academic",
        title: "Declaration of Make-up Examination Results",
        description: "Declaration of results of Make-up Examinations for the Odd Semester.",
        event_date: "2027-03-01",
        event_time: "1 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-077",
        category: "Awareness",
        title: "Zero Discrimination Day",
        description: "Zero Discrimination Day.",
        event_date: "2027-03-01",
        event_time: "1 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-078",
        category: "Awareness",
        title: "World Wildlife Day",
        description: "World Wildlife Day.",
        event_date: "2027-03-03",
        event_time: "3 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-079",
        category: "Holiday",
        title: "Maha Shivaratri",
        description: "Maha Shivaratri Holiday.",
        event_date: "2027-03-06",
        event_time: "6 March 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-080",
        category: "Awareness",
        title: "International Women's Day",
        description: "International Women's Day.",
        event_date: "2027-03-08",
        event_time: "8 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-081",
        category: "Holiday",
        title: "Ramzan",
        description: "Ramzan Holiday.",
        event_date: "2027-03-10",
        event_time: "10 March 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-082",
        category: "Examination",
        title: "Mid-Term Examinations - Even Semester",
        description: "Mid-Term Examinations for all Undergraduate and Postgraduate Programs.",
        event_date: "2027-03-15",
        event_time: "15 March 2027 to 19 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-083",
        category: "Awareness",
        title: "World Water Day",
        description: "World Water Day.",
        event_date: "2027-03-22",
        event_time: "22 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-084",
        category: "Holiday",
        title: "Good Friday",
        description: "Good Friday Holiday.",
        event_date: "2027-03-26",
        event_time: "26 March 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-085",
        category: "Academic",
        title: "Remedial Classes - Even Semester Day 1",
        description: "Remedial Classes for Even Semester.",
        event_date: "2027-03-27",
        event_time: "27 March 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       APRIL 2027
    ========================= */

    {
        id: "calendar-086",
        category: "Academic",
        title: "Even Semester - DAC 2",
        description: "Even Semester DAC 2.",
        event_date: "2027-04-03",
        event_time: "3 April 2027 to 12 May 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-087",
        category: "Academic",
        title: "Pre-Registration for Odd Semester 2027–28",
        description: "Pre-Registration for Odd Semester of Academic Year 2027–28.",
        event_date: "2027-04-05",
        event_time: "5 April 2027 to 16 April 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-088",
        category: "Awareness",
        title: "World Health Day",
        description: "World Health Day.",
        event_date: "2027-04-07",
        event_time: "7 April 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-089",
        category: "Holiday",
        title: "Ugadi",
        description: "Ugadi Holiday.",
        event_date: "2027-04-07",
        event_time: "7 April 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-090",
        category: "Academic",
        title: "Remedial Classes - Even Semester Day 2",
        description: "Remedial Classes for Even Semester.",
        event_date: "2027-04-10",
        event_time: "10 April 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-091",
        category: "Holiday",
        title: "Ambedkar Jayanthi",
        description: "Ambedkar Jayanthi Holiday.",
        event_date: "2027-04-14",
        event_time: "14 April 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-092",
        category: "Awareness",
        title: "Earth Day",
        description: "Earth Day.",
        event_date: "2027-04-22",
        event_time: "22 April 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-093",
        category: "Cultural",
        title: "Euphoria - Intra Collegiate Cultural Competition",
        description: "Intra Collegiate Cultural Competition.",
        event_date: "2027-04-24",
        event_time: "24 April 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-094",
        category: "Academic",
        title: "Remedial Classes - Even Semester Day 3",
        description: "Remedial Classes for Even Semester.",
        event_date: "2027-04-24",
        event_time: "24 April 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       MAY 2027
    ========================= */

    {
        id: "calendar-095",
        category: "Holiday",
        title: "May Day",
        description: "May Day Holiday.",
        event_date: "2027-05-01",
        event_time: "1 May 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-096",
        category: "Academic",
        title: "Instructional Day - Wednesday Time Table",
        description: "Instructional Day following Wednesday timetable.",
        event_date: "2027-05-08",
        event_time: "8 May 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-097",
        category: "Technology",
        title: "National Technology Day",
        description: "National Technology Day.",
        event_date: "2027-05-11",
        event_time: "11 May 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-098",
        category: "Expo",
        title: "10th Innovative Project Expo",
        description: "Innovative Project Expo.",
        event_date: "2027-05-12",
        event_time: "12 May 2027 & 13 May 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-099",
        category: "Academic",
        title: "Last Day of Instruction - Even Semester",
        description: "Last Day of Instruction for all Undergraduate and Postgraduate Programs.",
        event_date: "2027-05-14",
        event_time: "14 May 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-100",
        category: "Holiday",
        title: "Bakrid",
        description: "Bakrid Holiday.",
        event_date: "2027-05-17",
        event_time: "17 May 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-101",
        category: "Academic",
        title: "Notification and Pre-Registration - Summer Term",
        description: "Notification and Pre-Registration for Summer Term Courses.",
        event_date: "2027-05-18",
        event_time: "18 May 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-102",
        category: "Examination",
        title: "End-Term Examinations - Even Semester",
        description: "End-Term Examinations including Lab Exams for all Undergraduate and Postgraduate Programs.",
        event_date: "2027-05-24",
        event_time: "24 May 2027 to 12 June 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       JUNE 2027
    ========================= */

    {
        id: "calendar-103",
        category: "Awareness",
        title: "World Environment Day",
        description: "World Environment Day.",
        event_date: "2027-06-05",
        event_time: "5 June 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-104",
        category: "Conference",
        title: "ICCAMS-2027",
        description: "3rd International Conference on New Frontiers in Communication, Automation, Management and Security.",
        event_date: "2027-06-11",
        event_time: "11 June 2027 to 12 June 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-105",
        category: "Holiday",
        title: "Muharram",
        description: "Muharram Holiday.",
        event_date: "2027-06-15",
        event_time: "15 June 2027",
        venue: "University Campus",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-106",
        category: "Academic",
        title: "Commencement of Summer Term Classes",
        description: "Registration and commencement of Summer Term classes for all Schools.",
        event_date: "2027-06-16",
        event_time: "16 June 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-107",
        category: "Awareness",
        title: "International Yoga Day",
        description: "International Yoga Day.",
        event_date: "2027-06-21",
        event_time: "21 June 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       JULY 2027
    ========================= */

    {
        id: "calendar-108",
        category: "Academic",
        title: "Declaration of Even Semester Results",
        description: "Declaration of Results of End-Term Examinations for Even Semester.",
        event_date: "2027-07-05",
        event_time: "5 July 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-109",
        category: "Examination",
        title: "Mid-Term Examinations - Summer Term",
        description: "Mid-Term Examinations for Summer Term for all Schools.",
        event_date: "2027-07-05",
        event_time: "5 July 2027 to 7 July 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-110",
        category: "FDP",
        title: "AI Beyond Boundaries",
        description: "FDP on AI Beyond Boundaries: Generative Models, LLMs, and Agentic Intelligence.",
        event_date: "2027-07-06",
        event_time: "6 July 2027 to 10 July 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-111",
        category: "Academic",
        title: "Last Instruction Day - Summer Term",
        description: "Last instruction day of Summer Term for all Schools.",
        event_date: "2027-07-24",
        event_time: "24 July 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-112",
        category: "Examination",
        title: "End-Term Examinations - Summer Term",
        description: "End-Term Examinations for Summer Term for all Schools.",
        event_date: "2027-07-26",
        event_time: "26 July 2027 to 31 July 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-113",
        category: "Examination",
        title: "Make-up Examinations - Even Semester",
        description: "Make-up Examinations for Even Semester for Undergraduate and Postgraduate Programs.",
        event_date: "2027-07-31",
        event_time: "July 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },


    /* =========================
       AUGUST 2027
    ========================= */

    {
        id: "calendar-114",
        category: "Academic",
        title: "Declaration of Examination Results",
        description: "Declaration of examination results for Make-up Examinations and Summer Term.",
        event_date: "2027-08-20",
        event_time: "20 August 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-115",
        category: "Academic",
        title: "Declaration of Even Semester Make-up Results",
        description: "Declaration of results for Even Semester Make-up Examinations.",
        event_date: "2027-08-20",
        event_time: "20 August 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-116",
        category: "Academic",
        title: "Eligibility List for Odd Semester 2027–28",
        description: "Announcement of Eligibility List for the Odd Semester of Academic Year 2027–28.",
        event_date: "2027-08-20",
        event_time: "20 August 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    },

    {
        id: "calendar-117",
        category: "Academic",
        title: "New Academic Year 2027–28",
        description: "The next Academic Year 2027–28 will commence.",
        event_date: "2027-08-09",
        event_time: "9 August 2027",
        venue: "Presidency University",
        capacity: "N/A",
        source: "Academic Calendar"
    }

];


/* =========================================================
   LOAD EVENTS
========================================================= */

async function loadEvents() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/events"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const apiEvents = await response.json();

        /*
         * Add source information to backend events
         */

        const formattedApiEvents = apiEvents.map(event => ({
            ...event,
            source: "CampusConnect"
        }));


        /*
         * Combine backend events + academic calendar
         */

        allEvents = [
            ...formattedApiEvents,
            ...academicCalendarEvents
        ];


        /*
         * Remove exact duplicate calendar/API titles
         */

        allEvents = removeDuplicateEvents(allEvents);


        /*
         * Sort events by date
         */

        allEvents.sort((a, b) => {

            const dateA =
                new Date(a.event_date);

            const dateB =
                new Date(b.event_date);

            return dateA - dateB;

        });


        displayEvents(allEvents);


    } catch (error) {

        console.error(
            "Unable to load API events:",
            error
        );


        /*
         * Even if backend is offline,
         * academic calendar events still work.
         */

        allEvents = [
            ...academicCalendarEvents
        ];


        allEvents.sort((a, b) => {

            return (
                new Date(a.event_date) -
                new Date(b.event_date)
            );

        });


        displayEvents(allEvents);

    }

}


/* =========================================================
   REMOVE DUPLICATES
========================================================= */

function removeDuplicateEvents(events) {

    const unique = [];

    const keys = new Set();


    events.forEach(event => {

        const title =
            String(event.title || "")
                .toLowerCase()
                .trim();


        const date =
            String(event.event_date || "")
                .trim();


        const key =
            `${title}-${date}`;


        if (!keys.has(key)) {

            keys.add(key);

            unique.push(event);

        }

    });


    return unique;

}


/* =========================================================
   DISPLAY EVENTS
========================================================= */

function displayEvents(events) {

    const container =
        document.getElementById(
            "eventsContainer"
        );


    if (!container) {
        return;
    }


    if (events.length === 0) {

        container.innerHTML = `
            <div class="col-12 text-center py-5">

                <div class="alert alert-info">

                    <h4 class="mb-2">
                        No events found
                    </h4>

                    <p class="mb-0">
                        Try another search.
                    </p>

                </div>

            </div>
        `;

        return;

    }


    container.innerHTML =
        events.map(event => {

            const category =
                event.category ||
                "Event";


            const categoryClass =
                getCategoryClass(category);


            const isCalendarEvent =
                String(event.id)
                    .startsWith("calendar-");


            const registerButton =
                isCalendarEvent

                    ? `
                        <button
                            class="btn btn-outline-primary w-100"
                            onclick="showEventDetails('${escapeAttribute(event.title)}')"
                        >
                            View Details
                        </button>
                    `

                    : `
                        <button
                            class="btn btn-primary w-100"
                            onclick="registerEvent(${event.id})"
                        >
                            Register
                        </button>
                    `;


            return `

                <div class="col-md-6 col-lg-4">

                    <div class="event-card h-100">

                        <div class="
                            d-flex
                            justify-content-between
                            align-items-start
                            gap-2
                            mb-2
                        ">

                            <span class="
                                badge
                                ${categoryClass}
                            ">
                                ${escapeHTML(category)}
                            </span>


                            ${
                                isCalendarEvent
                                    ? `
                                        <span
                                            class="badge bg-light text-dark border"
                                        >
                                            College Calendar
                                        </span>
                                    `
                                    : `
                                        <span
                                            class="badge bg-success"
                                        >
                                            CampusConnect
                                        </span>
                                    `
                            }

                        </div>


                        <h4 class="mt-3">
                            ${escapeHTML(
                                event.title ||
                                "College Event"
                            )}
                        </h4>


                        <p class="text-muted">

                            ${escapeHTML(
                                event.description ||
                                "College academic calendar event."
                            )}

                        </p>


                        <hr>


                        <div class="event-info">

                            <p>
                                📅
                                <strong>Date:</strong>
                                ${formatDate(
                                    event.event_date
                                )}
                            </p>


                            <p>
                                ⏰
                                <strong>Time:</strong>
                                ${escapeHTML(
                                    event.event_time ||
                                    "As per schedule"
                                )}
                            </p>


                            <p>
                                📍
                                <strong>Venue:</strong>
                                ${escapeHTML(
                                    event.venue ||
                                    "Presidency University"
                                )}
                            </p>


                            ${
                                event.capacity &&
                                event.capacity !== "N/A"

                                    ? `
                                        <p>
                                            👥
                                            <strong>
                                                Capacity:
                                            </strong>
                                            ${escapeHTML(
                                                String(
                                                    event.capacity
                                                )
                                            )}
                                        </p>
                                    `

                                    : ""
                            }

                        </div>


                        <div class="mt-auto pt-2">

                            ${registerButton}

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   CATEGORY COLORS
========================================================= */

function getCategoryClass(category) {

    const value =
        String(category)
            .toLowerCase();


    if (
        value.includes("holiday")
    ) {
        return "bg-danger";
    }


    if (
        value.includes("exam") ||
        value.includes("test") ||
        value.includes("project review")
    ) {
        return "bg-warning text-dark";
    }


    if (
        value.includes("sports")
    ) {
        return "bg-success";
    }


    if (
        value.includes("conference") ||
        value.includes("fdp")
    ) {
        return "bg-info text-dark";
    }


    if (
        value.includes("cultural")
    ) {
        return "bg-purple";
    }


    return "bg-primary";

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(date) {

    if (!date) {
        return "Date not available";
    }


    const parsedDate =
        new Date(date);


    if (
        isNaN(
            parsedDate.getTime()
        )
    ) {
        return date;
    }


    return parsedDate.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

}


/* =========================================================
   REGISTER EVENT
========================================================= */

async function registerEvent(id) {

    const token =
        localStorage.getItem("token");


    if (!token) {

        alert(
            "Please login before registering."
        );


        window.location.href =
            "login.html";


        return;

    }


    try {

        const response =
            await fetch(
                `http://localhost:5000/api/events/${id}/register`,
                {
                    method: "POST",

                    headers: {
                        "Authorization":
                            `Bearer ${token}`,

                        "Content-Type":
                            "application/json"
                    }
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            alert(
                result.message ||
                "Unable to register."
            );

            return;

        }


        alert(
            result.message ||
            "Successfully registered!"
        );


    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to server."
        );

    }

}


/* =========================================================
   VIEW CALENDAR EVENT
========================================================= */

function showEventDetails(title) {

    const event =
        allEvents.find(
            item =>
                item.title === title
        );


    if (!event) {
        return;
    }


    alert(
        `${event.title}\n\n` +
        `📅 ${event.event_time}\n` +
        `📍 ${event.venue}\n\n` +
        `${event.description || ""}`
    );

}


/* =========================================================
   SEARCH EVENTS
========================================================= */

const searchInput =
    document.getElementById(
        "search"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const filtered =
                allEvents.filter(event => {

                    const title =
                        String(
                            event.title || ""
                        ).toLowerCase();


                    const category =
                        String(
                            event.category || ""
                        ).toLowerCase();


                    const venue =
                        String(
                            event.venue || ""
                        ).toLowerCase();


                    const description =
                        String(
                            event.description || ""
                        ).toLowerCase();


                    const date =
                        String(
                            event.event_date || ""
                        ).toLowerCase();


                    return (
                        title.includes(search) ||
                        category.includes(search) ||
                        venue.includes(search) ||
                        description.includes(search) ||
                        date.includes(search)
                    );

                });


            displayEvents(filtered);

        }
    );

}




function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}




function escapeAttribute(value) {

    return String(value)
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        );

}




loadEvents();
