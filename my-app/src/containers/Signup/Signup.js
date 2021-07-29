import React, { Component } from 'react';
import { SignupButton, SignupContent, InputWithLabelSignup } from 'components/Signup';


class Signup extends Component {
    render() {
        return (
            <SignupContent title="회원가입">
                <InputWithLabelSignup label="아이디" name="username" placeholder="아이디를 입력하세요"/>
                <InputWithLabelSignup label="비밀번호" name="password" placeholder="비밀번호를 입력하세요" type="password"/>
                <InputWithLabelSignup label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호를 입력하세요" type="password"/>
                <InputWithLabelSignup label="이름" name="name" placeholder="이름"/>
                <InputWithLabelSignup label="입학년도" name="admissionYear" placeholder="입학년도6자리(ex.202003)"/>
                <InputWithLabelSignup label="학번" name="studentID" placeholder="학번을 입력하세요"/>
                <SignupButton>회원가입</SignupButton>
            </SignupContent>
        );
    }
}

export default Signup;