export interface NavSection {
  id: string
  name: string
  href: string
}

export interface StoryAct {
  id: string
  phase: string
  title: string
  desc: string
  accent: string
}

export interface MissionTrack {
  id: string
  icon: string
  title: string
  desc: string
  trackNumber: string
}

export interface TicketTier {
  id: string
  name: string
  price: string
  popular: boolean
  perks: string[]
  cta: string
}

export interface LeaderboardTeam {
  id: string
  rank: string
  name: string
  track: string
  status: 'Submitted' | 'Final Review' | 'Coding'
  points: string
  badge?: string
}

export interface EventStat {
  label: string
  value: string
}
