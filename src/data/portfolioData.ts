import type { Project, Certification, DsaStat, CodeSnippet, GitHubRepo } from '../types';

export const PERSONAL_INFO = {
  name: 'Ahuja Jatin Tehalram',
  shortName: 'Jatin Ahuja',
  headline: 'Full Stack Engineer & DSA Enthusiast',
  subHeadline: 'Targeting Microsoft Software Engineering Internship / Placement (2027)',
  university: 'Parul University',
  degree: 'B.Tech Computer Science Engineering',
  semester: '5th Semester',
  cgpa: '7.04 / 10.0',
  expectedGraduation: '2027',
  email: 'jatinahuja289@gmail.com',
  phone: '+91 8799847123',
  location: 'Maharashtra, India',
  github: 'https://github.com/2403051050553',
  linkedin: 'https://www.linkedin.com/in/jatin-tehalram-ahuja-0386b5390/',
  leetcode: 'https://leetcode.com/u/2403051050553/',
  hackerrank: 'https://www.hackerrank.com/profile/jatinahuja289',
  codeforces: 'https://codeforces.com/profile/Jatin_DSA2006',
  avatarUrl: '/assets/jatin-profile-blazer.jpg',
  resumeUrl: '/assets/jatin-ahuja-resume.pdf',
  summary: `Motivated and detail-oriented Computer Science Engineering student with a strong foundation in Java, Data Structures & Algorithms, and Full Stack Web Development. Passionate about building efficient and scalable software solutions. Eager to contribute to impactful engineering teams while continuously learning and growing as a Software Engineer.`
};

