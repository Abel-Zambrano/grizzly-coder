import Image from "next/image";

export default function HomeBackground() {
  return (
    <Image
      src="/images/background.png"
      alt="background"
      layout="responsive"
      width="1080"
      height="760"
    />
  );
}
