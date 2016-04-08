import React from 'react';


export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="weui_tab">
                <div className="weui_tab_bd">
                      <header style={{textAlign: 'center', marginTop: '10%', color: '#3cc51f'}}>
                          <h2 className="page_title">发布问题</h2>
                      </header>
                      <div className="weui_cells_title">标题</div>
                      <div className="weui_cells weui_cells_form">
                          <div className="weui_cell">
                              <div className="weui_cell_bd weui_cell_primary">
                                  <input className="weui_input" type="text" placeholder="标题"/>
                              </div>
                          </div>
                        
                      </div>
                      
                      <div className="weui_cells_title">问题描述</div>
                      <div className="weui_cells weui_cells_form">
                            <div className="weui_cell">
                                <div className="weui_cell_bd weui_cell_primary">
                                    <textarea className="weui_textarea" placeholder="请输入你的问题描述" rows="4"></textarea>
                                    <div className="weui_textarea_counter"><span>0</span>/200</div>
                                </div>
                            </div>
                       </div>
                       <div style={{borderWidth: '0',margin: '8% 4% 4%'}}>
                          <button href="javascript:;" className="weui_btn weui_btn_plain_primary">发布</button>
                       </div>
                       
                </div>
                <div className="weui_tabbar">
                    <a href="#/lastest" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <i className="weui_tabbar_label fa fa-paper-plane" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <p className="weui_tabbar_label">最新</p>
                    </a>
                    <a href="#/follow" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <i className="weui_tabbar_label fa fa-eye" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <p className="weui_tabbar_label">关注</p>
                    </a>
                    <a href="#/question" className="weui_tabbar_item weui_bar_item_on">
                        <div className="weui_tabbar_icon">
                            <i className="weui_tabbar_label fa fa-edit" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <p className="weui_tabbar_label">提问</p>
                    </a>
                    <a href="#/me" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <i className="weui_tabbar_label fa fa-user" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <p className="weui_tabbar_label">我的</p>
                    </a>
                </div>
            </div>
      </main>
    );
  }
}
