import TierPage from '../../components/tier/TierPage';

const data = {
  tier: 'Program',
  headline: 'Custom-Built Strategy for Athletic Programs That Demand More.',
  tagline: 'Dash AI diagnoses your program\'s exact challenges and builds a precision solution — tailored to your structure, culture, and competitive goals.',
  description: [
    'Athletic programs face constant pressure to perform, adapt, and evolve. Whether you\'re a Division I athletic department navigating conference realignment, a mid-major program scaling operations, or a front office rebuilding from the ground up — the challenges are real, complex, and unique to you.',
    'Dash Sports Solutions doesn\'t offer pre-packaged consulting. We use Dash AI to build a full picture of your program\'s needs and design a solution from the ground up — one that fits your specific environment, not someone else\'s template.',
  ],
  forWho: [
    'Division I, II, and III athletic departments',
    'Professional sports franchises and front offices',
    'Emerging or independent athletic programs',
    'Organizations undergoing leadership or structural transitions',
    'Programs seeking to modernize operations or analytics infrastructure',
  ],
  challenges: [
    'Unclear organizational structure creating inefficiency and accountability gaps',
    'Lack of a unified strategic vision across departments and staff',
    'Operational bottlenecks reducing program performance and agility',
    'Underutilized data and analytics infrastructure',
    'Front office processes that no longer match the pace of the sport',
    'Difficulty aligning leadership around shared goals and outcomes',
  ],
  howDashBuilds: [
    'Dash AI conducts an intelligent intake conversation to understand your program\'s structure, challenges, and strategic goals.',
    'Our team cross-references your inputs against our full solution library to identify the most relevant combination of solution areas.',
    'We design a fully custom engagement plan — built around your program\'s specific needs, not a preset package.',
    'Solutions are delivered with clear implementation roadmaps, accountability frameworks, and measurable outcomes.',
    'If your challenge falls outside our existing library, we build a completely custom solution from scratch.',
  ],
  mockupLabel: 'Program-Level Solution Concepts',
};

export default function Program() {
  return <TierPage {...data} />;
}