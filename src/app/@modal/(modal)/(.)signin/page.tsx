'use client';

import { MiniLogo } from '@/app/_component/Logo';
import InputText from '../_component/InputText';
import SignInButton from '../_component/SignInButton';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function SignIn({}) {
  const router = useRouter();

  return (
    <div className={styles.signinModal} onClick={(e) => e.stopPropagation()}>
      <MiniLogo width={50} height={50} />
      <InputText type="text" text="이메일 또는 아이디" />
      <InputText type="password" text="패스워드" />
      <SignInButton text="로그인" />
      <div>
        <div>계정이 없으신가요?</div>
        <button onClick={() => router.replace('/signup')}>회원가입</button>
      </div>
    </div>
  );
}
