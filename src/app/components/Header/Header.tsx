import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="flex justify-between sm:justify-around items-center p-4">
      <Logo />
      <Menu />
    </header>
  );
}
