import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
      
      {/* Right side - Hero Image with Testimonial */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-900 to-slate-700 items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop"
            alt="Gallery background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Testimonial Overlay */}
        <div className="relative z-10 max-w-lg mx-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <blockquote className="text-white text-xl md:text-2xl font-light mb-6 leading-relaxed">
            "A beautiful gallery experience that brings creativity and inspiration together in one seamless platform."
          </blockquote>
          <div className="text-white">
            <p className="font-semibold text-lg">Alex Morgan</p>
            <p className="text-sm text-white/80">Creative Director</p>
            <p className="text-sm text-white/70">Visual Arts Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
}