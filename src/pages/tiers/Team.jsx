import TierPage from '../../components/tier/TierPage';

const data = {
  tier: 'Team',
  headline: 'Precision-Built Solutions for the Teams That Compete at the Highest Level.',
  tagline: 'From roster construction to staff alignment, Dash AI identifies what your team actually needs and builds the right system — not a generic playbook.',
  description: [
    'Every team\'s challenges are different. A coaching staff dealing with talent pipeline issues faces a completely different set of problems than one trying to align staff communication or build a modern scouting system. Generic solutions don\'t cut it at this level.',
    'Dash Sports Solutions uses Dash AI to diagnose your team\'s specific performance gaps and design a fully tailored system — one built around your roster, your staff, your culture, and your goals.',
  ],
  forWho: [
    'Head coaches and assistant coaching staffs',
    'General managers and front office talent evaluators',
    'Recruiting coordinators and player development staff',
    'Team performance and analytics personnel',
    'Organizations preparing for a roster or staff rebuild',
  ],
  challenges: [
    'Roster construction misaligned with the team\'s system and identity',
    'Recruiting pipelines that aren\'t producing the right talent profiles',
    'Performance systems that lack accountability or measurable standards',
    'Staff misalignment creating communication breakdowns on and off the field',
    'Scouting processes that rely on intuition instead of structured evaluation',
    'Transition planning gaps when key players or staff members depart',
  ],
  howDashBuilds: [
    'Dash AI opens with a targeted diagnostic conversation focused on your team\'s current state and competitive goals.',
    'It identifies which solution areas — or combination of areas — match your team\'s specific needs.',
    'We design a custom performance system built around your roster composition, staff structure, and organizational goals.',
    'Deliverables include strategic frameworks, evaluation tools, and implementation guides tailored to your team.',
    'If your challenge is unique, Dash builds a fully custom solution that doesn\'t exist in any standard package.',
  ],
  mockupLabel: 'Team-Level Solution Concepts',
};

export default function Team() {
  return <TierPage {...data} />;
}