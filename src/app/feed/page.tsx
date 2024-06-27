'use client';

import { useRouter } from 'next/navigation';

export default function Feed() {
  const router = useRouter();
  router.replace('/feed/review');
  return null;
}
