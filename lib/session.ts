import 'server-only'; // Ensures this code never leaks to the client
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SESSION_COOKIE_NAME = 'user_session';

// Creates a session by setting a cookie with the username
export async function CreateSession(username:string) {
	const cookieStore = await cookies();

	cookieStore.set(SESSION_COOKIE_NAME, username, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 7, // 1 week
	});
}

// Retrieves the username from the session cookie
export async function getUser() {
	const cookieStore = await cookies();
	const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

	return sessionCookie?.value || null;
}

// Deletes the session cookie and redirects to login
export async function DeleteSession() {
	const cookieStore = await cookies();

	cookieStore.delete(SESSION_COOKIE_NAME);
	// some cool stuff can go here later
	redirect('/login');
}

// Verifies if a user is logged in; if not, redirects to login
export async function verifySession() {
	const user = await getUser();
	if (!user) {
		redirect('/login');
	}
	return user;
}
