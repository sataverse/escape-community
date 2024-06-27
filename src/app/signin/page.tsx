'use client';

import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  router.replace('/home');
  return null;
}
