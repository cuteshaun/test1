import eventLogo from '../assets/event-logo.png'

export default function MainHeader() {
  return (
    <header className="event-header">
      <div className="event-header__logo">
        <img src={eventLogo} alt="RainFocus Summit event logo" />
      </div>
      <div className="event-header__title">
        <h1 className="event-header__name">RainFocus Summit</h1>
        <div className="event-header__meta">
          <p>December 15th</p>
          <p>Lehi, Utah</p>
        </div>
      </div>
      <button type="button" className="event-header__edit">
        Edit event
      </button>
    </header>
  )
}
