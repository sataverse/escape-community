import PageHeader from '../_component/PageHeader';
import Carousel from './_component/Carousel';

const temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function Home() {
  return (
    <>
      <PageHeader text="홈" />
      <Carousel title={'🥇 인기 순위'} type={'theme'} />
      <Carousel title={'🔓 신규 테마'} type={'theme'} />
      <Carousel title={'🗝 추천 테마'} type={'theme'} />
      <Carousel title={'🥇 인기 매장'} type={'shop'} />
      <Carousel title={'🔓 신규 매장'} type={'shop'} />
    </>
  );
}
