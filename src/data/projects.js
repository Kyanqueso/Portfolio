import theresaAboutUs from '../assets/TheresaShoes/About Us.png'
import theresaCompany from '../assets/TheresaShoes/Company.png'
import theresaContactUs from '../assets/TheresaShoes/Contact Us.png'
import theresaOrders from '../assets/TheresaShoes/Orders.png'
import theresaClient1 from '../assets/TheresaShoes/client1.jpg'
import theresaClient2 from '../assets/TheresaShoes/client2.jpg'
import theresaAnalytics from '../assets/TheresaShoes/new_analytics.png'
import theresaNewGuest from '../assets/TheresaShoes/new_guest.png'
import theresaOldGuest from '../assets/TheresaShoes/old_guest.png'
import theresaErd from '../assets/TheresaShoes/erd.png'
import theresaUserFlow from '../assets/TheresaShoes/userFlow.png'

import shopzadaCampaigns from '../assets/Shopzada/Campaigns Dashboard.png'
import shopzadaExecutive from '../assets/Shopzada/Executive dashboard.png'
import shopzadaOrders from '../assets/Shopzada/Orders dashboard.png'
import shopzadaUsers from '../assets/Shopzada/User dashboard.png'
import shopzadaRawData1 from '../assets/Shopzada/sample raw data 1.png'
import shopzadaRawData2 from '../assets/Shopzada/sample raw data 2.png'
import shopzadaDag1 from '../assets/Shopzada/Dag1.png'
import shopzadaDag2 from '../assets/Shopzada/Dag2.png'

import mtchome from '../assets/MagicTouchConsole/homepage.png'
import mtcWireframe1 from '../assets/MagicTouchConsole/Wireframe 1.png'
import mtcWireframe2 from '../assets/MagicTouchConsole/Wireframe 2.png'
import mtcPrototype1 from '../assets/MagicTouchConsole/Prototype 1.png'
import mtcPrototype2 from '../assets/MagicTouchConsole/Prototype 2.png'
import mtcJobOrderSummary from '../assets/MagicTouchConsole/Job order summary.png'
import mtcAddingPOs from '../assets/MagicTouchConsole/Adding POs.png'
import mtcUserFlow from '../assets/MagicTouchConsole/user_flow.png'
import mtcDbDiagram from '../assets/MagicTouchConsole/mtc dbdiagram.png'

// import hmmAiPage from '../assets/HelpMeManage/AI_Page.png'
// import hmmDashboard from '../assets/HelpMeManage/Dashboard.png'

// import electionErd from '../assets/ElectionSystem/ERD.png'
// import electionUserFlow from '../assets/ElectionSystem/UserFlow.png'
// import electionScreenshot from '../assets/ElectionSystem/Election System.png'

