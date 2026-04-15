import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  try {
    const dataUrl = await QRCode.toDataURL(address, {
      width: 400,
      margin: 2,
      color: {
        dark: "#0A1C3A",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "H",
    });

    return NextResponse.json({ qr: dataUrl, address });
  } catch (error) {
    console.error("QR generation error:", error);
    return NextResponse.json({ error: "Failed to generate QR" }, { status: 500 });
  }
}
