import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-6 sm:px-24">
      <Logo />
      <Menu />
    </header>
  );
}
