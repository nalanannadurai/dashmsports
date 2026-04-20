import ServicePage from '../../components/service/ServicePage';

const data = {
  serviceName: 'Front Office Evaluation',
  title: 'Front Office Evaluation',
  subheadline: 'Objective evaluation for the decisions that shape a team\'s future.',
  description: [
    'This service helps sports organizations assess how front office decisions are made, where inefficiencies exist, and how strategic choices around talent, roster construction, and long-term planning can be improved.',
    'We evaluate processes, communication, and the systems behind major decisions so organizations can operate with greater clarity and confidence.',
  ],
  problems: [
    'Inconsistent roster-building decisions that undermine long-term strategy',
    'Poor alignment between scouting, analytics, and leadership',
    'Unclear decision authority creating operational confusion',
    'Resource allocation inefficiencies across departments',
    'Lack of objective performance review frameworks',
  ],
  howWeWork: [
    'Review organizational decision-making structure and governance',
    'Assess communication flow between departments and leadership tiers',
    'Evaluate talent and roster strategy framework in depth',
    'Identify blind spots, inefficiencies, and misaligned incentives',
    'Deliver practical, prioritized recommendations with executive debrief',
  ],
  deliverables: [
    'Front office assessment summary',
    'Decision-making gap analysis',
    'Recommendations for better role alignment',
    'Strategic framework for future decisions',
    'Executive debrief presentation',
  ],
  idealClients: [
    'Professional sports teams',
    'College athletic departments',
    'Ownership groups evaluating front office performance',
    'Leadership teams assessing competitive strategy',
  ],
};

export default function FrontOfficeEvaluation() {
  return <ServicePage {...data} />;
}