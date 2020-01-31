import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProgressiveImage from './ProgressiveImage';

const imageUrls: Array<string> = [
  'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/4e3da4da-bfce-4906-9d28-a6ce00b52492?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Center%2fdiamonds%2ffullcut&show&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
  'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/4e3da4da-bfce-4906-9d28-a6ce00b52492?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Center%2fdiamonds%2ffullcut&show&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
  'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/4e3da4da-bfce-4906-9d28-a6ce00b52492?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Center%2fdiamonds%2ffullcut&show&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
];

const bandUrls = [
  [
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/c6a8b4db-30c8-4162-8f8e-a21f01429f66?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/c6a8b4db-30c8-4162-8f8e-a21f01429f66?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/c6a8b4db-30c8-4162-8f8e-a21f01429f66?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
  ],
  [
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/59d0df78-ac6f-434a-8878-a21f0142a3ca?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/59d0df78-ac6f-434a-8878-a21f0142a3ca?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/59d0df78-ac6f-434a-8878-a21f0142a3ca?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
  ],
  [
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/592e1e56-4acf-4269-b831-a21f0142a5f0?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/592e1e56-4acf-4269-b831-a21f0142a5f0?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/592e1e56-4acf-4269-b831-a21f0142a5f0?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
  ],
  [
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/f6f9b43c-4074-40af-b5ac-a21f0142a191?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/f6f9b43c-4074-40af-b5ac-a21f0142a191?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/f6f9b43c-4074-40af-b5ac-a21f0142a191?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
  ],
  [
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/a1e3780a-9226-4c6a-82c4-a21f0142a809?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$thumb$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/a1e3780a-9226-4c6a-82c4-a21f0142a809?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$standard$',
    'https://stuller.scene7.com/is/image/Stuller?layer=0&src=ir(StullerRender/a1e3780a-9226-4c6a-82c4-a21f0142a809?obj=metals&show&color=f5bc8e&rs=a...226...c..218.188.-37..d.254.110.90...e.250..255.-68..w.250..59...u8..138......155.v8..149.130.....142.&obj=stones%2fg_Accent%2fdiamonds%2ffullcut&show&hei=640&wid=640&fmt=jpeg)&$xlarge$'
  ],
  [
    'https://meteor.stullercloud.com/das/11735249?$thumb$',
    'https://meteor.stullercloud.com/das/11735249?$standard$',
    'https://meteor.stullercloud.com/das/11735249?$xlarge$'
  ]
];

const App: React.FC = () => {
  return (
    <div className="App">
      <ProgressiveImage images={imageUrls} />
      {bandUrls.map((urls, i) => <ProgressiveImage key={i} images={urls} />)}
    </div>
  );
};

export default App;
