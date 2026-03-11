import "./globals.css";
import "../styles/theme.css";
import Navbar from "../components/layout/Navbar";

export const metadata = {
  title: "RizzMyResume",
  description: "AI powered resume generator"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
