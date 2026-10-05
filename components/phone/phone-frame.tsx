import Image from "next/image";
import { screenshotFiles, type ScreenKey } from "@/content/screens";
import { MockScreenView } from "./mock-screen";

/** Phone with a real screenshot when mapped, otherwise the built-in app-style mock. */
export function PhoneFrame({
  screen,
  alt,
  className = "",
  priority = false,
}: {
  screen: ScreenKey;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const file = screenshotFiles[screen];
  return (
    <div
      className={`aspect-[9/19] overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-surface ${className}`}
      style={{ containerType: "inline-size" }}
    >
      {file ? (
        <Image src={file} alt={alt} fill sizes="(min-width: 1024px) 280px, 60vw" priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={alt} className="size-full">
          <MockScreenView screen={screen} />
        </div>
      )}
    </div>
  );
}
