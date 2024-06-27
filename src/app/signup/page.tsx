'use client';

import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  router.replace('/home');
  return null;
}
