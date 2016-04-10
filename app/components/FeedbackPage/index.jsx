import React from 'react';


export default class FeedbackPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <main>
        <header style={{textAlign: 'center', marginTop: '10%', color: '#3cc51f'}}>
             <h2 className="page_title">用户反馈</h2>
        </header>
        
        <div className="weui_cells_title">反馈类型</div>
        <div className="weui_cells weui_cells_radio">
            <label className="weui_cell weui_check_label">
                <div className="weui_cell_bd weui_cell_primary">
                    <p>意见反馈</p>
                </div>
                <div className="weui_cell_ft">
                    <input type="radio" name="type" className="weui_check"/>
                    <span className="weui_icon_checked"></span>
                </div>
            </label>
            <label className="weui_cell weui_check_label" for="x12">

                <div className="weui_cell_bd weui_cell_primary">
                    <p>错误报告</p>
                </div>
                <div className="weui_cell_ft">
                    <input type="radio" name="type" className="weui_check"/>
                    <span className="weui_icon_checked"></span>
                </div>
            </label>
        </div>
        
        <div className="weui_cells_title">联系方式</div>
        <div className="weui_cells weui_cells_form">
            <div className="weui_cell">
                <div className="weui_cell_bd weui_cell_primary">
                    <textarea className="weui_textarea" placeholder="请输入你的联系方式(电子邮箱)" rows="1"></textarea>
                </div>
            </div>
        </div>
        
        <div className="weui_cells_title">反馈内容</div>
        <div className="weui_cells weui_cells_form">
            <div className="weui_cell">
                <div className="weui_cell_bd weui_cell_primary">
                    <textarea className="weui_textarea" placeholder="请输入反馈内容" rows="3"></textarea>
                </div>
            </div>
        </div>
        <div style={{padding: '12px'}} >
          <button className="weui_btn weui_btn_primary">提交</button>
        </div>
        
      </main>
    );
  }
}
