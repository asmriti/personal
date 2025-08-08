import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 40,
  height: 40,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#2ca2c182",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "50%",
        }}
      >
        SA
      </div>
    ),
    {
      ...size,
    }
  );
}
