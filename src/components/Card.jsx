export default function Card({
  variant = 'workflow',
  icon,
  title,
  description,
  label,
  onClick,
}) {
  if (variant === 'add') {
    return (
      <button type="button" className="add-card" onClick={onClick}>
        <span className="add-card__icon">
          <img src={icon} alt="" aria-hidden="true" />
        </span>
        <span className="add-card__label">{label}</span>
      </button>
    )
  }

  return (
    <article className="workflow-card">
      <div className="workflow-card__header">
        <span className="workflow-card__icon">
          <img src={icon} alt="" aria-hidden="true" />
        </span>
        <h4 className="workflow-card__title">{title}</h4>
      </div>
      <p className="workflow-card__desc">{description}</p>
    </article>
  )
}
