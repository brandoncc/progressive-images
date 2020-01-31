import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProgressiveImage from './ProgressiveImage';

const imageUrls: Array<string> = [
  'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/4e3da4da-bfce-4906-9d28-a6ce00b52492?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Center%2fdiamonds%2ffullcut&show&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
  'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/4e3da4da-bfce-4906-9d28-a6ce00b52492?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Center%2fdiamonds%2ffullcut&show&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
  'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/4e3da4da-bfce-4906-9d28-a6ce00b52492?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Center%2fdiamonds%2ffullcut&show&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
];

const App: React.FC = () => {
  return (
    <div className="App">
      <ProgressiveImage images={imageUrls} />
    </div>
  );
};

export default App;
