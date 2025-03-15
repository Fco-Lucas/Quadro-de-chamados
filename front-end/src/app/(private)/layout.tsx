import "../globals.css";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>PRIVATE</h1>
      {children}
    </div>
  );
}
