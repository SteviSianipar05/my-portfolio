import type { Organization, Certificate, Project, Education, SkillDetail } from "@/lib/types";

export const profile = {
  name: "Stevi Greis Sianipar",
  title: "Computer Technology",
  phone: "0812-6927-8669",
  email: "stevisianipar05@gmail.com",
  location: "Indonesia",
  github: "https://github.com/SteviSianipar05",
  linkedin: "https://linkedin.com/in/stevi-greis-sianipar-345889346",
  cvPath: "/cv.pdf",
  profileImage: "/profile.jpg",
  bio: `I am a final-year DIII Computer Technology student at the Del Institute of Technology,
    focusing on Internet of Things (IoT), Cloud Computing, and Computer Networking. I have
    hands-on experience developing IoT systems, backend services, and cloud-integrated
    applications. My coursework covers web development, mobile development with Flutter,
    networking, virtualization, embedded systems, UI design, and cloud computing—strengthening
    my ability to work across software and hardware environments. Beyond academics, I have been
    active in student organizations such as BEM and the Study Program Student Association, which
    improved my communication, teamwork, and leadership skills.`,
  impactStatement: `I aim to continuously improve my skills and contribute to developing practical
    and reliable technology solutions. I am open to opportunities that allow me to
    learn, collaborate, and gain real industry experience.`,
};

export const educations: Education[] = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "Institut Teknologi Del",
    location: "Sitoluama, Laguboti, Toba Samosir",
    period: "Aug 2023 – Sep 2026 (Expected)",
    gpa: "3.30 / 4.00",
  },
  {
    degree: "Senior High School (Science Stream)",
    institution: "SMAN 1 Balige",
    location: "Balige",
    period: "2020 – 2023",
  },
];

export const skillDetails: SkillDetail = {
  "Web Development": ["Laravel", "Next.js", "Node.js", "Express", "PHP", "HTML", "Bootstrap", "Tailwind CSS"],
  "IoT Systems": ["ESP32", "Raspberry Pi 4", "Arduino", "MQTT", "Node-RED", "InfluxDB", "Grafana"],
  "Smart Devices": ["Embedded Programming", "Integrasi Sensor", "Hardware Prototyping"],
  "UI/UX Design": ["Figma", "Wireframing", "Prototyping"],
  "Prototyping": ["Arduino", "PCB Design", "3D Enclosure Modeling"],
  "Data Visualization": ["Grafana", "InfluxDB", "Custom Charting"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "AWS"],
  "Tools": ["Git", "GitHub", "Shell Scripting"],
};

export const organizations: Organization[] = [
  {
    name: "Student Executive Board (BEM)",
    role: "Visual Division, Department of Religion and Social Affairs",
    date: "2024 – Present",
    desc: "BEM is a student organization that acts as a student representative, coordinating various social, religious, and student development activities at the Del Institute of Technology.",
  },
  {
    name: "Computer Technology Student Association (HIMATEK)",
    role: "Member",
    date: "2023 – 2025",
    desc: "Actively contributed to organizational programs, academic events, and technology-related activities within the campus community.",
  },
  {
    name: "Vice Chair of KPU HIMATEK",
    role: "Security Division",
    date: "Sep 2025",
    desc: "Assisted the Chair in leading the Election Commission of HIMATEK, Organized and supervised the student election process, Ensured fairness, transparency, and documentation integrity.",
  },
  {
    name: "Student Leadership Program – Institut Teknologi Del",
    role: "Program Participant",
    date: "Aug 2024 – Sep 2025",
    desc: "Participated in a year-long leadership development program focusing on organizational management, teamwork, public communication, and strategic problem-solving.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Student Leadership Program",
    platform: "Institut Teknologi Del",
    date: "Sep 2025",
    file: "/certs/Student-Leadership.pdf",
  },
  {
    title: "Intro to Data Analytics",
    platform: "RevoU",
    date: "Jul 2025",
    file: "/certs/RevoU.pdf",
  },
  {
    title: "Website Development: Back End",
    platform: "MySkill",
    date: "Jul 2025",
    file: "/certs/myskill.pdf",
  },
  {
    title: "HCIA-Security V4.0 Course",
    platform: "Huawei",
    date: "2025",
    file: "/certs/hcia-security.pdf",
  },
  {
    title: "HCIA-Cloud Computing V5.5 Course",
    platform: "Huawei",
    date: "2025",
    file: "/certs/hcia-cloud.pdf",
  },
  {
    title: "HCIA-Storage V5.0 Course",
    platform: "Huawei",
    date: "2024",
    file: "/certs/hcia-storage.pdf",
  },
  {
    title: "HCIA-Datacom V1.0 Course",
    platform: "Huawei",
    date: "2024",
    file: "/certs/hcia-datacom.pdf",
  },
];

