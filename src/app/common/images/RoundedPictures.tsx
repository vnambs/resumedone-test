import Image from "next/image";
import ImageCss from "./Pictures.module.css";
import classNames from "classnames";
export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  contain?: boolean;
};
export default function RoundedImage({ src, alt, width, height }: ImageProps) {
  return (
    <div className={ImageCss.wrapper}>
      <div>
        <Image src={src} alt={alt} width={width} height={height} className={ImageCss.circle} />
      </div>
    </div>
  );
}
