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
                  <div className="weui_panel" style={{marginTop: '16px'}}>
                       <div className="weui_panel_bd">
                          <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                              <div className="weui_media_hd">
                                  <img className="weui_media_appmsg_thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt=""/>
                              </div>
                              <div className="weui_media_bd">
                                  <h4 className="weui_media_title">Jayin Ton</h4>
                                  <p className="weui_media_desc">tonjayin@gmail.com</p>
                              </div>
                          </a>
                      </div>
                   </div>
                   
                    <div className="weui_panel">
                        <div className="weui_panel_hd">操作</div>
                        <div className="weui_panel_bd">
                            <div className="weui_media_box weui_media_small_appmsg">
                                <div className="weui_cells weui_cells_access">
                                    <a className="weui_cell" href="javascript:;">
                                        <div className="weui_cell_hd">
                                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" 
                                          style={{width:'20px', marginRight: '5px', display:'block'}}/>
                                        </div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <p>修改密码</p>
                                        </div>
                                        <span className="weui_cell_ft"></span>
                                    </a>
                                    <a className="weui_cell" href="#/feedback">
                                        <div className="weui_cell_hd">
                                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" 
                                          style={{width:'20px', marginRight: '5px', display:'block'}}/>
                                          </div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <p>问题反馈</p>
                                        </div>
                                        <span className="weui_cell_ft"></span>
                                    </a>
                                </div>
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
