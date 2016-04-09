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
                    <div className="weui_panel" onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="weui_panel"  onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="weui_panel"  onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="weui_panel"  onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="weui_panel"  onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="weui_panel"  onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="weui_panel"  onClick={()=> this.clickQuestion(1)}>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_text">
                                <h4 className="weui_media_title">大家做React Native开发，都用什么编辑器？</h4>
                                <p className="weui_media_desc">我现在用的是sublime text 3，感觉最大的不方便的地方就是不支持代码折叠，代码文件长了之后，还是能支持代码折叠的编辑器方便此。并且最新的sublime text 3好象会把ES5格式的RN代码的颜色显示错，搞得很多代码都是黄色。

各位高手有什么好的编辑器推荐吗？</p>
                                <ul className="weui_media_info">
                                    <li className="weui_media_info_meta">tennis</li>
                                    <li className="weui_media_info_meta">39 分钟前提问</li>
                                    <li className="weui_media_info_meta weui_media_info_meta_extra">回复:<span>8</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="weui_tabbar">
                    <a href="#/lastest" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <i className="weui_tabbar_label fa fa-paper-plane" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <p className="weui_tabbar_label">最新</p>
                    </a>
                    <a href="#/follow" className="weui_tabbar_item weui_bar_item_on">
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
