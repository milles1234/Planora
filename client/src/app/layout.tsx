
import DasboardWrapper from "./Dasboard";
import Dasboard from "./Dasboard";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <DasboardWrapper>{children}</DasboardWrapper>
        
        
      </body>
    </html>
  );
}
