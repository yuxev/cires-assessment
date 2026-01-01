'use server'

import { CreateSession } from '@/lib/session'
import { redirect } from 'next/navigation'

const MOCK_USERS: Record<string , { password: string , isBlocked: boolean }> = {
	muser1: { password: 'mpassword1', isBlocked: false },
	muser2: { password: 'mpassword2', isBlocked: false },
	muser3: { password: 'mpassword3', isBlocked: true },
};

export async function loginAction(currentState: any, formData: FormData) {

	const username = formData.get('username') as string;
	const password = formData.get('password') as string;

	// simulate a network request
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const userAccount = MOCK_USERS[username];

	if (!userAccount) 
		return { success: false, message: 'Invalid username or password.' };
	if (userAccount.isBlocked)
		return { success: false, message: 'Your account has been blocked. Please contact support.' };
	if (password != userAccount.password)
		return { success: false, message: 'Wrong password!' };

	await CreateSession(username);

	redirect('/gallery');
}