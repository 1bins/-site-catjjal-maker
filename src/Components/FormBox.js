import { useState } from "react";

const FormBox = ({onMainCatUpdate}) => {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("원하는 말을 입력하고 짤을 가져보세요");
    // 한글체크
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    
    // 폼 submit 함수
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // value 체크 ⓐ빈 값 체크
        if(value === ""){
            setMessage("🥲 빈 값으로 짤을 만들 수 없어요 🥲");
            return;
        }
        if(includesHangul(value)){return;}
        onMainCatUpdate(value);
    }
    // value 체크 ⓑ영어 대문자/한글 체크
    const handleTextChange = (e) => {
        const userValue = e.target.value;
        setValue(userValue.toUpperCase());
        setMessage("원하는 말을 입력하고 짤을 가져보세요");
        if(includesHangul(userValue)){
            setMessage("!!! 영어만 입력해주세요 !!!");
        }
    }
    return (
        <div className="form-area">
            <form onSubmit={handleFormSubmit}>
                <div className="form-box">
                    <div className="input-box">
                        <input type="text" placeholder="영어만 입력해주세요" value={value} onChange={handleTextChange}/>
                        <span className="line"></span>
                    </div>
                    <button type="submit">짤 만들기</button>
                </div>
                <p className="alert-txt">{message}</p>
            </form>
        </div>
    );
}

export default FormBox;