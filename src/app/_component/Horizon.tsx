interface Props {
  width: number;
}

export default function Horizon({ width }: Props) {
  return (
    <div style={{ width: `${width}rem`, height: '1rem', margin: '10rem 0 10rem 0', backgroundColor: '#efefef' }}></div>
  );
}
