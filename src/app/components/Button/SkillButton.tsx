import { skillColors, defaultSkillColor } from '../../styles/skillStyles';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'; // Ícones

interface SkillButtonProps {
  text: string;
  description?: string;
  isActive: boolean;
  onClick: () => void;
  testId?: string;
}

export default function SkillButton({
  text,
  description = 'This is a placeholder description for the skill.',
  isActive,
  onClick,
  testId,
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
      data-test-id={testId}
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
        data-test-id={`${testId}-button`}
      >
        <span
          className={`font-bold transition-all duration-300 flex items-center gap-2 ${
            isActive
              ? 'text-2xl sm:text-2xl px-4 sm:px-12 justify-center'
              : 'text-lg'
          }`}
          data-test-id={`${testId}-text`}
        >
          {isActive ? (
            <FiChevronDown className="inline" />
          ) : (
            <FiChevronRight className="inline" />
          )}
          {text}
        </span>
        {isActive && (
          <p
            className={`mt-4 text-m sm:text-xl ${colorClasses} px-4 sm:px-12`}
            data-test-id={`${testId}-description`}
          >
            {description}
          </p>
        )}
      </button>
    </div>
  );
}
