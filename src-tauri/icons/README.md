# Application Icons

Place your application icons in this directory. Required icons:

- `32x32.png` - 32x32 pixels
- `128x128.png` - 128x128 pixels
- `128x128@2x.png` - 256x256 pixels (retina)
- `icon.icns` - macOS icon (can be generated from PNG)
- `icon.ico` - Windows icon (can be generated from PNG)

You can use the `@tauri-apps/cli` to generate these icons from a single source image:

```bash
npm run tauri icon path/to/your-icon.png
```

For now, placeholder icons are needed to allow the build to succeed.
