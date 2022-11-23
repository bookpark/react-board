import { Component } from 'react';
import './WriteBoard.css';
import axios from 'axios';

class WriteBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writer: '',
            password: '',
            subject: '',
            content: '',
            file: null,
        }
    }

    fileChange = (e) => {
        this.setState({ file: e.target.files[0] })
    }

    submit = (e) => {
        const formData = new FormData();
        formData.append('writer', this.state.writer)
        formData.append('password', this.state.password)
        formData.append('subject', this.state.subject)
        formData.append('content', this.state.content)
        formData.append('file', this.state.file)
        formData.append('filename', this.state.file.name)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post('http://localhost:8080/api/write-board', formData, config)
            .then((reponse) => {
                alert(reponse.data);
            })
            .catch((error) => {

            })
    }

    render() {
        return (
            <section>
                <h2>게시판 글 등록</h2>
                <form>
                    <table>
                        <tr>
                            <td className='td_left'>
                                <label for='board_name'>글쓴이</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='board_name' id='board_name' value={this.state.writer} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label for='board_pass'>비밀번호</label>
                            </td>
                            <td className='td_right'>
                                <input type='password' name='board_pass' id='board_pass' value={this.state.password} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label for='board_subject'>제목</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='board_subject' id='board_subject' value={this.state.subject} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label for='board_content'>내용</label>
                            </td>
                            <td className='td_right'>
                                <textarea type='text' name='board_content' id='board_content' cols='40' rows='15' value={this.state.content} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label for='board_file'>파일 첨부</label>
                            </td>
                            <td className='td_right'>
                                <input type='file' name='board_file' id='board_file' value={this.state.file} onChange={this.fileChange} />
                            </td>
                        </tr>
                    </table>
                    <section id='commandCell'>
                        <button>등록</button>&nbsp;&nbsp;
                        <input type='reset' value='다시 쓰기' />
                    </section>
                </form>
            </section>
        )
    }
}

export default WriteBoard;