export const projects: Project[] = [
  {
    title: "Genshin API Project (2023)",
    desc: "Created RESTful API implementing PHP OOP with external API integration.",
    impact: "Improved data access speed and reduced manual data formatting by providing structured API endpoints.",
    images: [
      "/projects/proj-genshin.jpg",
      "/projects/proj-genshin1.jpg",
      "/projects/proj-genshin2.jpg",
      "/projects/proj-genshin3.jpg",
      "/projects/proj-genshin4.jpg",
      "/projects/proj-genshin5.jpg",
      "/projects/proj-genshin6.jpg",
    ],
  },
  {
    title: "IJABU Coffee Shop Website (2024)",
    desc: "Developed a responsive e-commerce platform using Laravel, PHP, SCSS, JavaScript, and Bootstrap.",
    impact: "Enabled 24/7 online ordering and improved customer order tracking, reducing manual shop workload.",
    images: [
      "/projects/proj-ijabu.jpg",
      "/projects/proj-ijabu2.jpg",
      "/projects/proj-ijabu3.jpg",
      "/projects/proj-ijabu4.jpg",
      "/projects/proj-ijabu5.jpg",
      "/projects/proj-ijabu6.jpg",
    ],
  },
  {
    title: "Smart Dispenser System (2024)",
    desc: "Built an ultrasonic-based liquid dispenser using Arduino with real-time LCD monitoring.",
    impact: "Increased dispensing accuracy and reduced liquid waste using automated distance-based measurement.",
    images: [
      "/projects/proj-dispenser.jpg",
      "/projects/proj-dispenser1.png",
      "/projects/proj-dispenser2.png",
    ],
  },
  {
    title: "Coffee Fermentation IoT Prototype (2025)",
    desc: "Designed an IoT system to monitor pH and temperature in real-time.",
    impact: "Reduced manual checking time by 40% and improved consistency of fermentation quality.",
    images: [
      "/projects/proj-fermentation.png",
      "/projects/proj-fermentation1.jpg",
      "/projects/proj-fermentation2.jpg",
    ],
  },
  {
    title: "Campus Lost & Found App (2025)",
    desc: "Developed microservices-based system using internal networking architecture.",
    impact: "Streamlined lost-item reporting and matching process, reducing admin workload and improving user experience.",
    images: [
      "/projects/proj-campus.png",
      "/projects/proj-campus1.jpg",
      "/projects/proj-campus2.jpg",
      "/projects/proj-campus3.jpg",
      "/projects/proj-campus4.jpg",
      "/projects/proj-campus5.jpg",
      "/projects/proj-campus6.jpg",
    ],
  },
  {
    title: "IoT Monitoring & Control – Final Thesis (2025)",
    desc: "Full-stack IoT system using Flutter, MQTT, Node-RED, Grafana & MySQL.",
    impact: "Reduced monitoring time and enabled real-time decision-making through automated data visualization and control.",
    images: [
      "/projects/proj-thesis1.jpg",
      "/projects/proj-thesis2a.jpg",
      "/projects/proj-thesis2b.jpg",
      "/projects/proj-thesis2c.jpg",
      "/projects/proj-thesis4.jpg",
      "/projects/proj-thesis4a.jpg",
      "/projects/proj-thesis5.png",
      "/projects/proj-thesis6.jpg",
    ],
  },
];
