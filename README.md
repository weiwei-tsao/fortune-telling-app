# I Ching Divination Extension 易經筮法擴充功能

A browser extension for I Ching divination using the three-coin method.
使用三枚銅錢卜卦的易經筮法瀏覽器擴充功能。

## Features 功能

- Three-coin divination method 三枚銅錢卜卦法
- Generates both original and changed hexagrams 生成本卦與變卦
- Displays hexagram interpretations from classical texts 顯示經典卦辭解釋
- Clean and intuitive user interface 簡潔直觀的用戶界面

## Installation 安裝

1. Clone this repository 克隆此儲存庫

```bash
git clone https://github.com/weiwei-tsao/fortune-telling-app
```

2. Install dependencies 安裝依賴

```bash
npm install
```

3. Build the extension 構建擴充功能

```bash
npm run build
```

4. Open Chrome and navigate to `chrome://extensions/` 開啟 Chrome 並前往`chrome://extensions/`

5. Enable developer mode 啟用開發者模式

6. Click "Load unpacked" 點擊"載入未封裝的擴充功能"

7. Select the `dist` folder 選擇`dist`資料夾

8. Add the extension 添加擴充功能

## Tech Stack 技術棧

- React 18
- TypeScript
- Vite
- `vite-plugin-web-extension`

## Project Structure 專案結構

```bash
fortune-telling-app/
├── dist/
├── src/
│ ├── components/ # React components 元件
│ ├── hooks/ # Custom React hooks 自定義 Hooks
│ ├── types/ # TypeScript type definitions 型別定義
│ ├── utils.ts # Utility functions 工具函數
│ ├── vite-env.d.ts # TypeScript type definitions 型別定義
│ ├── popup.tsx # app 入口文件
│ └── pages/ # Extension pages 擴充功能頁面
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing 貢獻

1. Fork the repository 分叉儲存庫
2. Create a new branch 創建新分支
3. Make your changes and commit them 進行更改並提交
