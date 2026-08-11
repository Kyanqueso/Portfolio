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
} from 'react-icons/si'
import { FaAws, FaChartBar, FaChartPie, FaDatabase, FaPencilRuler } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'
import PlaywrightIcon from '../components/icons/PlaywrightIcon.jsx'
import MicrosoftIcon from '../components/icons/MicrosoftIcon.jsx'
import JavaIcon from '../components/icons/JavaIcon.jsx'

const tools = [
  // Languages
  { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { label: 'Java', icon: JavaIcon, color: null },
  { label: 'Python', icon: SiPython, color: '#3776AB' },
  { label: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { label: '.NET', icon: SiDotnet, color: '#512BD4' },

  // Frameworks & Frontend
  { label: 'React', icon: SiReact, color: '#61DAFB' },
  { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { label: 'APIs', icon: MdApi, color: '#6E56CF' },

  // Data & Analytics
  { label: 'Pandas', icon: SiPandas, color: '#150458' },
  { label: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { label: 'Power BI', icon: FaChartBar, color: '#F2C811' },
  { label: 'Tableau', icon: FaChartPie, color: '#E97627' },

  // Backend & Databases
  { label: 'Postgres', icon: SiPostgresql, color: '#4169E1' },
  { label: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },

  // Cloud & Infra
  { label: 'AWS', icon: FaAws, color: '#FF9900' },
  { label: 'Vercel', icon: SiVercel, color: '#000000' },
  { label: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
  { label: 'Microsoft', icon: MicrosoftIcon, color: null },

  // Design
  { label: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { label: 'Miro', icon: SiMiro, color: '#050038' },
  { label: 'Balsamiq', icon: FaPencilRuler, color: '#6E6E6E' },

  // Dev Tools & PM
  { label: 'GitHub', icon: SiGithub, color: '#181717' },
  { label: 'Sourcetree', icon: SiSourcetree, color: '#0052CC' },
  { label: 'Trello', icon: SiTrello, color: '#0052CC' },

  // Testing
  { label: 'Playwright', icon: PlaywrightIcon, color: null },
]

export default tools
