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
                    <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
                        <div className="weui_tabbar_icon">
                            <img src="./images/icon_nav_button.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">微信</p>
                    </a>
                    <a href="javascript:;" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="./images/icon_nav_msg.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">通讯录</p>
                    </a>
                    <a href="javascript:;" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="./images/icon_nav_article.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">发现</p>
                    </a>
                    <a href="javascript:;" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="./images/icon_nav_cell.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">我</p>
                    </a>
                </div>
            </div>
      </main>
    );
  }
}
