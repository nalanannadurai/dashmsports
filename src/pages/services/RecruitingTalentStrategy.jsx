import ServicePage from '../../components/service/ServicePage';

const data = {
  serviceName: 'Recruiting, Roster & Talent Strategy',
  title: 'Recruiting, Roster & Talent Strategy',
  subheadline: 'Build stronger talent pipelines and smarter roster decisions.',
  description: [
    'We help sports organizations improve how they identify, prioritize, and invest in talent. Whether the focus is recruiting, roster construction, or broader talent strategy, this service is designed to create more intentional, data-informed approaches.',
    'Better talent decisions require better frameworks. We help organizations build competitive advantage through smarter planning, clearer priorities, and more disciplined execution.',
  ],
  problems: [
    'Inefficient recruiting strategy creating missed opportunities and wasted resources',
    'Poor talent investment decisions not aligned to organizational priorities',
    'Weak position-value prioritization leading to roster imbalance',
    'Roster construction that lacks strategic intent or coherent logic',
    'No structured framework for talent planning and evaluation',
  ],
  howWeWork: [
    'Review current recruiting strategy, processes, and decision criteria',
    'Assess historical investment patterns, priorities, and outcomes',
    'Evaluate the talent evaluation framework for rigor and consistency',
    'Identify gaps in roster construction logic and positional investment',
    'Recommend a stronger, more intentional talent strategy framework',
  ],
  deliverables: [
    'Talent strategy assessment report',
    'Recruiting and roster analysis',
    'Position-value prioritization recommendations',
    'Talent planning and evaluation framework',
    'Leadership debrief and strategic action plan',
  ],
  idealClients: [
    'College programs focused on recruiting effectiveness',
    'Professional teams evaluating roster and talent strategy',
    'Recruiting-focused leadership groups and coaching staffs',
    'Organizations making significant investments in talent acquisition',
  ],
};

export default function RecruitingTalentStrategy() {
  return <ServicePage {...data} />;
}