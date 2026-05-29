import { ImageResponse } from "next/og";
import { seoConfig } from "@/lib/seo";

export const alt = seoConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1c1917",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: 10,
          width: 120,
          backgroundColor: "#fe6e00",
          marginBottom: 48,
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          color: "#fafaf9",
          lineHeight: 1.05,
        }}
      >
        {seoConfig.authorName}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 38,
          color: "#a6a09b",
          marginTop: 28,
        }}
      >
        {seoConfig.jobTitle}
      </div>
    </div>,
    { ...size },
  );
}
