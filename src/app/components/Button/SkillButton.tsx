import { skillColors, defaultSkillColor } from '../../styles/skillStyles';

interface SkillButtonProps {
  text: string;
  description?: string;
  isActive: boolean;
  onClick: () => void;
  testId?: string; // Novo parâmetro para test ID
}

export default function SkillButton({
  text,
  description = 'This is a placeholder description for the skill.',
  isActive,
  onClick,
  testId, // Recebendo test ID
}: SkillButtonProps) {
  const colorClasses = skillColors[text] || defaultSkillColor;

  return (
    <div
      className={`transition-all duration-500 ${
        isActive ? 'w-full' : 'w-auto'
      }`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      data-test-id={testId} // Adicionando test ID ao container principal
    >
      <button
        className={`border ${
          isActive ? 'rounded-2xl' : 'rounded-full'
        } px-4 py-2 text-lg cursor-pointer ${colorClasses}`}
        onClick={onClick}
        style={{
          textAlign: 'center',
          whiteSpace: 'normal',
        }}
        data-test-id={`${testId}-button`} // Adicionando test ID específico para o botão
      >
        <span
          className={`font-bold transition-all duration-300 ${
            isActive ? 'text-2xl sm:text-2xl px-4 sm:px-12' : 'text-lg'
          }`}
          data-test-id={`${testId}-text`} // Test ID para o texto
        >
          {text}
        </span>
        {isActive && (
          <p
            className={`mt-4 text-m sm:text-xl ${colorClasses} px-4 sm:px-12`}
            data-test-id={`${testId}-description`} // Test ID para a descrição
          >
            {description}
          </p>
        )}
      </button>
    </div>
  );
}
