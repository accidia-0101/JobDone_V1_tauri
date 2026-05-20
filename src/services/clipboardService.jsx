import { readImageBase64 } from "tauri-plugin-clipboard-api";

export async function readClipboardImageBase64() {
    const base64Str = await readImageBase64();
    return base64Str || null;
}

export function toImageDataUrl(base64Str) {
    return `data:image/png;base64,${base64Str}`;
}

export async function hashText(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}