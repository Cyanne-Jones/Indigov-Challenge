import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from '../theme/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NavBar } from "./components/navBar/NavBar";

export const metadata: Metadata = {
  title: "Representative Portal",
  description: "A portal to view and manage your constituents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <NavBar />
          {children}
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
