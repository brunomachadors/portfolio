import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
