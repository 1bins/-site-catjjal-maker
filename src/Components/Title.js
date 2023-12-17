const Title = ({textCounter}) => {
    return (
        <div className="title-area">
            <p className="sub">내가 입력한대로 만들어지는 고양이 짤 메이커</p>
            <h2 className="--font-title">{textCounter} 고양이 가라사대</h2>
        </div>
    );
}

export default Title;