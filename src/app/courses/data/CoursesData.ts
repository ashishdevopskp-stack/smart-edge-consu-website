// app/components/courses/data/CoursesData.ts
// All 17 Smart Edge course categories with full course data.

export interface Course {
  name: string;
  duration: string;
  qualification: "10th" | "12th" | "Graduation" | "Post Graduation";
  type: "Regular" | "Distance" | "Both";
}

export interface CategoryDetail {
  id: string;
  label: string;
  stream: string;
  icon: string;           // lucide icon name string — used by the page to look up dynamically
  bg: string;             // icon background colour
  color: string;          // icon foreground colour
  border: string;         // card highlight colour when open
  tagline: string;
  courses: Course[];
  careers: string[];
}

export const CATEGORIES: CategoryDetail[] = [
  // ── 1. Engineering & Technology ──────────────────────────────────────────
  {
    id: "engineering",
    label: "Engineering & Technology",
    stream: "Engineering & Technology",
    icon: "Cpu",
    bg: "#DBEAFE",
    color: "#1D4ED8",
    border: "#93C5FD",
    tagline: "Build a career in innovation, technology and infrastructure.",
    courses: [
      { name: "Polytechnic (Diploma in Engineering)", duration: "3 Years", qualification: "10th", type: "Regular" },
      { name: "B.Tech / B.E.",                        duration: "4 Years", qualification: "12th", type: "Regular" },
      { name: "M.Tech",                               duration: "2 Years", qualification: "Graduation", type: "Regular" },
      { name: "Aeronautical Engineering",             duration: "4 Years", qualification: "12th", type: "Regular" },
    ],
    careers: ["Software Engineer", "Civil Engineer", "Mechanical Engineer", "Aerospace Engineer", "IT Consultant"],
  },

  // ── 2. Management & Commerce ─────────────────────────────────────────────
  {
    id: "management",
    label: "Management & Commerce",
    stream: "Management & Commerce",
    icon: "Briefcase",
    bg: "#FEF3C7",
    color: "#92400E",
    border: "#FDE68A",
    tagline: "Lead businesses and build a strong commerce career.",
    courses: [
      { name: "BBA (Bachelor of Business Administration)", duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "MBA / PGDM",                               duration: "2 Years", qualification: "Graduation", type: "Both" },
      { name: "B.Com (Bachelor of Commerce)",             duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "BHM (Bachelor of Hotel Management)",       duration: "3 Years", qualification: "12th", type: "Regular" },
    ],
    careers: ["Business Manager", "Marketing Executive", "Finance Analyst", "Entrepreneur", "Hotel Manager"],
  },

  // ── 3. Computer Science & IT ──────────────────────────────────────────────
  {
    id: "computer-science",
    label: "Computer Science & IT",
    stream: "Computer Science & IT",
    icon: "Code2",
    bg: "#EDE9FE",
    color: "#6D28D9",
    border: "#C4B5FD",
    tagline: "Master technology and shape the digital future.",
    courses: [
      { name: "BCA (Bachelor of Computer Applications)", duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "MCA (Master of Computer Applications)",   duration: "2 Years", qualification: "Graduation", type: "Both" },
    ],
    careers: ["Software Developer", "Full Stack Developer", "Mobile App Developer", "AI Engineer", "Data Scientist"],
  },

  // ── 4. Medical & Allied Sciences ─────────────────────────────────────────
  {
    id: "medical",
    label: "Medical & Allied Sciences",
    stream: "Medical & Allied Sciences",
    icon: "Stethoscope",
    bg: "#D1FAE5",
    color: "#047857",
    border: "#6EE7B7",
    tagline: "Serve society through healthcare and clinical practice.",
    courses: [
      { name: "BAMS (Ayurvedic Medicine & Surgery)",  duration: "5.5 Years", qualification: "12th", type: "Regular" },
      { name: "BHMS (Homeopathic Medicine & Surgery)", duration: "5.5 Years", qualification: "12th", type: "Regular" },
      { name: "BUMS (Unani Medicine & Surgery)",       duration: "5.5 Years", qualification: "12th", type: "Regular" },
      { name: "PG Medical Programs",                   duration: "2-3 Years", qualification: "Graduation", type: "Regular" },
    ],
    careers: ["Doctor", "Medical Consultant", "Clinical Practitioner", "Medical Researcher", "Hospital Administrator"],
  },

  // ── 5. Agriculture ───────────────────────────────────────────────────────
  {
    id: "agriculture",
    label: "Agriculture",
    stream: "Agriculture",
    icon: "Sprout",
    bg: "#DCFCE7",
    color: "#15803D",
    border: "#86EFAC",
    tagline: "Innovate in farming, food systems and rural development.",
    courses: [
      { name: "Diploma in Agriculture",   duration: "2 Years", qualification: "10th", type: "Regular" },
      { name: "B.Sc Agriculture",         duration: "4 Years", qualification: "12th", type: "Regular" },
      { name: "M.Sc Agriculture",         duration: "2 Years", qualification: "Graduation", type: "Regular" },
      { name: "Horticulture",             duration: "4 Years", qualification: "12th", type: "Regular" },
      { name: "Animal Husbandry",         duration: "3 Years", qualification: "12th", type: "Regular" },
      { name: "Dairy Science",            duration: "4 Years", qualification: "12th", type: "Regular" },
    ],
    careers: ["Agricultural Officer", "Agronomist", "Horticulturist", "Dairy Scientist", "Soil Scientist"],
  },

  // ── 6. Arts & Humanities ─────────────────────────────────────────────────
  {
    id: "arts-humanities",
    label: "Arts & Humanities",
    stream: "Arts & Humanities",
    icon: "BookOpen",
    bg: "#FEE2E2",
    color: "#B91C1C",
    border: "#FCA5A5",
    tagline: "Understand society, culture and human behaviour.",
    courses: [
      { name: "BSW (Bachelor of Social Work)",  duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "MSW (Master of Social Work)",    duration: "2 Years", qualification: "Graduation", type: "Both" },
      { name: "MA Public Administration",       duration: "2 Years", qualification: "Graduation", type: "Both" },
    ],
    careers: ["Social Worker", "NGO Professional", "Public Policy Analyst", "Community Development Officer"],
  },

  // ── 7. Fashion & Design ──────────────────────────────────────────────────
  {
    id: "fashion-design",
    label: "Fashion & Design",
    stream: "Fashion & Design",
    icon: "Palette",
    bg: "#FCE7F3",
    color: "#9D174D",
    border: "#F9A8D4",
    tagline: "Create, design and lead in the world of fashion.",
    courses: [
      { name: "Diploma in Fashion Design", duration: "1-2 Years", qualification: "10th", type: "Regular" },
      { name: "BA Fashion Design",         duration: "3 Years",   qualification: "12th", type: "Regular" },
      { name: "Fine Arts",                 duration: "4 Years",   qualification: "12th", type: "Regular" },
    ],
    careers: ["Fashion Designer", "Textile Designer", "Stylist", "Fine Artist", "Creative Director"],
  },

  // ── 8. Education (B.Ed / M.Ed) ───────────────────────────────────────────
  {
    id: "education",
    label: "Education",
    stream: "Education",
    icon: "GraduationCap",
    bg: "#E0F2FE",
    color: "#0369A1",
    border: "#7DD3FC",
    tagline: "Shape the next generation as an educator.",
    courses: [
      { name: "BA B.Ed (Integrated)",  duration: "4 Years", qualification: "12th", type: "Regular" },
      { name: "B.Sc B.Ed (Integrated)", duration: "4 Years", qualification: "12th", type: "Regular" },
      { name: "MA Education",          duration: "2 Years", qualification: "Graduation", type: "Both" },
    ],
    careers: ["School Teacher", "Education Counsellor", "Academic Administrator", "Curriculum Developer"],
  },

  // ── 9. Law ───────────────────────────────────────────────────────────────
  {
    id: "law",
    label: "Law",
    stream: "Law",
    icon: "Scale",
    bg: "#F3F4F6",
    color: "#374151",
    border: "#D1D5DB",
    tagline: "Pursue justice and a career in the legal profession.",
    courses: [
      { name: "LLB (Bachelor of Laws)", duration: "3 Years", qualification: "Graduation", type: "Regular" },
      { name: "LLM (Master of Laws)",   duration: "1-2 Years", qualification: "Graduation", type: "Regular" },
    ],
    careers: ["Advocate", "Legal Advisor", "Corporate Lawyer", "Public Prosecutor", "Judge (via PCS-J)"],
  },

  // ── 10. Pharmacy ─────────────────────────────────────────────────────────
  {
    id: "pharmacy",
    label: "Pharmacy",
    stream: "Medical & Allied Sciences",
    icon: "FlaskConical",
    bg: "#ECFDF5",
    color: "#059669",
    border: "#6EE7B7",
    tagline: "Advance healthcare through pharmaceutical expertise.",
    courses: [
      { name: "D.Pharmacy (Diploma)",      duration: "2 Years", qualification: "12th", type: "Regular" },
      { name: "B.Pharmacy (Bachelor's)",   duration: "4 Years", qualification: "12th", type: "Regular" },
    ],
    careers: ["Pharmacist", "Drug Inspector", "Hospital Pharmacist", "Pharmaceutical Researcher"],
  },

  // ── 11. Nursing & Physiotherapy ──────────────────────────────────────────
  {
    id: "nursing",
    label: "Nursing & Physiotherapy",
    stream: "Medical & Allied Sciences",
    icon: "HeartPulse",
    bg: "#FFF1F2",
    color: "#BE123C",
    border: "#FCA5A5",
    tagline: "Care for patients and restore health through therapy.",
    courses: [
      { name: "B.Sc Nursing",                      duration: "4 Years", qualification: "12th", type: "Regular" },
      { name: "DPT (Diploma in Physiotherapy)",     duration: "2 Years", qualification: "12th", type: "Regular" },
      { name: "BPT (Bachelor of Physiotherapy)",    duration: "4.5 Years", qualification: "12th", type: "Regular" },
    ],
    careers: ["Registered Nurse", "Physiotherapist", "ICU Nurse", "Rehabilitation Therapist"],
  },

  // ── 12. Animation & Multimedia / Journalism ──────────────────────────────
  {
    id: "animation-journalism",
    label: "Animation & Journalism",
    stream: "Media & Communication",
    icon: "Film",
    bg: "#FFF7ED",
    color: "#C2410C",
    border: "#FDBA74",
    tagline: "Tell stories through media, animation and journalism.",
    courses: [
      { name: "BA (Animation & Multimedia)", duration: "3 Years", qualification: "12th", type: "Regular" },
      { name: "MA (Animation & Multimedia)", duration: "2 Years", qualification: "Graduation", type: "Regular" },
      { name: "BA Journalism & Mass Communication", duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "MA Journalism & Mass Communication", duration: "2 Years", qualification: "Graduation", type: "Both" },
    ],
    careers: ["Animator", "Journalist", "Content Creator", "TV Reporter", "Media Producer"],
  },

  // ── 13. Library Science ──────────────────────────────────────────────────
  {
    id: "library-science",
    label: "Library Science",
    stream: "Education",
    icon: "Library",
    bg: "#F5F3FF",
    color: "#7C3AED",
    border: "#C4B5FD",
    tagline: "Organise knowledge and preserve information.",
    courses: [
      { name: "D.Lib (Diploma in Library Science)", duration: "1 Year",  qualification: "12th", type: "Both" },
      { name: "B.Lib (Bachelor of Library Science)", duration: "1 Year", qualification: "Graduation", type: "Both" },
      { name: "M.Lib (Master of Library Science)",   duration: "1 Year", qualification: "Graduation", type: "Both" },
    ],
    careers: ["Librarian", "Information Scientist", "Digital Archivist", "Knowledge Manager"],
  },

  // ── 14. Physical Education ───────────────────────────────────────────────
  {
    id: "physical-education",
    label: "Physical Education",
    stream: "Education",
    icon: "Dumbbell",
    bg: "#FEF9C3",
    color: "#A16207",
    border: "#FDE047",
    tagline: "Promote fitness, sports and physical wellness.",
    courses: [
      { name: "D.P.Ed (Diploma in Physical Education)", duration: "1 Year", qualification: "12th", type: "Regular" },
      { name: "B.P.Ed (Bachelor of Physical Education)", duration: "2 Years", qualification: "Graduation", type: "Regular" },
    ],
    careers: ["Physical Education Teacher", "Sports Coach", "Fitness Trainer", "Sports Analyst"],
  },

  // ── 15. Traditional Courses ──────────────────────────────────────────────
  {
    id: "traditional",
    label: "Traditional Courses",
    stream: "Arts & Humanities",
    icon: "BookMarked",
    bg: "#E0F2FE",
    color: "#0284C7",
    border: "#7DD3FC",
    tagline: "Classic undergraduate and postgraduate programs.",
    courses: [
      { name: "BA (Bachelor of Arts)",      duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "B.Sc (Bachelor of Science)", duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "B.Com (Bachelor of Commerce)", duration: "3 Years", qualification: "12th", type: "Both" },
      { name: "MA (Master of Arts)",         duration: "2 Years", qualification: "Graduation", type: "Both" },
      { name: "M.Sc (Master of Science)",    duration: "2 Years", qualification: "Graduation", type: "Both" },
      { name: "M.Com (Master of Commerce)",  duration: "2 Years", qualification: "Graduation", type: "Both" },
    ],
    careers: ["Civil Servant", "Lecturer", "Bank Officer", "Research Analyst", "Administrative Officer"],
  },

  // ── 16. Government & Skill Courses ───────────────────────────────────────
  {
    id: "government-skill",
    label: "Government & Skill Courses",
    stream: "Government & Skill",
    icon: "Shield",
    bg: "#F0FDF4",
    color: "#166534",
    border: "#86EFAC",
    tagline: "Prepare for government jobs and skill development.",
    courses: [
      { name: "Amin (Revenue Surveyor Training)", duration: "6 Months", qualification: "12th", type: "Regular" },
      { name: "Skill Development Courses",        duration: "3-6 Months", qualification: "10th", type: "Regular" },
      { name: "Government Job Oriented Programs", duration: "6-12 Months", qualification: "12th", type: "Regular" },
    ],
    careers: ["Amin / Revenue Official", "Government Officer", "Skilled Trades Professional", "Public Sector Employee"],
  },

  // ── 17. Advanced Courses ─────────────────────────────────────────────────
  {
    id: "advanced",
    label: "Advanced Courses",
    stream: "Advanced & Research",
    icon: "FlaskConical",
    bg: "#FDF4FF",
    color: "#9333EA",
    border: "#E9D5FF",
    tagline: "Pursue research and specialised postgraduate programs.",
    courses: [
      { name: "PGDYN (Post Graduate Diploma in Yoga & Naturopathy)", duration: "1 Year",   qualification: "Graduation", type: "Regular" },
      { name: "Ph.D (Doctor of Philosophy)",                         duration: "3-5 Years", qualification: "Post Graduation", type: "Regular" },
    ],
    careers: ["Research Scholar", "University Professor", "Wellness Expert", "Yoga Instructor", "Academic Researcher"],
  },
];