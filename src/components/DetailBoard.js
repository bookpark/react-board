import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'


function DetailBoard() {

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
                setImageUrl('http://localhost:8080/img/' + board.filename);
            })
            .catch((error) => {
                console.log(error)
            }, [])
    }, [])

    return (
        <section>
            <h2>게시판 글 상세</h2>
            <form>
                <table>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='writer'>글쓴이</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='writer' value={writer} />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='subject'>제목</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='subject' value={subject} />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label htmlFor='content'>내용</label>
                        </td>
                        <td className='td_right'>
                            <textarea type='text' name='content' cols='40' rows='15' value={content} />
                        </td>
                    </tr>
                </table>
                <section id='commandCell'>
                    <Link to={'/update/' + id}>수정</Link>&nbsp;&nbsp;
                    <a href="#">삭제</a>
                </section>
            </form>
        </section>
    )
}

export default DetailBoard;