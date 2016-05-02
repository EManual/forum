import React from 'react';
import $ from 'jquery'
import {AV, FeedBack} from '../../libs/leancloud'


export default class FeedbackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'advice', //or report
      user_contact: '',
      content: ''
    }
  }

  slelectType(new_type, evt) {
    this.setState({
      type: new_type
    })
  }

  updateUserContact(evt) {
    this.setState({
      user_contact: evt.target.value
    })
  }

  updateContent(evt) {
    this.setState({
      content: evt.target.value
    })
  }
  
  submitForm (){
    let showToast = this.showToast
    showToast('#toast-feedback-loading',null, '提交中')
    
    //check form 
    if(this.state.content === ''){
      showToast('#toast-feedback-faild', 2000, '内容不能为空')
      return
    }
    
    let feedback = new FeedBack()
    feedback.set('type', this.state.type)
    feedback.set('user_contact', this.state.user_contact)
    feedback.set('content', this.state.content)
    feedback.set('app_version', 'web-feedback-1.0')
    feedback.set('system_version', navigator.userAgent)
    feedback.save().then(function(feedback) {
      showToast('#toast-feedback-success', 2000, '已完成')
      // 成功保存之后，执行其他逻辑.
      // console.log('New object created with objectId: ' + feedback.id);
    }, function(err) {
      // 失败之后执行其他逻辑
      // error 是 AV.Error 的实例，包含有错误码和描述信息.
      showToast('#toast-feedback-faild', 2000, '操作失败')
      // console.log('Failed to create new object, with error message: ' + err.message);
    });
  }
  
  showToast(selector, timeout, text = '已完成') {
    timeout = timeout || 100*1000
    $('.weui_loading_toast').hide()
    $(selector + ' p').text(text)
    $(selector).show()
    
    setTimeout(function(){
      $(selector).hide()
    }, timeout)
  }

  render() {
    return (
      <main>
        <header style={{ textAlign: 'center', marginTop: '10%', color: '#3cc51f' }}>
          <h2 className="page_title">用户反馈</h2>
        </header>

        <div className="weui_cells_title">反馈类型</div>
        <div className="weui_cells weui_cells_radio">
          <label className="weui_cell weui_check_label" onClick={() => { this.slelectType('advice') } }>
            <div className="weui_cell_bd weui_cell_primary">
              <p>意见反馈</p>
            </div>
            <div className="weui_cell_ft">
              <input type="radio" name="type" className="weui_check" defaultChecked/>
              <span className="weui_icon_checked"></span>
            </div>
          </label>
          <label className="weui_cell weui_check_label" for="x12"  onClick={() => { this.slelectType('report') } }>

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
              <textarea className="weui_textarea" placeholder="请输入你的联系方式(电子邮箱)" rows="1" onChange={this.updateUserContact.bind(this)}></textarea>
            </div>
          </div>
        </div>

        <div className="weui_cells_title">反馈内容</div>
        <div className="weui_cells weui_cells_form">
          <div className="weui_cell">
            <div className="weui_cell_bd weui_cell_primary">
              <textarea className="weui_textarea" placeholder="请输入反馈内容" rows="4" onChange={this.updateContent.bind(this)}></textarea>
            </div>
          </div>
        </div>
        <div style={{ padding: '12px' }} >
          <button className="weui_btn weui_btn_primary" onClick={this.submitForm.bind(this)}>提交</button>
        </div>
        {/** Toast */}
        <div id="toast-feedback-success" style={{display: 'none'}}>
            <div className="weui_mask_transparent"></div>
            <div className="weui_toast">
                <i className="weui_icon_toast"></i>
                <p className="weui_toast_content" style={{marginTop: '4px'}}>已完成</p>
            </div>
        </div>
        {/** END Toast */}
        
        {/** Toast */}
        <div id="toast-feedback-faild" style={{display: 'none'}}>
            <div className="weui_mask_transparent"></div>
            <div className="weui_toast">
                <i className="custom-weui_icon_clear weui_icon_clear" style={{margin: '22px 0 0',display: 'block'}}></i>
                <p className="weui_toast_content" style={{marginTop: '4px'}}>操作失败</p>
            </div>
        </div>
        {/** END Toast */}

        {/** Toast */}
        <div id="toast-feedback-loading" className="weui_loading_toast" style={{display: 'none'}}>
            <div className="weui_mask_transparent"></div>
            <div className="weui_toast">
                <div className="weui_loading">
                    <div className="weui_loading_leaf weui_loading_leaf_0"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_1"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_2"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_3"></div>
                    <div clclassNameass="weui_loading_leaf weui_loading_leaf_4"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_5"></div>
                    <div claclassNamess="weui_loading_leaf weui_loading_leaf_6"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_7"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_8"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_9"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_10"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_11"></div>
                </div>
                <p className="weui_toast_content">提交中</p>
            </div>
        </div>
        {/** END Toast */}

      </main>
    );
  }
}
