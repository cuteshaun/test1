import personBody from '../assets/icons/person-body.svg'
import personHead from '../assets/icons/person-head.svg'
import personDetail from '../assets/icons/person-detail.svg'
import logicArrow from '../assets/icons/logic-arrow.svg'
import addCircle from '../assets/icons/add-circle.svg'
import computer from '../assets/icons/computer.svg'

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
            <article key={i} className="workflow-card">
              <div className="workflow-card__header">
                <span className="workflow-card__icon">
                  <img src={logicArrow} alt="" aria-hidden="true" />
                </span>
                <h4 className="workflow-card__title">{card.title}</h4>
              </div>
              <p className="workflow-card__desc">{card.desc}</p>
            </article>
          ))}
          <button type="button" className="add-card">
            <span className="add-card__icon">
              <img src={addCircle} alt="" aria-hidden="true" />
            </span>
            <span className="add-card__label">Add Registration Workflow</span>
          </button>
        </div>
      </div>

      <div className="step">
        <p className="step__header">
          <strong>Step 3:</strong> Design post-registration experiences.
        </p>
        <div className="single-card-row">
          <article className="workflow-card">
            <div className="workflow-card__header">
              <span className="workflow-card__icon">
                <img src={computer} alt="" aria-hidden="true" />
              </span>
              <h4 className="workflow-card__title">Attendee Portal</h4>
            </div>
            <p className="workflow-card__desc">
              Manage the portal that attendees will see after they’ve register
              for your event.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
