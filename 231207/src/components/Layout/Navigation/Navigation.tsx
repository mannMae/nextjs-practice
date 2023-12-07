import { Wrapper } from './Navigation.style';

import Link from 'next/link';

export const Navigation = () => {
  return (
    <Wrapper>
      <Link href="/">홈</Link>
      <Link href="/my-page/mentorings">나의 멘토링</Link>
      <Link href="/auto-match">자동 매칭</Link>
      <Link href="/chat">채팅 목록</Link>
      <Link href="/my-page">내 정보</Link>
    </Wrapper>
  );
};
