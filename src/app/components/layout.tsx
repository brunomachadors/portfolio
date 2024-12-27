export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 text-center text-foreground border-b border-border-color">
        <h1>Header</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 text-center text-foreground border-t border-border-color">
        <p>Footer</p>
      </footer>
    </div>
  );
}