const projects = [
  {
    slug: 'theresa-shoes',
    category: 'Ordering System',
    title: 'Theresa Shoes',
    description:
      'A full CRUD web application that automates product listings, order and payment tracking, and business analytics, cutting out the manual work that used to eat up business owners\' time.',
    tags: ['React', 'Python', 'AWS Lambda', 'Supabase'],
    image: theresaAnalytics,
    demoHref: 'https://web-kappa-two-18.vercel.app/',
    githubHref: 'https://github.com/Kyanqueso/theresa_shoes_app',
    steps: [
      {
        icon: '💡',
        title: 'Finding the Right Fit',
        description:
          "As project lead, I worked directly with the client to gather business requirements and understand how both they and their customers needed to interact better.",
        images: [],
      },
      {
        icon: '🧭',
        title: 'Mapping It Out',
        description:
          'We translated those requirements into user flows and an ERD, laying out how people and data would move through the system, and also serving as a reference for the team.',
        images: [
          { src: theresaUserFlow, caption: 'User Flow Diagram' },
          { src: theresaErd, caption: 'Entity Relationship Diagram' },
        ],
      },
      {
        icon: '🎨',
        title: 'Designing the Vision',
        description:
          'We turned the flows into clickable prototypes in Figma, giving the client something tangible to react to before we start development.',
        images: [
          { src: theresaCompany, caption: 'Admin - Client Management' },
          { src: theresaContactUs, caption: 'Contact Us Page' },
          { src: theresaOrders, caption: 'Admin - Order Tracking' },
          { src: theresaAboutUs, caption: 'About Us Page' },
        ],
        figmaHref: 'https://www.figma.com/design/gQeNcUkXKiUfO33eJSIjPD/Theresa-Shoes?node-id=1-2&t=hrpGsZ1nKKA3T1Wo-1',
      },
      {
        icon: '🔧',
        title: 'Building (and Rebuilding)',
        description:
          "My co-developer and I started building in Electron, then pivoted to a web app once cross-device access became a priority, and pivoted again after realizing the client wanted one unified site instead of separate guest and admin systems.",
        images: [
          { src: theresaOldGuest, caption: 'Guest Site' },
          { src: theresaCompany, caption: 'Admin Panel' },
        ],
        imageJoiner: '+',
      },
      {
        icon: '🔍',
        title: 'Putting It to the Test',
        description: 'We ran the system through QA together to catch edge cases before it reached real customers.',
        images: [],
      },
      {
        icon: '🚀',
        title: 'Shipping It',
        description: 'I handled deployment myself, getting the finished website live for the client.',
        images: [],
      },
      {
        icon: '🎉',
        title: 'The Verdict',
        description:
          "The client loved the result as we successfully produced a single, streamlined site that finally matched what he'd envisioned from the start.",
        images: [
          { src: theresaClient1, caption: 'Client Using the Website' },
          { src: theresaClient2, caption: 'Client Sign-off & User Manual Handoff' },
          { src: theresaAnalytics, caption: 'Business Analytics Dashboard' },
          { src: theresaNewGuest, caption: 'Unified Storefront' },
        ],
        imageNote: "The client kindly approved featuring these photos of us on my portfolio.",
      },
    ],
  },
  {
    slug: 'magic-touch-console',
    category: 'ERP System',
    title: 'Magic Touch Console',
    description:
      'A custom web-based ERP built solo for a printing press company, bringing disconnected processes into one unified system and replacing spreadsheets with a structured way to manage daily operations.',
    tags: ['React', 'Quarkus', 'AWS Lambda', 'Supabase'],
    image: mtchome,
    demoHref: 'https://mtcdemo.charlesque404.workers.dev/login',
    githubHref: 'https://github.com/Kyanqueso/magic_touch_console',
    steps: [
      {
        icon: '💡',
        title: 'Making Sense of the Files',
        description:
          "Worked through the business requirements with the client to figure out how their customers, suppliers, purchase orders, invoices, vouchers, and job orders should all come together into a single system.",
        images: [
          { src: mtcUserFlow, caption: 'User Flow Diagram' },
          { src: mtcDbDiagram, caption: 'Entity Relationship Diagram' },
        ],
      },
      {
        icon: '✏️',
        title: 'Sketching It Out',
        description:
          'Wireframed the console from customer and supplier records to PO, invoice, voucher, and job order tracking and checked in with the client for approval before turning those wireframes into a working prototype.',
        images: [
          { src: mtcWireframe1, caption: 'Wireframe — Corporate Profiles' },
          { src: mtcWireframe2, caption: 'Wireframe — Job Order Summary' },
          { src: mtcPrototype1, caption: 'Prototype — Corporate Profiles' },
          { src: mtcPrototype2, caption: 'Prototype — Business Registration' },
        ],
        imageGridClass: 'grid-cols-2 sm:grid-cols-4',
        figmaHref: 'https://www.figma.com/design/gYwW6L8g3fgMzq1grutC6U/Magic-Touch-Console?node-id=0-1&p=f&t=WUaXfcImlFasB7nK-0',
      },
      {
        icon: '🔧',
        title: 'Building It Solo',
        description:
          'Took the prototype and built out the full console end to end on my own, module by module.',
        images: [],
      },
      {
        icon: '🔍',
        title: 'A Second Pair of Eyes',
        description:
          'Brought in a friend to QA the system, someone outside my own head, to catch what I might have missed and keep the testing unbiased.',
        images: [],
      },
      {
        icon: '🔐',
        title: 'Fine-Tuning Access',
        description:
          "I also built out proper access control for admin-managed users: instead of one blanket admin role, each user is scoped per module, view-only on some, full edit access on others, so someone handling job orders isn't also able to touch invoices or vouchers they have no business in.",
        images: [],
      },
      {
        icon: '🚀',
        title: 'Shipping It',
        description: 'Deployed it with a familiar stack: React, Python, AWS Lambda, and Supabase.',
        images: [],
      },
      {
        icon: '🎉',
        title: 'The Verdict',
        description:
          'The client was impressed with the result. A system that brought much-needed structure to their day-to-day operations, with a solid foundation in place for the many workflows and improvements still to come.',
        images: [
          { src: mtcJobOrderSummary, caption: 'Job Order Summary' },
          { src: mtcAddingPOs, caption: 'Adding a Purchase Order' },
        ],
      },
    ],
  },
  {
    slug: 'shopzada-data-warehouse',
    category: 'Data Warehouse',
    title: 'Shopzada Data Warehouse',
    description:
      'A data warehouse for a conceptual e-commerce platform, converting and cleaning raw data into BI dashboards for tracking sales performance, customer behavior, and order fulfillment.',
    tags: ['Python', 'Postgres', 'Docker', 'Apache Airflow', 'Power BI'],
    image: shopzadaExecutive,
    demoHref: null,
    githubHref: 'https://github.com/n4t5Uuu/dwh_finalproject_3CSC_group_Lakers-Showtime',
    steps: [
      {
        icon: '🧹',
        title: 'Cleaning House',
        description:
          'The raw data we received was scattered across multiple sources and full of inconsistencies. We spent the first stretch just understanding it and pinning down the actual business questions it needed to answer.',
        images: [
          { src: shopzadaRawData1, caption: 'Raw Order & Line-Item Files' },
          { src: shopzadaRawData2, caption: 'Raw Merchant & Staff Files' },
        ],
      },
      {
        icon: '📐',
        title: 'Blueprinting the Warehouse',
        description:
          'We designed a data warehouse schema and reviewed it together as a team to make sure it could actually support the reporting needs, before writing a single line of pipeline code.',
        images: [],
      },
      {
        icon: '⚙️',
        title: 'Automating the Flow',
        description:
          'We built out Airflow DAGs to extract, clean, and load the data into Postgres, turning a manual process into a repeatable pipeline.',
        images: [],
      },
      {
        icon: '💍',
        title: 'One DAG to Rule Them All',
        description:
          "We started with several DAGs handling different stages, but quickly realized that was overkill. We consolidated everything into a single end-to-end DAG, making the whole pipeline easier to run, monitor, and debug.",
        images: [
          { src: shopzadaDag1, caption: 'Unified End-to-End DAG' },
          { src: shopzadaDag2, caption: 'DAG Task Breakdown' },
        ],
      },
      {
        icon: '🎬',
        title: 'Center Stage in Power BI',
        description:
          'The cleaned data finally made its way into Power BI, where I took the lead — designing and building every dashboard myself to turn the warehouse into something the business could actually use to make decisions.',
        images: [
          { src: shopzadaCampaigns, caption: 'Campaigns Dashboard' },
          { src: shopzadaUsers, caption: 'Customer Behavior Dashboard' },
          { src: shopzadaOrders, caption: 'Order Fulfillment Dashboard' },
          { src: shopzadaExecutive, caption: 'Executive Summary Dashboard' },
        ],
      },
    ],
  },
  /* Temporarily off the site.
  {
    slug: 'helpmemanage',
    category: 'Personal Management System',
    title: 'HelpMeManage',
    description:
      'A personal freelance management tool, that could be shared with other freelancers, centralizing finances, projects, and clients with an AI chatbot for assistance.',
    tags: ['React', 'Python', 'SQLite', 'AWS EC2', 'Amazon Bedrock'],
    image: hmmDashboard,
    demoHref: 'https://help-me-manage-jade.vercel.app/',
    githubHref: 'https://github.com/Kyanqueso/HelpMeManage',
    steps: [
      {
        icon: '💡',
        title: 'Scratching My Own Itch',
        description:
          'Freelancing meant juggling clients, projects, and finances across a dozen different tools. I built HelpMeManage to bring it all into one place, and to give myself something to practice on outside of client work.',
        images: [],
      },
      {
        icon: '🛠️',
        title: 'Keeping It Simple',
        description:
          "At its core, it's straightforward CRUD: create, track, and manage clients, projects, and finances without extra bells and whistles getting in the way.",
        images: [{ src: hmmDashboard, caption: 'Dashboard Overview' }],
      },
      {
        icon: '🤖',
        title: 'Wiring Up the AI',
        description:
          "For now, I'm running the backend on a single AWS EC2 instance with a local SQLite database, with Amazon Bedrock powering an AI chatbot that can answer questions and help manage the data directly. It's a stopgap setup, quick to stand up while I focus on features, before migrating to a managed database and serverless hosting.",
        images: [{ src: hmmAiPage, caption: 'AI Proposal Generator' }],
      },
      {
        icon: '🚧',
        title: 'Still a Work in Progress',
        description:
          "It's very much a living prototype, infrastructure included. I'm about to start using it on my own freelance work, and I'll keep shipping improvements, and eventually revisit the hosting setup, as I figure out what a freelancer, starting with me, actually needs.",
        images: [],
      },
    ],
  },
  {
    slug: 'election-system',
    category: 'Election Management System',
    title: 'Election System',
    description:
      'A role-based online voting platform built with two teammates for our final project - an admin manages users and the audit trail, an organizer runs elections and manages candidates, and voters register, cast a single vote, and view live results.',
    tags: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'reCAPTCHA'],
    image: electionScreenshot,
    demoHref: null,
    githubHref: 'https://github.com/Kyanqueso/ElectionSystem',
    steps: [
      {
        icon: '💡',
        title: 'A Team Final Project',
        description:
          "Assigned as our final project for a software engineering course, my two teammates and I set out to build a secure, role-based online voting system: an admin to manage users and audit logs, an organizer to run elections, and voters to register and cast a ballot.",
        images: [],
      },
      {
        icon: '🧭',
        title: 'Mapping It Out',
        description:
          'Before writing any code, we modeled the data with an ERD and mapped the full login-to-vote flow across all three roles, so the whole team was building against the same plan.',
        images: [
          { src: electionUserFlow, caption: 'User Flow Diagram' },
          { src: electionErd, caption: 'Entity Relationship Diagram' },
        ],
      },
      {
        icon: '⏩',
        title: 'Skipping the Mockups',
        description:
          "We skipped Figma this time around. Between the three of us we already had a clear, shared picture of what the screens needed to look like, so we went straight from the user flow into building.",
        images: [],
      },
      {
        icon: '🔧',
        title: 'Building It',
        description:
          "We built the frontend in plain HTML, CSS, and JavaScript on top of a Java backend, with MySQL for storage. Passwords were hashed and sensitive data encrypted with Java's Cipher library, and reCAPTCHA guarded the login and registration forms against bots.",
        images: [],
      },
      {
        icon: '🎓',
        title: 'Looking Back',
        description:
          "We shipped a fully functional system and walked away with a strong grade on it. Also, it was one of my first real full-stack projects, and it taught me more about databases, authentication, and working as a team than any lecture had. The tech stack shows its age but it really shows how far my skills have come since.",
        images: [{ src: electionScreenshot, caption: 'Organizer — Voter Management' }],
      },
    ],
  },
  */
]

export default projects
