import TierPage from '../../components/tier/TierPage';

const data = {
  tier: 'Individual',
  headline: 'Custom Performance Systems for Athletes Who Refuse to Leave Anything to Chance.',
  tagline: 'Dash AI builds a personalized system around the athlete — from performance profiling to career strategy, NIL positioning, and beyond.',
  description: [
    'Individual athletes operate in an increasingly complex environment. Performance demands are higher, career windows are shorter, and the decisions athletes and their teams make off the field can be just as consequential as those made on it.',
    'Dash Sports Solutions works with individual athletes and their support networks to build fully personalized performance and career systems — designed around who they are, where they are in their journey, and exactly where they need to go.',
  ],
  forWho: [
    'College athletes navigating eligibility, NIL, and career transitions',
    'Professional athletes seeking performance or career strategy support',
    'High school athletes preparing for the next level',
    'Athletes and agents focused on brand positioning and career longevity',
    'Emerging sports professionals building post-playing careers',
  ],
  challenges: [
    'No clear picture of individual performance strengths, gaps, and development priorities',
    'Uncertain career trajectory and positioning for the next level',
    'NIL strategy that lacks structure, direction, or brand coherence',
    'Mental performance challenges affecting consistency and resilience',
    'Transition anxiety when moving between playing levels or out of sport entirely',
    'Lack of a professional support system beyond coaching staff',
  ],
  howDashBuilds: [
    'Dash AI begins with a personal diagnostic conversation to understand the athlete\'s current situation, goals, and key challenges.',
    'It maps the athlete\'s profile against our Individual solution library to identify the most relevant performance and career systems.',
    'We build a fully personalized plan — not a generic athlete development checklist, but a system built around this specific individual.',
    'Deliverables are designed to be immediately actionable, with clear milestones, reflection tools, and progress benchmarks.',
    'Custom solutions are developed for athletes whose needs fall outside our standard library — because no two athletes are the same.',
  ],
  mockupLabel: 'Individual-Level Solution Concepts',
};

export default function Individual() {
  return <TierPage {...data} />;
}