import Image from "next/image";

export default function HomeBackground() {
  return (
    <Image
      src="/images/background.png"
      alt="background"
      layout="responsive"
      width="1920"
      height="1080"
    />
  );
}
