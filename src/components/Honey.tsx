import Image, { StaticImageData } from "next/image";
import logoBio from "@/public/logo_bio.jpg";

export default function Honey({
  title,
  picture,
  pictureAlt,
  weight,
  price,
  flowers,
}: {
  title: string;
  picture: StaticImageData;
  pictureAlt: string;
  weight: string;
  price: string;
  flowers: string[];
}) {
  return (
    <div className="w-[300px] h-[450px] flex flex-col rounded-xl bg-white shadow-md border-2 border-stone-200">
      <div>
        <div className="max-w-[300px] max-h-[280px] flex items-center justify-center rounded-t-xl overflow-hidden">
          <Image
            src={picture}
            alt={pictureAlt}
            width={300}
            height={280}
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-sm flex flex-col justify-center flex-1 p-6">
        <div className="flex justify-between text-black/50">
          <div>{weight}</div>
          <div>{price}</div>
        </div>
        <div className="flex items-center flex-1 py-2">
          <h3 className="text-xl self-center font-bold opacity-90">{title}</h3>
        </div>
        <div className="flex justify-between items-end">
          <Image
            src={logoBio}
            alt="Agriculture biologique"
            width={40}
            className="self-end pb-2"
          />
          <div className="text-white font-semibold text-xs flex flex-1 flex-row-reverse flex-wrap-reverse items-start gap-1 min-h-16 pb-2">
            {flowers.reverse().map((flower, index) => (
              <span
                key={index}
                className="rounded-xl bg-secondary p-1 px-2 align-middle"
              >
                {flower}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
