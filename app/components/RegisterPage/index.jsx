import React from 'react'


export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    
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
                    <input className="weui_input" type="number" placeholder="请输入用户名"/>
                </div>
            </div>
             <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">邮箱</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="email" placeholder="请输入邮箱"/>
                </div>
            </div>
             <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">密码</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="password" placeholder="请输入登录密码"/>
                </div>
            </div>
        </div>
      </main>
    );
  }
}
