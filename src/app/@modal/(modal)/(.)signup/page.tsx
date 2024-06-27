'use client';

import { MiniLogo } from '@/app/_component/Logo';
import InputText from '../_component/InputText';
import SignInButton from '../_component/SignInButton';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function SignUp({}) {
  const router = useRouter();

  return (
    <div className={styles.signinModal} onClick={(e) => e.stopPropagation()}>
      <MiniLogo width={50} height={50} />
      <InputText type="text" text="이메일 또는 아이디" />
      <InputText type="text" text="별명" />
      <InputText type="password" text="패스워드" />
      <InputText type="password" text="패스워드 확인" />
      <SignInButton text="가입" />
      <div>
        <div>이미 계정이 있으신가요?</div>
        <button onClick={() => router.replace('/signin')}>로그인</button>
      </div>
    </div>
  );
}
