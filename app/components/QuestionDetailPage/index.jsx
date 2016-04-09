import React from 'react';


export default class QuestionDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <main>
          <div className="weui_tab">
                <div className="weui_panel">
                    <div className="weui_panel_bd">
                        <div className="weui_media_box weui_media_text">
                            <h4 className="weui_media_title">做一个网址导航程序需要什么知识？</h4>
                            <p className="weui_media_desc" style={{WebkitLineClamp: 'initial'}}>请问做个简单基本的网址导航程序。
就是有后台的网站程序，只需要能自己添加分类和网址，主要是自己会点设计模板样式，但不知道都需要用到什么知识？
问的不好，请以小白的思维理解问题.</p>
                            <ul className="weui_media_info">
                                <li className="weui_media_info_meta">shopex</li>
                                <li className="weui_media_info_meta">2 小时前提问</li>
                                <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>0</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                 <div className="weui_tab_bd">
                      <div className="weui_panel">
                          <div className="weui_panel_bd">
                              <div className="weui_media_box weui_media_text">
                                  <ul className="weui_media_info" style={{marginTop: '0px'}}>
                                      <li className="weui_media_info_meta">jack</li>
                                      <li className="weui_media_info_meta">2 小时前</li>
                                  </ul>
                                   <p className="weui_media_desc" style={{WebkitLineClamp: 'initial'}}>爬虫</p>
                              </div>
                              
                               <div className="weui_media_box weui_media_text">
                                  <ul className="weui_media_info" style={{marginTop: '0px'}}>
                                      <li className="weui_media_info_meta">Washton</li>
                                      <li className="weui_media_info_meta">1 小时前</li>
                                  </ul>
                                   <p className="weui_media_desc" style={{WebkitLineClamp: 'initial'}}>Backend</p>
                              </div>
                              
                              
                               <div className="weui_media_box weui_media_text">
                                  <ul className="weui_media_info" style={{marginTop: '0px'}}>
                                      <li className="weui_media_info_meta">jack</li>
                                      <li className="weui_media_info_meta">0.4 小时前</li>
                                  </ul>
                                   <p className="weui_media_desc" style={{WebkitLineClamp: 'initial'}}>Testing</p>
                              </div>
                              
                             
                          </div>
                      </div>
                </div>
                
                
                
                
                <div className="weui_tabbar">
                   
                </div>
            </div>
      </main>
    );
  }
}
