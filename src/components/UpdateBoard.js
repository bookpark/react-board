import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

function UpdateBoard() {

    const [writer, setWriter] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/board-detail/${id}`)
            .then((response) => {
                const board = response.data;
                setWriter(board.writer);
                setSubject(board.subject);
                setContent(board.content);
            })
            .catch((error) => {
                console.log(error)
            }, [])
    }, [])

    const subject_change = (e) => {
        setSubject(e.target.value);
    }

    const content_change = (e) => {
        setContent(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        setSubject(subject);
        setContent(content);

        axios.put(`http://localhost:8080/api/update/${id}`, null, { params: { subject: subject, content: content } })
            .then((response) => {
                alert(response.data);
                // 글 등록 후 리디렉트
                document.location.href = '/';
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <section>
            <h2>게시판 수정</h2>
            <form>
                <table>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='id'>번호</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='id' id='id' value={id} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='writer'>글쓴이</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='writer' id="writer" value={writer} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='subject'>제목</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='subject' onChange={subject_change} value={subject} />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='content'>내용</label>
                        </td>
                        <td className='td_right'>
                            <textarea type='text' name='content' cols='40' rows='15' onChange={content_change} value={content} />
                        </td>
                    </tr>
                </table>
                <section id='commandCell'>
                    <button onClick={submit}>수정</button>&nbsp;&nbsp;
                    <a href="#">삭제</a>
                </section>
            </form>
        </section>
    )
}

export default UpdateBoard;