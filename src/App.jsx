import { useState } from "react";
// 尝试换回最基础的导入，防止某些版本中没有该细分函数
import { readImageBase64 } from "tauri-plugin-clipboard-api";

function App() {
    const [imageSrc, setImageSrc] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleReadScreenshot = async () => {
        setErrorMsg(null);
        try {
            // 这个插件的这个函数直接返回的就是一串纯 Base64 文本！
            const base64Str = await readImageBase64();

            if (base64Str) {
                // 直接拼接标准的 PNG 前缀即可完美显示，不需要 Canvas，也不会爆栈！
                setImageSrc(`data:image/png;base64,${base64Str}`);
            } else {
                setErrorMsg("剪贴板里没有图片数据");
            }
        } catch (err) {
            console.error(err);
            setErrorMsg("读取失败：" + String(err));
        }
    };

    return (
        <div style={{ padding: "20px", color: "#000", background: "#fff", height: "100vh" }}>
            <h2 style={{ margin: "0 0 10px 0" }}>📋 截图读取器 (测试版)</h2>
            <button
                onClick={handleReadScreenshot}
                style={{ padding: "10px 20px", cursor: "pointer", background: "#007acc", color: "#fff", border: "none", borderRadius: "4px" }}
            >
                📸 点击读取截图
            </button>

            {errorMsg && <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>}

            {imageSrc && (
                <div style={{ marginTop: "15px" }}>
                    <img src={imageSrc} alt="screenshot" style={{ maxWidth: "100%", maxHeight: "400px", border: "1px solid #ccc" }} />
                </div>
            )}
        </div>
    );
}

export default App;