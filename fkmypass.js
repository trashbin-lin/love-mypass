console.log('fkmypass')

// const baseURL = 'https://fkmypass.pages.dev/'
// const baseURL = 'https://fkmypass.netlify.app/'
const baseURL = 'https://fkmypass.vercel.app/'

const body = `<!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  
      <meta name="x5-fullscreen" content="true" />
      <meta name="full-screen" content="yes" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta http-equiv="cache-control" content="max-age=0" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
      <meta
        http-equiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" />
      <title>外出申请</title>
      <link rel="stylesheet" href="${baseURL}css/layui.css" />
      <link rel="stylesheet" href="${baseURL}css/weui.css" />
      <link rel="stylesheet" href="${baseURL}css/apply.css" />
      <script>
        const 外出地点 = '%%请填写地点%%'
        const 外出事由 = '%%请填写事由%%'
        const 姓名 = '%%请填写姓名%%'
        const 学号 = '%%请填写学号%%'
        const 学院 = '%%请填写学院%%'
        const 年级 = '%%请填写年级%%'
      </script>
    </head>
    <body>
      <div id="container">
        <div class="main">
          <form class="input-group layui-form" lay-filter="filter_form">
            <div class="weui-cells__group weui-cells__group_form">
              <div class="weui-cells__title">申请流程</div>
              <div class="step_box">
                <div class="step line">
                  <img src="${baseURL}img/true.png" /><span
                    >提交</span
                  >
                </div>
                <div class="step line">
                  <img src="${baseURL}img/true.png" /><span
                    >院级审批</span
                  >
                </div>
                <div class="step">
                  <img src="${baseURL}img/true.png" /><span
                    >校级审批</span
                  >
                </div>
              </div>
  
              <div class="weui-cells__title">外出信息</div>
              <div class="weui-cells weui-cells_form">
                <div class="info_list">
                  <div><span class="bt">*</span>开始日期</div>
                  <div class="form_select">
                    <div class="dOutStartDate"></div>
                    <span id="dOutStartDate">选择</span>
                  </div>
                </div>
  
                <div class="info_list">
                  <div><span class="bt">*</span>结束日期</div>
                  <div class="form_select">
                    <div class="dOutEndDate"></div>
                    <span id="dOutEndDate">选择</span>
                  </div>
                </div>
  
                <div class="info_list">
                  <div><span class="bt">*</span>外出地点</div>
                  <input
                    type="text"
                    name="sOutAddress"
                    class="place_input sOutAddress"
                    placeholder="-"
                    autocomplete="off"
                    value=""
                  />
                </div>
  
                <div
                  class="weui-input-row"
                  style="padding: 0 0.3rem 0.3rem 0.3rem"
                >
                  <label class="smTitle"
                    ><span class="bt">*</span
                    ><span class="sNowAddr_required">外出事由</span>
                  </label>
                  <div class="weui-cell" style="padding: 0rem">
                    <div class="weui-cell__bd">
                      <textarea
                        class="weui-textarea sOutReason"
                        name="sOutReason"
                        placeholder=""
                        rows="3"
                        style="border: 1px solid #efefef"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="weui-cells__title">我的信息</div>
              <div class="info_box">
                <div class="info_list">
                  <span>姓名</span>
                  <span class="name"></span>
                </div>
                <div class="info_list">
                  <span>学号</span>
                  <span class="number"></span>
                </div>
                <div class="info_list">
                  <span>学院</span>
                  <span class="school"></span>
                </div>
                <div class="info_list">
                  <span>年级</span>
                  <span class="grade"></span>
                </div>
                <div class="info_list">
                  <span>人员类型</span>
                  <span class="type">本科生</span>
                </div>
              </div>
  
              <div class="bottomTips">
                温馨提示：每次只能发起一次外出申请，外出申请生效期间内无法再次发起申请。
              </div>
            </div>
          </form>
        </div>
  
        <div class="logo_box">
          <img id="logo" src="${baseURL}img/pass.png" alt="" />
        </div>
        <div class="disabled_mask"></div>
      </div>

      <script>
        const today = new Date()
        let todayMonth =
          today.getMonth() < 9 ? \`0\${ today.getMonth() + 1 }\` : '' + today.getMonth() + 1

        const todayStr = \`\${today.getFullYear()}-\${todayMonth}-\${today.getDate()}\`

        document.querySelector('.form_select .dOutStartDate').innerText = todayStr
        document.querySelector('.form_select .dOutEndDate').innerText = todayStr
        
        document.querySelector('.sOutAddress').value = 外出地点
        document.querySelector('.sOutReason').value = 外出事由

        document.querySelector('.name').innerText = 姓名
        document.querySelector('.number').innerText = 学号
        document.querySelector('.school').innerText = 学院
        document.querySelector('.grade').innerText = 年级

      </script>
    </body>
  </html>
  
`

$done({ body })
