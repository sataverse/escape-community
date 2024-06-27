'use client';

import { useRouter } from 'next/navigation';

export default function CreateReview() {
  const router = useRouter();
  router.replace('/theme/info');
  return null;
}
