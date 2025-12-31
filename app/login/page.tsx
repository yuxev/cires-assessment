import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Login Page</h1>
      {/* This component handles the logic */}
      <LoginForm />
    </main>
  );
}