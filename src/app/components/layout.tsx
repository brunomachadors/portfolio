import Header from './Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 text-center text-foreground">
        <p>Footer</p>
      </footer>
    </div>
  );
}
