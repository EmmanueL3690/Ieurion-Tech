function Icon({ icon: IconComponent, size = 20, className = "" }) {
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={className}
      aria-hidden="true"
    />
  );
}

export default Icon;