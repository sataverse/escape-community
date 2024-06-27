'use client';

import { useRouter } from 'next/navigation';

export default function Theme() {
  const router = useRouter();
  router.replace('/theme/info');
  return null;
}
