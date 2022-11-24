// componentDidMount 대신 useEffect
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListBoard.css';
import { Link } from 'react-router-dom';

function ListBoard() {

    // 배열 초기화 []
    const [boards, setBoards] = useState([]);

    // String 초기화 ''
    // const [name, setName] = useState('');

    // 한번에도 가능
    // const [acc, setAcc] = useState({
    //     id: '',
    //     name: '',
    //     balance: 0
    // })

    useEffect(() => {
        axios.get('http://localhost:8080/api/list')
            .then((response) => {
                setBoards(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h2>글 목록 <Link to={'/write'}>게시판 글 쓰기</Link></h2>
            <section>
                <table>
                    <tbody>
                        <tr id='tr_top'>
                            <th>번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                        </tr>
                        {boards.map((board) => (
                            <tr key={board.id}>
                                <td>{board.id}</td>
                                <td>{board.writer}</td>
                                <td>{board.subject}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default ListBoard;