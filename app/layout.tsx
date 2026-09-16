import type { Metadata } from "next";
import "./globals.css";
import StartBar from "../components/start_bar";


export const metadata: Metadata = {
  title: "Cassandra's Resume Site",
  description: "Created by Cassandra Williams-Pauley",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="relative min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
