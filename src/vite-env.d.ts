/// <reference types="vite/client" />

type Yao = {
  type: '少陽' | '少陰' | '老陽' | '老陰';
  changesTo?: '⚊' | '⚋'; // 對於變爻，記錄變化後的屬性
}

type TossResult = '三正' | '兩正一反' | '兩反一正' | '三反';

type Hexagram = {
  code: string; // 六爻對應的二進制代碼，如 111000 由左至右分別代表卦从下至上的六爻，1 代表阳爻，0 代表阴爻
  name: string; // 卦名，例如“乾卦”
  description: {
    [key: string]: string[]; // 卦辭，key 为字符串，值为字符串数组
  };
};
