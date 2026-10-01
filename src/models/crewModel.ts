export interface Crew {
  id: string
  created_at: string
  crew_name: string
}

export interface LeaderboardEntry {
  id: string
  created_at: string
  Crew_id: string
  escape_time: number
}

export interface CrewWithEscapeTime extends Crew {
  escape_time: number | null
}