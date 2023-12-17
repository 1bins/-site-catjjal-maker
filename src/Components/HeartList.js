import HeartItem from "./HeartItem";

const HeartList = ({heartItems}) => {
    return (
        <div className="list-area">
            <p className="dsc">내가 좋아요한 고양이짤은...</p>
            <ul>
                {heartItems.map((elem) => <HeartItem source={elem} key={elem}></HeartItem>)}
            </ul>
        </div>
    );
}

export default HeartList;