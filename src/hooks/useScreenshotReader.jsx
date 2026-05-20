import { useRef, useState } from "react";
import {
    readClipboardImageBase64,
    toImageDataUrl,
    hashText,
} from "../services/clipboardService";

export function useScreenshotReader() {
    const [isRunning, setIsRunning] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const ignoredClipboardHashRef = useRef(null);

    const start = async () => {
        setErrorMsg(null);
        setImageSrc(null);

        try {
            const currentBase64 = await readClipboardImageBase64();

            if (currentBase64) {
                ignoredClipboardHashRef.current = await hashText(currentBase64);
            } else {
                ignoredClipboardHashRef.current = null;
            }

            setIsRunning(true);
        } catch (err) {
            console.error(err);
            ignoredClipboardHashRef.current = null;
            setIsRunning(true);
        }
    };

    const stop = () => {
        setErrorMsg(null);
        setIsRunning(false);
        ignoredClipboardHashRef.current = null;
    };

    const readScreenshot = async () => {
        setErrorMsg(null);

        if (!isRunning) {
            setErrorMsg("JobDone 当前处于待机状态，请先点击开始");
            return;
        }

        try {
            const base64Str = await readClipboardImageBase64();

            if (!base64Str) {
                setErrorMsg("剪贴板里没有图片数据");
                return;
            }

            const currentHash = await hashText(base64Str);

            if (
                ignoredClipboardHashRef.current &&
                currentHash === ignoredClipboardHashRef.current
            ) {
                setErrorMsg("这是开始前已经存在的旧截图。请在点击开始后重新截图。");
                return;
            }

            setImageSrc(toImageDataUrl(base64Str));

            ignoredClipboardHashRef.current = currentHash;
        } catch (err) {
            console.error(err);
            setErrorMsg("读取失败：" + String(err));
        }
    };

    return {
        isRunning,
        imageSrc,
        errorMsg,
        start,
        stop,
        readScreenshot,
    };
}