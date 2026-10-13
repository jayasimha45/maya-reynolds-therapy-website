import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD', description: 'Warm, collaborative therapy for adults in Santa Monica and across California. Support for anxiety, panic, trauma, burnout, and perfectionism with CBT, EMDR, mindfulness, and body-oriented approaches.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
