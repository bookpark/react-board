import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './DeleteBoard.css';

function DeleteBoard() {
    const [password, setPassword] = useState('');
    const { id } = useParams();

    const deleteBoard = (e) => {
        axios.put(`http://localhost:8080/api/delete/${id}`, null, { params: { password: password } })
            .then((response) => {
                const msgNo = response.data;
                if (msgNo == -1) {
                    alert('글 번호 오류')
                } else if (msgNo == -2) {
                    alert('비밀번호 오류')
                } else if (msgNo == 0) {
                    alert('글 삭제 성공')
                    document.location.href = '/';
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (

        <section id='passForm'>
            <table>
                <tr>
                    <td><label>글 비밀번호</label></td>
                    <td><input type="password" name="password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={deleteBoard}>삭제</button>&nbsp;&nbsp;
                        <button onClick={"javascript:history.go(-1)"}>취소</button>
                    </td>
                </tr>
            </table>
        </section>
    )
}

export default DeleteBoard;