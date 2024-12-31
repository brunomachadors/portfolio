interface ButtonProps {
  text: string;
  onClick?: () => void;
  extraClasses?: string; // Para adicionar classes extras ao botão, se necessário.
}

export default function Button({
  text,
  onClick,
  extraClasses = '',
}: ButtonProps) {
  const baseClasses =
    'border border-yellow-500 text-yellow-500 rounded-full px-8 py-4 text-lg hover:scale-110 transition-transform';

  return (
    <button className={`${baseClasses} ${extraClasses}`} onClick={onClick}>
      {text}
    </button>
  );
}