export const PROJECTS: Project[] = [
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    category: 'Full Stack',
    subtitle: 'Enterprise Healthcare Operations & Patient Portal',
    shortDescription: 'Comprehensive full-stack healthcare platform handling patient registrations, doctor appointment scheduling, role-based access control, and electronic records.',
    fullDescription: 'Architected a multi-role web application designed for healthcare facilities. Implemented robust authentication with role-based authorization for doctors and patients. Features dynamic appointment booking, prescription logs, doctor availability scheduling, and intuitive administrative dashboards.',
    techStack: ['React', 'Java (Spring Boot API)', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
    features: [
      'Role-based Access Control (Doctor, Patient, Admin workflows)',
      'Real-time appointment slot reservation and calendar sync',
      'Secure authentication and session management',
      'Doctor medical prescription logger & patient history tracking',
      'Responsive, accessible UI with instant search & filter'
    ],
    architecture: {
      client: 'React SPA (Vite + Tailwind / Component Architecture)',
      backend: 'Java Spring Boot RESTful Controllers & Service Layer',
      database: 'MySQL Relational Database (Normalized Schema, Indexed FKs)',
      integrations: 'JWT Auth & BCrypt Password Encryption',
      flow: [
        'User authentication request -> AuthController -> JwtProvider',
        'Appointment Booking -> PatientService -> DoctorAvailability Guard',
        'Database Transaction -> MySQL InnoDB (ACID compliant save)',
        'JSON Response payload returned to React Frontend UI'
      ]
    },
    githubUrl: 'https://github.com/2403051050553',
    liveUrl: '#',
    isFeatured: true
  },
  {
    id: 'ai-interview-platform',
    title: 'AI Interview Assistant Platform',
    category: 'AI & LLM',
    subtitle: 'Intelligent Mock Interview & Performance Evaluator',
    shortDescription: 'AI-powered web application that analyzes technical interview responses in real time, generates custom feedback, and evaluates candidate performance.',
    fullDescription: 'Engineered an end-to-end interview practice platform leveraging AI API integrations. Users receive real-time domain-specific questions (Java, DSA, SQL), submit written or transcript responses, and get instant detailed evaluation including code correctness, time complexity analysis, and structural suggestions.',
    techStack: ['React', 'Java AI Backend', 'OpenAI API Integration', 'MySQL', 'JavaScript', 'CSS3'],
    features: [
      'Dynamic AI interview question generation by topic & difficulty',
      'Automated candidate answer evaluation with score rubrics',
      'Real-time performance recommendations and weak-spot detection',
      'Speech-to-text / text response submission module',
      'Historical assessment analytics dashboard'
    ],
    architecture: {
      client: 'React Frontend (Stateful Stepper & Dynamic Answer Evaluator)',
      backend: 'Java Orchestration Service (Prompt Engineering & API Router)',
      database: 'MySQL Database for storing test sessions & metrics',
      integrations: 'OpenAI API / LLM Prompt Execution Engine',
      flow: [
        'Question Request -> Java AI Controller -> Prompt Formatting',
        'LLM Execution -> Response Token Streaming -> Parsing JSON',
        'Evaluation Logic -> Rubric Calculation (0-100 Score)',
        'Analytics Sync -> Saved to MySQL & Rendered in React UI'
      ]
    },
    githubUrl: 'https://github.com/2403051050553',
    liveUrl: '#',
    isFeatured: true
  },
  {
    id: 'socialbook-clone',
    title: 'SocialBook Platform Clone',
    category: 'Frontend',
    subtitle: 'Social Networking & Media Connection Hub',
    shortDescription: 'Interactive social web interface featuring newsfeed components, user profiles, notification drawers, and responsive media cards.',
    fullDescription: 'Created a responsive social networking user interface emphasizing clean layout design, CSS Grid & Flexbox mastery, and dynamic interactive elements.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    features: [
      'Interactive newsfeed feed with post creation UI',
      'User sidebar with friend requests and active chat list',
      'Dark/Light mode layout components',
      'Responsive design across mobile, tablet, and desktop'
    ],
    architecture: {
      client: 'Modular HTML5 & CSS3 layout architecture',
      backend: 'Client-side LocalStorage & DOM Event Dispatchers',
      database: 'Mock JSON State Data',
      flow: [
        'User interactions trigger DOM Event Listeners',
        'Dynamic state rendering via JavaScript UI Controller'
      ]
    },
    githubUrl: 'https://github.com/2403051050553/SOCIALBOOK-CLONE',
    liveUrl: '#',
    isFeatured: false
  },
  {
    id: 'netflix-youtube-clones',
    title: 'Media Streaming Suites (Netflix & YouTube)',
    category: 'Frontend',
    subtitle: 'High-Performance Video Showcase Interfaces',
    shortDescription: 'Pixel-perfect media platform clones featuring video player embeds, categorized category sliders, and dark-theme video exploration.',
    fullDescription: 'Developed high-fidelity web clones of popular streaming platforms to master UI design, grid layouts, custom scroll controls, and media player state management.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Media Queries'],
    features: [
      'Custom hero banner carousel with video trailer previews',
      'Categorized content rails with smooth horizontal scrolling',
      'Search filtering and video player modal modals',
      'Optimized CSS styling for smooth 60fps animations'
    ],
    architecture: {
      client: 'HTML5 Semantic Video Elements & Custom CSS Grid',
      backend: 'Mock API Video Streams',
      database: 'Static Data Models',
      flow: ['Category selection updates grid DOM views']
    },
    githubUrl: 'https://github.com/2403051050553/NETFLIX-CLONE',
    liveUrl: '#',
    isFeatured: false
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'AWS Academy',
    issueDate: 'Sep 2026',
    category: 'Cloud',
    skills: ['AWS Core Services', 'Cloud Security', 'EC2', 'S3', 'IAM', 'VPC Architecture']
  },
  {
    id: 'aws-simulearn',
    title: 'AWS SimuLearn: Cloud Computing Essentials',
    issuer: 'AWS Training & Certification',
    issueDate: 'Sep 2026',
    category: 'Cloud',
    skills: ['Cloud Architecture', 'Hands-on Simulation', 'Serverless Concepts']
  },
  {
    id: 'ibm-z-log-analytics',
    title: 'Getting to Know IBM Z Operational Log & Data Analytics',
    issuer: 'IBM SkillsBuild',
    issueDate: 'Sep 2026',
    category: 'Cloud',
    skills: ['Data Analytics', 'Operational Logging', 'Enterprise Systems']
  },
  {
    id: 'hackerrank-sql-advanced',
    title: 'SQL (Advanced) Skill Certificate',
    issuer: 'HackerRank',
    issueDate: 'Jan 2026',
    credentialId: 'A56B8381C5FB',
    pdfPath: '/assets/hackerrank-sql-advanced.pdf',
    category: 'Database',
    skills: ['Complex Window Functions', 'Subqueries', 'Query Optimization', 'Index Tuning', 'Joins']
  },
  {
    id: 'hackerrank-sql-intermediate',
    title: 'SQL (Intermediate) Skill Certificate',
    issuer: 'HackerRank',
    issueDate: 'Aug 2026',
    category: 'Database',
    skills: ['Aggregations', 'GROUP BY', 'HAVING', 'Multi-table Joins']
  },
  {
    id: 'hackerrank-sql-basic',
    title: 'SQL (Basic) Skill Certificate',
    issuer: 'HackerRank',
    issueDate: 'Aug 2026',
    category: 'Database',
    skills: ['SELECT', 'WHERE', 'Filtering', 'Basic Joins']
  },
  {
    id: 'hackerrank-java-basic',
    title: 'Java (Basic) Skill Certificate',
    issuer: 'HackerRank',
    issueDate: 'Aug 2026',
    category: 'Programming',
    skills: ['Java Core', 'OOP Concepts', 'Inheritance', 'Exception Handling', 'Strings']
  },
  {
    id: 'hackerrank-css-basic',
    title: 'CSS (Basic) Skill Certificate',
    issuer: 'HackerRank',
    issueDate: 'Aug 2026',
    credentialId: '9202DC9B2272',
    pdfPath: '/assets/hackerrank-css-basic.pdf',
    category: 'Web',
    skills: ['Flexbox', 'CSS Grid', 'Selectors', 'Box Model', 'Animations']
  }
];

