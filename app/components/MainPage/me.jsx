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
                    <a href="#/question" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <i className="weui_tabbar_label fa fa-edit" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <p className="weui_tabbar_label">提问</p>
                    </a>
                    <a href="#/me" className="weui_tabbar_item weui_bar_item_on">
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
