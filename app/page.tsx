import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/session';


export default async function HomePage() {
  await verifySession();
  redirect('/gallery');
}