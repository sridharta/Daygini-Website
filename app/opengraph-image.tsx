import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Daygini | Your day, all in one place";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public/daygini-mark-128.png"));
  const src = `data:image/png;base64,${mark.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "linear-gradient(135deg,#b8461a,#723520)", color: "#fff" }}>
        <img src={src} width={96} height={96} alt="" />
        <div style={{ marginTop: 40, fontSize: 88, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>Your day, all in one place.</div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#ffdbd0" }}>Money, health, tasks, lists and occasions in one simple app.</div>
      </div>
    ),
    size,
  );
}
