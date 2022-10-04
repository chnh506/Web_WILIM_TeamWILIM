import { Button } from "../atom/button";

export const KakaoTestButton = () => {
    const URL = "https://wilimbackend.tk/userSchemaAPI/login/kakao";
    const onClick = (e: any) => {
        e.preventDefault();
        window.location.href = URL;
    }

    return (
            <Button innerText="카카오로 로그인하기" width="60%" onClick={(e) => onClick(e)} color="#3A1D1D" backgroundColor="#F7E600" />
    )
};
