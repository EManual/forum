import React from 'react';


export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit() {
      console.dir(this.refs.username.value)
      let data = {
          username: this.refs.username.value,
          email: this.refs.email.value,
          password: this.refs.password.value
      }
      console.log(data)
  }
  
  render() {
    return (
      <main>
        <header style={{textAlign: 'center', marginTop: '20%', color: '#3cc51f'}}>
            <h1 className="page_title">注册</h1>
        </header>
        <div className="weui_cells weui_cells_form">
            <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">用户名</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input ref="username"  className="weui_input" type="text" placeholder="请输入用户名"/>
                </div>
            </div>
             <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">邮 箱</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input ref="email" className="weui_input" type="email" placeholder="请输入邮箱"/>
                </div>
            </div>
             <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">密 码</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input ref="password" className="weui_input" type="password" placeholder="请输入登录密码"/>
                </div>
            </div>
        </div>
        <div className="weui_btn_area">
                <a className="weui_btn weui_btn_primary" onClick={this.handleSubmit} >确定</a>
            </div>
      </main>
    );
  }
}
