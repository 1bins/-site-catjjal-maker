const MainCat = ({mainImg, heartItems, onheartClick}) => {
    // 하트 클릭 체크
    const heartIcon = heartItems.includes(mainImg) ? "💖" : "🤍";
    return (
        <div className="mainCat-area">
            <div className="img-box">
                <img src={mainImg} alt="고양이 짤방 이미지" />
            </div>
            <button type="button" onClick={onheartClick}>{heartIcon}</button>
        </div>
    );
}

export default MainCat;