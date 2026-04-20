import ServicePage from '../../components/service/ServicePage';

const data = {
  serviceName: 'Athletic Department Strategy',
  title: 'Athletic Department Strategy',
  subheadline: 'Strategic guidance for departments navigating modern competitive pressure.',
  description: [
    'We help athletic departments think more clearly about structure, priorities, and long-term competitive positioning. From NIL disruption to conference changes and operational complexity, this service supports leaders who need a strategic partner.',
    'We assess where your department stands and where it needs to go — delivering a clear, actionable roadmap built for today\'s landscape.',
  ],
  problems: [
    'Lack of long-term strategic clarity in a rapidly changing environment',
    'NIL uncertainty affecting recruiting and departmental planning',
    'Fragmented departmental priorities with no cohesive direction',
    'Misalignment between leadership vision and day-to-day execution',
    'Difficulty adapting to structural changes in college athletics',
  ],
  howWeWork: [
    'Assess departmental structure, operations, and strategic priorities',
    'Identify growth opportunities and key organizational risk points',
    'Evaluate internal alignment across leadership and staff',
    'Recommend a practical, phased strategic roadmap',
    'Support implementation planning and leadership alignment',
  ],
  deliverables: [
    'Department strategy assessment',
    'Opportunity and risk analysis',
    'Priority roadmap and action plan',
    'Leadership alignment recommendations',
    'Strategic planning support documentation',
  ],
  idealClients: [
    'Division I athletic departments',
    'Athletic directors and university leadership',
    'Departments navigating conference realignment or NIL complexity',
    'NIL-adjacent leadership and advisory groups',
  ],
};

export default function AthleticDepartmentStrategy() {
  return <ServicePage {...data} />;
}