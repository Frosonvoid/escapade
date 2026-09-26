import { useState, useEffect } from 'react'
import {
  NAV_SECTIONS_MODEL,
  EVENT_STATS_MODEL,
  STORY_ACTS_MODEL,
  MISSION_TRACKS_MODEL,
  TICKET_TIERS_MODEL,
  LEADERBOARD_TEAMS_MODEL,
} from '../models/landingDataModel'
import type { TicketTier } from '../models/types'

export function useLandingController() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [selectedTicket, setSelectedTicket] = useState<TicketTier | null>(null)

  // Scroll listener controller logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_SECTIONS_MODEL.map((s) => s.id)
      const scrollPosition = window.scrollY + 200

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleSelectTicket = (ticket: TicketTier) => {
    setSelectedTicket(ticket)
  }

  const handleCloseModal = () => {
    setSelectedTicket(null)
  }

  return {
    // Controller state & handlers
    activeSection,
    mobileMenuOpen,
    selectedTicket,
    toggleMobileMenu,
    closeMobileMenu,
    handleSelectTicket,
    handleCloseModal,

    // Models
    navSections: NAV_SECTIONS_MODEL,
    eventStats: EVENT_STATS_MODEL,
    storyActs: STORY_ACTS_MODEL,
    missionTracks: MISSION_TRACKS_MODEL,
    ticketTiers: TICKET_TIERS_MODEL,
    leaderboardTeams: LEADERBOARD_TEAMS_MODEL,
  }
}
