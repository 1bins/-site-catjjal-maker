const HeartItem = ({source}) => {
    return (
        <li>
            <a href={source} target="_blank" title="새 탭으로 열기">
                <img src={source} alt="찜한 고양이짤" />
            </a>
        </li>
    );
}

export default HeartItem;