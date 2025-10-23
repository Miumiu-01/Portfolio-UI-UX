import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Portfolio SSF",
  description:
    "Portfolio personnel réalisé avec Next.js, Tailwind et Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
