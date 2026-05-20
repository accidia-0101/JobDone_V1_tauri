import { useScreenshotReader } from "./hooks/useScreenshotReader.jsx";
import { ScreenshotReaderView } from "./components/ScreenshotReaderView.jsx";

function App() {
    const {
        isRunning,
        imageSrc,
        errorMsg,
        start,
        stop,
        readScreenshot,
    } = useScreenshotReader();

    return (
        <ScreenshotReaderView
            isRunning={isRunning}
            imageSrc={imageSrc}
            errorMsg={errorMsg}
            onStart={start}
            onStop={stop}
            onReadScreenshot={readScreenshot}
        />
    );
}

export default App;