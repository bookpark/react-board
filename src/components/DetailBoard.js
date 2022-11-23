import axios from "axios";
import { Component } from "react";
import './WriteBoard.css';

class DetailBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writer: '',
            subject: '',
            content: '',
            imageUrl: ''
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/board-detail/2')
            .then((response) => {
                const board = response.data;
                this.setState({ writer: board.writer, subject: board.subject, content: board.content, imageUrl: 'http://localhost:8080/img/' + board.filename });
            })
            .catch((error) => {

            })
    }

    render() {
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
                                <input type='text' name='writer' id='writer' value={this.state.writer} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='subject'>제목</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='subject' id='subject' value={this.state.subject} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='content'>내용</label>
                            </td>
                            <td className='td_right'>
                                <textarea type='text' name='content' id='content' cols='40' rows='15' value={this.state.content} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='image'>이미지</label>
                            </td>
                            <td className='td_right'>
                                <img src={this.state.imageUrl} alt='' width={'200px'} height={'200px'} />
                            </td>
                        </tr>
                    </table>
                    <section id='commandCell'>
                        <a href="#">수정</a>&nbsp;&nbsp;
                        <a href="#">삭제</a>
                    </section>
                </form>
            </section>
        )
    }
}

export default DetailBoard;