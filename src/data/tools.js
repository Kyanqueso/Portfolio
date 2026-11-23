import {
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiDotnet,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiCloudflare,
  SiGithub,
  SiTrello,
  SiScikitlearn,
  SiPandas,
  SiSourcetree,
  SiJavascript,
  SiMiro,
  SiTypescript,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiNumpy,
  SiApachespark,
  SiApacheairflow,
  SiSplunk,
  SiDocker,
  SiGit,
  SiLinux,
  SiGoogle,
  SiJira,
} from 'react-icons/si'
import { FaAws, FaChartBar, FaChartPie, FaDatabase, FaPencilRuler } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'
import { TbBrandCSharp } from 'react-icons/tb'
import PlaywrightIcon from '../components/icons/PlaywrightIcon.jsx'
import MicrosoftIcon from '../components/icons/MicrosoftIcon.jsx'
import JavaIcon from '../components/icons/JavaIcon.jsx'
import SasIcon from '../components/icons/SasIcon.jsx'
import ExcelIcon from '../components/icons/ExcelIcon.jsx'
import PowerAutomateIcon from '../components/icons/PowerAutomateIcon.jsx'

const tools = [
  // Languages
  { label: 'Python', icon: SiPython, color: '#3776AB' },
  { label: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { label: 'Java', icon: JavaIcon, color: null },
  { label: 'C#', icon: TbBrandCSharp, color: '#512BD4' },
  { label: 'HTML5', icon: SiHtml5, color: '#E34F26' },

  // Frameworks & Frontend
  { label: 'React', icon: SiReact, color: '#61DAFB' },
  { label: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { label: '.NET', icon: SiDotnet, color: '#512BD4' },
  { label: 'APIs', icon: MdApi, color: '#6E56CF' },

  // Data & Analytics
  { label: 'Pandas', icon: SiPandas, color: '#150458' },
  { label: 'NumPy', icon: SiNumpy, color: '#013243' },
  { label: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { label: 'PySpark', icon: SiApachespark, color: '#E25A1C' },
  { label: 'SAS', icon: SasIcon, color: null },
  { label: 'Apache Airflow', icon: SiApacheairflow, color: '#017CEE' },
  { label: 'Power BI', icon: FaChartBar, color: '#F2C811' },
  { label: 'Tableau', icon: FaChartPie, color: '#E97627' },
  { label: 'Splunk', icon: SiSplunk, color: '#000000' },
  { label: 'Excel', icon: ExcelIcon, color: null },

  // Backend & Databases
  { label: 'Postgres', icon: SiPostgresql, color: '#4169E1' },
  { label: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { label: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },

  // Cloud & Infra
  { label: 'AWS', icon: FaAws, color: '#FF9900' },
  { label: 'Docker', icon: SiDocker, color: '#2496ED' },
  { label: 'Linux & Shell', icon: SiLinux, color: '#000000' },
  { label: 'Vercel', icon: SiVercel, color: '#000000' },
  { label: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },

  // Design
  { label: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { label: 'Miro', icon: SiMiro, color: '#050038' },
  { label: 'Balsamiq', icon: FaPencilRuler, color: '#6E6E6E' },

  // Dev Tools & PM
  { label: 'Git', icon: SiGit, color: '#F05032' },
  { label: 'GitHub', icon: SiGithub, color: '#181717' },
  { label: 'Sourcetree', icon: SiSourcetree, color: '#0052CC' },
  { label: 'Jira', icon: SiJira, color: '#0052CC' },
  { label: 'Trello', icon: SiTrello, color: '#0052CC' },

  // Productivity
  { label: 'Microsoft Office', icon: MicrosoftIcon, color: null },
  { label: 'Power Automate', icon: PowerAutomateIcon, color: null },
  { label: 'Google Workspace', icon: SiGoogle, color: '#4285F4' },

  // Testing
  { label: 'Playwright', icon: PlaywrightIcon, color: null },
]

export default tools
