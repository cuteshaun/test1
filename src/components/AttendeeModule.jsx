import personBody from '../assets/icons/person-body.svg'
import personHead from '../assets/icons/person-head.svg'
import personDetail from '../assets/icons/person-detail.svg'
import logicArrow from '../assets/icons/logic-arrow.svg'
import addCircle from '../assets/icons/add-circle.svg'
import computer from '../assets/icons/computer.svg'
import Card from './Card.jsx'

const step1Items = [
  { title: 'General', desc: 'Define Attendee types & attributes' },
  {
    title: 'Title',
    desc: 'Description that explains the value goes here. Description that explains the value goes here.',
  },
  {
    title: 'Title',
    desc: 'Description that explains the value goes here. Description that explains the value goes here.',
  },
]

const workflowCards = [
  {
    title: 'Attendee Registration',
    desc: 'Start by creating a general registration workflow',
  },
  {
    title: 'Attendee Registration',
    desc: 'Start by creating a general registration workflow',
  },
  {
    title: 'Attendee Registration',
    desc: 'Start by creating a general registration workflow',
  },
]

export default function AttendeeModule() {
  return (
    <section className="attendee-module" aria-labelledby="attendee-heading">
      <div className="attendee-module__header">
        <span className="person-portal" aria-hidden="true">
          <span className="person-portal__layer person-portal__layer--body">
            <img src={personBody} alt="" />
          </span>
          <span className="person-portal__layer person-portal__layer--head">
            <img src={personHead} alt="" />
          </span>
          <span className="person-portal__layer person-portal__layer--detail">
            <img src={personDetail} alt="" />
          </span>
        </span>
        <h3 id="attendee-heading" className="attendee-module__heading">
          Attendee
        </h3>
      </div>

      <div className="step">
        <p className="step__header">
          <strong>Step 1:</strong> Base settings.
        </p>
        <div className="step-row-card">
          {step1Items.map((item, i) => (
            <div key={i} className="step-row-card__item">
              <div className="step-row-card__title">{item.title}</div>
              <p className="step-row-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="step">
        <p className="step__header">
          <strong>Step 2:</strong> Build registration workflows.
        </p>
        <div className="card-grid">
          {workflowCards.map((card, i) => (
            <Card
              key={i}
              variant="workflow"
              icon={logicArrow}
              title={card.title}
              description={card.desc}
            />
          ))}
          <Card
            variant="add"
            icon={addCircle}
            label="Add Registration Workflow"
          />
        </div>
      </div>

      <div className="step">
        <p className="step__header">
          <strong>Step 3:</strong> Design post-registration experiences.
        </p>
        <div className="single-card-row">
          <Card
            variant="workflow"
            icon={computer}
            title="Attendee Portal"
            description="Manage the portal that attendees will see after they’ve register for your event."
          />
        </div>
      </div>
    </section>
  )
}
