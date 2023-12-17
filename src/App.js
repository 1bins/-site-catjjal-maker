import { useState, useEffect } from 'react';
import './css/assets/Common.css';
import './App.css';
import Landing from './Components/Landing';
import Title from './Components/Title';
import FormBox from './Components/FormBox';
import MainCat from './Components/MainCat';
import HeartList from './Components/HeartList';

function App() {
  // 초기 고양이 이미지
  const CAT1 = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";

  // JSON LOCALSTORAGE 함수
  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };

  // 고양이 이미지 API
  const fetchCat = async (text) => {
    const OPEN_API_DOMAIN = "https://cataas.com";
    const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    const responseJson = await response.json();
    return `${OPEN_API_DOMAIN}/cat/${responseJson._id}/says/${text}?fontSize=40&fontColor=white`
  };

  // MainCat 업데이트
  const [counter, setCounter] = useState(() => jsonLocalStorage.getItem("counter"));
  const [mainImg, setMainImg] = useState(CAT1);
  const handleMainCatUpdate = async (says) => {
    const newCat = await fetchCat(says);
    setMainImg(newCat);
    setCounter((prev) => {
      const updateCounter = prev + 1;
      jsonLocalStorage.setItem("counter", updateCounter);
      return updateCounter;
    });
  };

  // heart 담기
  const [heartItems, setHeartItems] = useState(() => jsonLocalStorage.getItem("heartItems") || []);
  const handleHeartClick = () => {
    if(heartItems.includes(mainImg)){return};
    const updateItems = [...heartItems, mainImg];
    setHeartItems(updateItems);
    jsonLocalStorage.setItem("heartItems", updateItems);
  }

  // MainCat 초기 설정
  const initCat = async () => {
    const initImg = await fetchCat("First CAT");
    setMainImg(initImg);
  }
  useEffect(() => {initCat()}, []);

  // 타이틀 설정
  const textCounter = counter === null ? "" : <span className="point">{counter}번째</span>;

  return (
    <div className="App">
      <Landing></Landing>
      <section id="mainCont">
        <div className="mainCont-inner">
          <Title textCounter={textCounter}></Title>
          <FormBox onMainCatUpdate={handleMainCatUpdate}></FormBox>
          <MainCat mainImg={mainImg} heartItems={heartItems} onheartClick={handleHeartClick}></MainCat>
          <HeartList heartItems={heartItems}></HeartList>
        </div>
      </section>
    </div>
  );
}

export default App;
