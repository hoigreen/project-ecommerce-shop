'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '@/components/pattern/navbar/page';
import Footer from '@/components/pattern/footer/page';

const defaultTheme = createTheme();

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl">
        <main>
          <Grid container spacing={5} sx={{ mt: 4, mb: 4 }}>
            {children}
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}