interface MenuItemProps {
  name: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
  dataTestId?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  href,
  isActive,
  onClick,
  dataTestId,
}) => {
  return (
    <a
      href={href}
      aria-label={`Navigate to ${name}`}
      aria-current={isActive ? 'page' : undefined}
      data-testid={dataTestId}
      className={`text-foreground uppercase transition duration-300 hover:text-yellow-500 hover:scale-105 ${
        isActive ? 'border-b-2 border-yellow-500 pb-1' : ''
      }`}
      onClick={onClick}
    >
      {name}
    </a>
  );
};