export const DSA_STATS: DsaStat[] = [
  {
    platform: 'LeetCode',
    username: '2403051050553',
    problemsSolved: 120,
    ranking: 'Active Problem Solver',
    profileUrl: 'https://leetcode.com/u/2403051050553/',
    highlights: [
      'Arrays & HashTables: 45 Solved',
      'Two Pointers & Sliding Window: 30 Solved',
      'Strings & Matrix: 25 Solved',
      'Binary Search & Sorting: 20 Solved'
    ]
  },
  {
    platform: 'HackerRank',
    username: 'Jatin Ahuja',
    problemsSolved: 80,
    ranking: '5 Gold Stars in SQL & Java',
    profileUrl: 'https://www.hackerrank.com/profile/jatinahuja289',
    highlights: [
      'Verified SQL (Advanced) Certified',
      'Verified Java (Basic) Certified',
      '5-Star Badge in Problem Solving'
    ]
  },
  {
    platform: 'Codeforces',
    username: 'Jatin_DSA2006',
    problemsSolved: 45,
    ranking: 'Newbie / Pupil Candidate',
    profileUrl: 'https://codeforces.com/profile/Jatin_DSA2006',
    highlights: [
      'Participates in regular Div 3 / Div 4 contests',
      'Focus on Speed & Algorithm Complexity Optimization'
    ]
  }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'hashmap-lru',
    title: 'Custom HashMap / O(1) Time Complexity',
    language: 'java',
    category: 'Java',
    description: 'Demonstrating core Java bucket hashing, collision resolution using linked chaining, and O(1) average lookup time complexity.',
    complexity: {
      time: 'O(1) Average Lookup / Insertion',
      space: 'O(N) for Bucket array & nodes'
    },
    code: `public class CustomHashMap<K, V> {
    private static final int INITIAL_CAPACITY = 16;
    private static final float LOAD_FACTOR = 0.75f;
    private Node<K, V>[] buckets;
    private int size = 0;

    static class Node<K, V> {
        final K key;
        V value;
        Node<K, V> next;

        Node(K key, V value, Node<K, V> next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }
    }

    @SuppressWarnings("unchecked")
    public CustomHashMap() {
        buckets = new Node[INITIAL_CAPACITY];
    }

    public void put(K key, V value) {
        int index = Math.abs(key.hashCode()) % buckets.length;
        Node<K, V> head = buckets[index];

        while (head != null) {
            if (head.key.equals(key)) {
                head.value = value;
                return;
            }
            head = head.next;
        }

        Node<K, V> newNode = new Node<>(key, value, buckets[index]);
        buckets[index] = newNode;
        size++;
    }

    public V get(K key) {
        int index = Math.abs(key.hashCode()) % buckets.length;
        Node<K, V> head = buckets[index];
        while (head != null) {
            if (head.key.equals(key)) return head.value;
            head = head.next;
        }
        return null;
    }
}`
  },
  {
    id: 'two-pointers-dsa',
    title: 'Two Pointers Algorithm / Container With Most Water',
    language: 'java',
    category: 'DSA',
    description: 'Optimal O(N) solution for maximizing area bounded by vertical lines using shrinking two-pointer window technique.',
    complexity: {
      time: 'O(N) Single pass algorithm',
      space: 'O(1) Constant auxiliary memory'
    },
    code: `public class ContainerWithMostWater {
    public static int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxArea = 0;

        while (left < right) {
            int currentWidth = right - left;
            int currentHeight = Math.min(height[left], height[right]);
            int currentArea = currentWidth * currentHeight;

            maxArea = Math.max(maxArea, currentArea);

            // Move pointer pointing to shorter line
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}`
  },
  {
    id: 'spring-rest-controller',
    title: 'Spring Boot REST Controller & Role-Based Auth',
    language: 'java',
    category: 'Spring Boot',
    description: 'Hospital Management appointment booking endpoint with Spring Security role guard & DTO validation.',
    complexity: {
      time: 'O(1) Transaction execution',
      space: 'O(1) Payload memory'
    },
    code: `@RestController
@RequestMapping("/api/v1/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    @PreAuthorize("hasRole('PATIENT')")
    public ResponseEntity<AppointmentDTO> bookAppointment(@Valid @RequestBody AppointmentRequest request) {
        AppointmentDTO booked = appointmentService.createAppointment(
            request.getPatientId(), 
            request.getDoctorId(), 
            request.getSlotDateTime()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(booked);
    }
}`
  },
  {
    id: 'sql-window-advanced',
    title: 'SQL Advanced Window Functions & Ranking',
    language: 'sql',
    category: 'SQL',
    description: 'HackerRank Advanced SQL query using DENSE_RANK() and CTEs to extract top revenue doctors by department.',
    complexity: {
      time: 'O(N log N) Database sorting',
      space: 'O(N) Temp table buffering'
    },
    code: `WITH RankedAppointments AS (
    SELECT 
        d.department_name,
        d.doctor_name,
        COUNT(a.appointment_id) AS total_consultations,
        SUM(a.fee_amount) AS total_revenue,
        DENSE_RANK() OVER (
            PARTITION BY d.department_name 
            ORDER BY SUM(a.fee_amount) DESC
        ) AS rank_in_dept
    FROM doctors d
    JOIN appointments a ON d.doctor_id = a.doctor_id
    WHERE a.status = 'COMPLETED'
    GROUP BY d.department_name, d.doctor_id, d.doctor_name
)
SELECT 
    department_name,
    doctor_name,
    total_consultations,
    total_revenue
FROM RankedAppointments
WHERE rank_in_dept <= 3
ORDER BY department_name, rank_in_dept;`
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'jatin-portfolio',
    description: 'Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.',
    language: 'TypeScript',
    url: 'https://github.com/2403051050553/jatin-portfolio'
  },
  {
    name: 'student-grade-management',
    description: 'Java 17 Spring Boot REST API for managing students and grades with JWT authentication and MySQL.',
    language: 'Java',
    url: 'https://github.com/2403051050553/student-grade-management'
  },
  {
    name: 'LeetCode-Solutions',
    description: 'Java algorithm practice with unit-tested array, string, and binary-search implementations.',
    language: 'Java',
    url: 'https://github.com/2403051050553/LeetCode-Solutions'
  },
  {
    name: 'Youtube-Clone',
    description: 'Video-browsing homepage layout built with HTML and CSS, with original local SVG assets.',
    language: 'HTML / CSS',
    url: 'https://github.com/2403051050553/Youtube-Clone'
  },
  {
    name: 'NETFLIX-CLONE',
    description: 'Static streaming-service landing page concept built with HTML and CSS.',
    language: 'HTML / CSS',
    url: 'https://github.com/2403051050553/NETFLIX-CLONE'
  },
  {
    name: 'SPOTIFY-CLONE',
    description: 'Static Spotify-inspired music landing page concept built with HTML and CSS.',
    language: 'HTML / CSS',
    url: 'https://github.com/2403051050553/SPOTIFY-CLONE'
  }
];

