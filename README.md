# 📄 Expo PDF Viewer

[![npm version](https://img.shields.io/npm/v/expo-pdf-viewer.svg?style=flat-square)](https://www.npmjs.com/package/expo-pdf-viewer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/platforms-iOS%20%7C%20Android%20%7C%20Web-lightgrey.svg?style=flat-square)](#)

A lightweight, **Expo Go–compatible PDF viewer** for React Native — powered by WebView and [PDF.js](https://mozilla.github.io/pdf.js/).  
**No native modules required.** Works seamlessly on **iOS**, **Android**, and **Web** inside **Expo Go**.

---

## 🚀 Features

- ✅ Works inside **Expo Go** — no native build required  
- 📄 View **remote or local PDFs**  
- 🌐 **Cross-platform** (iOS, Android, Web)  
- ⚡ **Fast & lightweight**, only uses WebView  
- 🎨 Simple API inspired by [`rn-pdf-reader-js`](https://github.com/xcarpentier/rn-pdf-reader-js)  
- 💻 Based on **PDF.js**, an industry-standard renderer

---

## 📦 Installation

```bash
npm install expo-pdf-viewer react-native-webview
# or
yarn add expo-pdf-viewer react-native-webview
```

> 💡 If you're using **Expo Go**, `react-native-webview` is already supported — no config or prebuild needed.

---

## 💡 Usage Example

```tsx
import React from 'react';
import { View } from 'react-native';
import { ExpoPDFViewer } from 'expo-pdf-viewer';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ExpoPDFViewer uri="https://arxiv.org/pdf/2203.00001.pdf" />
    </View>
  );
}
```

---

## 🧩 Props

| Prop | Type | Required | Description |
|------|------|-----------|-------------|
| `uri` | `string` | ✅ | PDF source (local file or remote URL) |
| `style` | `ViewStyle` | ❌ | Optional custom styling for the WebView container |

---

## ⚙️ How It Works

**Expo PDF Viewer** renders PDFs entirely with **JavaScript**.  
It embeds a minimal HTML template inside a WebView that uses [PDF.js](https://mozilla.github.io/pdf.js/) to load, parse, and draw the PDF on a `<canvas>` element.

This approach avoids native code entirely — making it **fully Expo Go compatible** and **lightweight** to maintain.

---

## 🧱 Planned Features

- [ ] Pagination (Next / Prev)
- [ ] Zoom controls
- [ ] Offline & base64 PDF support
- [ ] Dark mode
- [ ] Loading & error states
- [ ] Pre-bundled PDF.js worker for offline use

---

## 🧪 Local Development

You can clone this repo and link it to an Expo app to test changes:

```bash
git clone https://github.com/yourusername/expo-pdf-viewer.git
cd expo-pdf-viewer
npm install
npm run build
npm pack
```

Then install it in your Expo project:

```bash
cd ../your-expo-app
npm install ../expo-pdf-viewer/expo-pdf-viewer-1.0.0.tgz
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](../../issues) or submit a pull request.

If you build something cool on top of this library, please share it — I’d love to feature community projects.

---

## 🪪 License

MIT © [Your Name](https://github.com/yourusername)

---

### ⭐ Support

If you find this project helpful, consider giving it a **star** on GitHub 🌟  
It helps others discover the library and motivates future development.
