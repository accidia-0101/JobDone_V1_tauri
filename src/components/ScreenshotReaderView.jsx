export function ScreenshotReaderView({
                                         isRunning,
                                         imageSrc,
                                         errorMsg,
                                         onStart,
                                         onStop,
                                         onReadScreenshot,
                                     }) {
    return (
        <div
            style={{
                padding: "20px",
                color: "#000",
                background: "#fff",
                height: "100vh",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2 style={{ margin: "0 0 10px 0" }}>JobDone 截图读取器</h2>

            <p style={{ marginBottom: "12px" }}>
                当前状态：
                <strong style={{ color: isRunning ? "green" : "gray" }}>
                    {isRunning ? " 工作中" : " 待机中"}
                </strong>
            </p>

            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                {!isRunning ? (
                    <button
                        onClick={onStart}
                        style={{
                            padding: "10px 20px",
                            cursor: "pointer",
                            background: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                        }}
                    >
                        ▶ 开始
                    </button>
                ) : (
                    <button
                        onClick={onStop}
                        style={{
                            padding: "10px 20px",
                            cursor: "pointer",
                            background: "#dc3545",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                        }}
                    >
                        ■ 停止
                    </button>
                )}

                <button
                    onClick={onReadScreenshot}
                    disabled={!isRunning}
                    style={{
                        padding: "10px 20px",
                        cursor: isRunning ? "pointer" : "not-allowed",
                        background: isRunning ? "#007acc" : "#aaa",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                    }}
                >
                    📸 读取截图
                </button>
            </div>

            <p style={{ color: "#666" }}>
                {isRunning
                    ? "JobDone 已开始工作，现在可以读取剪贴板截图。"
                    : "软件已启动，但当前只是后台待机，不会读取用户截图。"}
            </p>

            {errorMsg && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    {errorMsg}
                </p>
            )}

            {imageSrc && (
                <div style={{ marginTop: "15px" }}>
                    <img
                        src={imageSrc}
                        alt="screenshot"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "400px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
            )}
        </div>
    );
}