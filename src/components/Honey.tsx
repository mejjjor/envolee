import Image from "next/image";
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
  picture: string;
  pictureAlt: string;
  weight: string;
  price: string;
  flowers: string[];
}) {
  return (
    <div className="flex h-[450px] w-[300px] flex-col rounded-xl border-2 border-stone-200 bg-white shadow-md">
      <div>
        <div className="flex max-h-[280px] max-w-[300px] items-center justify-center overflow-hidden rounded-t-xl">
          <Image
            src={picture}
            alt={pictureAlt}
            width={300}
            height={280}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 text-sm">
        <div className="flex justify-between text-black/50">
          <div>{weight}</div>
          <div>{price}</div>
        </div>
        <div className="flex flex-1 items-center py-2">
          <h3 className="self-center text-xl font-bold opacity-90">{title}</h3>
        </div>
        <div className="flex items-end justify-between">
          <Image
            src={logoBio}
            alt="Agriculture biologique"
            width={40}
            className="self-end pb-2"
          />
          <div className="flex min-h-16 flex-1 flex-row-reverse flex-wrap-reverse items-start gap-1 pb-2 text-xs font-semibold text-white">
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
