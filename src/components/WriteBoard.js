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

    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    fileChange = (e) => {
        this.setState({ file: e.target.files[0] })
    }

    submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('writer', this.state.writer)
        formData.append('password', this.state.password)
        formData.append('subject', this.state.subject)
        formData.append('content', this.state.content)
        formData.append('file', this.state.file)
        const config = {

        }

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }

        axios.post('http://localhost:8080/api/write-board-v2', formData)
            .then((response) => {
                alert(response.data);
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
                                <label htmlFor='writer'>글쓴이</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='writer' id='writer' value={this.state.writer} onChange={this.change} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='password'>비밀번호</label>
                            </td>
                            <td className='td_right'>
                                <input type='password' name='password' id='password' value={this.state.password} onChange={this.change} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='subject'>제목</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='subject' id='subject' value={this.state.subject} onChange={this.change} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='content'>내용</label>
                            </td>
                            <td className='td_right'>
                                <textarea type='text' name='content' id='content' cols='40' rows='15' value={this.state.content} onChange={this.change} />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label htmlFor='file'>파일 첨부</label>
                            </td>
                            <td className='td_right'>
                                <input type='file' name='file' id='file' onChange={this.fileChange} accept='image/*' />
                            </td>
                        </tr>
                    </table>
                    <section id='commandCell'>
                        <button onClick={this.submit}>등록</button>&nbsp;&nbsp;
                        <input type='reset' value='다시 쓰기' />
                    </section>
                </form>
            </section>
        )
    }
}

export default WriteBoard;