import Image from "next/image";
import { screenshotFiles, screenshotSize, type ScreenKey } from "@/content/screens";
import { MockScreenView } from "./mock-screen";

/**
 * Phone with a real screenshot when mapped, otherwise the built-in app-style mock.
 * Screenshots set the phone's height from their own aspect ratio so nothing is cropped.
 */
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
      className={`overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-surface ${file ? "" : "aspect-[9/19]"} ${className}`}
      style={{ containerType: "inline-size" }}
    >
      {file ? (
        <Image
          src={file}
          alt={alt}
          width={screenshotSize.width}
          height={screenshotSize.height}
          sizes="(min-width: 1024px) 330px, 60vw"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="block h-auto w-full"
        />
      ) : (
        <div role="img" aria-label={alt} className="size-full">
          <MockScreenView screen={screen} />
        </div>
      )}
    </div>
  );
}
