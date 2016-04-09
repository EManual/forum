import React from 'react';


export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  clickQuestion(question_id) {
    console.log(question_id)
    location.href = '#/question/'+question_id
  }

  render() {
    return (
      <main>
        <div className="weui_tab">
                <div className="weui_tab_bd">
                    <div className="weui_panel"   onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">做一个网址导航程序需要什么知识？</h4>
                                <p className="weui_media_desc">请问做个简单基本的网址导航程序。
就是有后台的网站程序，只需要能自己添加分类和网址，主要是自己会点设计模板样式，但不知道都需要用到什么知识？
问的不好，请以小白的思维理解问题.</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">shopex</li>
                                    <li className="weui_media_info_meta">2 小时前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>2</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="weui_tabbar">
                    <a href="#/lastest" className="weui_tabbar_item weui_bar_item_on">
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
                    <a href="#/question" className="weui_tabbar_item">
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
