import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center bg-black px-6 py-6 sm:px-24">
      <Logo />
      <Menu />
    </header>
  );
}
