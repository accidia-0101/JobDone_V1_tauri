fn main() {
    tauri::Builder::default()
        // 👇 去掉 _manager，改成 tauri_plugin_clipboard
        .plugin(tauri_plugin_clipboard::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}