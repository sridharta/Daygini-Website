import Image from "next/image";
import Link from "next/link";

export function Logo({ size = 32, href = "/" }: { size?: number; href?: string | null }) {
  const inner = (
    <>
      <Image src="/daygini-mark-128.png" alt="" width={size} height={size} priority />
      <span className="font-extrabold tracking-[-0.02em]" style={{ fontSize: size * 0.6 }}>
        Daygini
      </span>
    </>
  );
  return href ? (
    <Link href={href} className="inline-flex items-center gap-[0.28em]" aria-label="Daygini home" style={{ gap: size * 0.28 }}>
      {inner}
    </Link>
  ) : (
    <span className="inline-flex items-center" style={{ gap: size * 0.28 }}>
      {inner}
    </span>
  );
}
