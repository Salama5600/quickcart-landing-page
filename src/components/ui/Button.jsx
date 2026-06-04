import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  loading,
  ...props
}) {
  const classes = [
    'btn',
    variant === 'ghost' && 'btn-ghost',
    variant === 'outline' && 'btn-outline',
    size === 'sm' && 'btn-sm',
    size === 'lg' && 'btn-lg',
    loading && 'btn-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading && <span className="btn-spinner" aria-hidden="true" />}
      <span className={loading ? 'btn-text-loading' : undefined}>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={loading || props.disabled} {...props}>
      {content}
    </button>
  );
}