export const TECHNICAL_SKILLS = [
  { category: 'Languages', items: [{ name: 'Java', level: 'Strong (Core, OOP, Collections)', percent: 90 }, { name: 'SQL', level: 'Advanced Certified', percent: 88 }, { name: 'JavaScript (ES6+)', level: 'Intermediate', percent: 82 }, { name: 'HTML5 / CSS3', level: 'Intermediate / Strong', percent: 85 }] },
  { category: 'Frameworks & Web', items: [{ name: 'React.js', level: 'Intermediate (Hooks, State)', percent: 80 }, { name: 'Spring Boot (Java)', level: 'Intermediate (REST, JPA)', percent: 82 }, { name: 'Node.js / Express', level: 'Basic', percent: 70 }] },
  { category: 'Databases & Tools', items: [{ name: 'MySQL', level: 'Intermediate', percent: 85 }, { name: 'Git & GitHub', level: 'Advanced Workflow', percent: 90 }, { name: 'Postman / REST Tools', level: 'Intermediate', percent: 82 }, { name: 'IntelliJ IDEA / VS Code', level: 'Proficient', percent: 92 }] },
  { category: 'Cloud & AI', items: [{ name: 'AWS Cloud Foundations', level: 'AWS Academy Graduate', percent: 85 }, { name: 'AI API Integration', level: 'OpenAI Prompting & LLM', percent: 80 }] }
];
