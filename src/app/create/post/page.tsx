'use client';

import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  router.replace('/home');
  return null;
}
