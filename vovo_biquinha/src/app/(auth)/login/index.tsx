'use client';

import { LoginForm } from '@/components/forms/login-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/home');
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:flex items-center justify-center">
        <div className="relative w-1/2 h-1/2">
          <Image
            src="/logo.png"
            alt="Image"
            fill
            className="object-contain dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}
