import React from 'react';
import { WebView } from 'react-native-webview';
import type { StyleProp, ViewStyle } from 'react-native';

export interface ExpoPDFViewerProps {
  /** PDF source (remote URL or local file://) */
  uri: string;
  /** Optional style for the WebView container */
  style?: StyleProp<ViewStyle>;
}

export const ExpoPDFViewer: React.FC<ExpoPDFViewerProps> = ({ uri, style }: ExpoPDFViewerProps) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>
          html, body { margin: 0; padding: 0; height: 100%; }
          #viewer { width: 100vw; height: 100vh; display: block; background: #fff; }
          #error { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; padding: 16px; color: #c00; }
        </style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
      </head>
      <body>
        <canvas id="viewer"></canvas>
        <div id="error" style="display:none"></div>
        <script>
          const url = '${uri}';
          const pdfjsLib = window['pdfjs-dist/build/pdf'];
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          function showError(err) {
            const el = document.getElementById('error');
            el.style.display = 'block';
            el.textContent = 'Failed to load PDF: ' + (err && err.message ? err.message : String(err));
          }
          pdfjsLib.getDocument({ url, withCredentials: false }).promise
            .then(function (pdf) {
              return pdf.getPage(1).then(function(page) {
                const scale = 1.5;
                const viewport = page.getViewport({ scale });
                const canvas = document.getElementById('viewer');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                return page.render({ canvasContext: context, viewport }).promise;
              });
            })
            .catch(showError);
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html }}
      style={[{ flex: 1, backgroundColor: '#fff' }, style]}
      allowsFullscreenVideo
      javaScriptEnabled
      scalesPageToFit={false}
    />
  );
};
