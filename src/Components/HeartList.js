import HeartItem from "./HeartItem";

const HeartList = ({heartItems, onRemoveItems}) => {
    return (
        <div className="list-area">
            <div className="head-box">
                <p className="dsc">내가 좋아요한 고양이짤은...</p>
                <button type="button" onClick={onRemoveItems}>짤 지우기🗑️</button>
            </div>
            <ul>
                {heartItems.map((elem) => <HeartItem source={elem} key={elem}></HeartItem>)}
            </ul>
        </div>
    );
}

export default HeartList;