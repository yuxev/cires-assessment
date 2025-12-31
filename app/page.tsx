import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/session';


export default function HomePage() {
  // Immediately redirect anyone visiting '/' to '/login'
  if (!verifySession())
  	redirect('/login');
  else
	redirect('/gallery');
}