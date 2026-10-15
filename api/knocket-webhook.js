export default async function handler(req, res) {
  if(req.method !== 'POST'){
    return res.status(405).send('only post');
  }
  const data = req.body;
  // 企业微信机器人webhook地址
  const wecomUrl = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=9b62a95f-bc28-4aa7-8c1a-ee4a26494aed";

  const content = `【Knocket转人工提醒】
访客发起转人工
会话ID：${data.conversationId || ''}
访客ID：${data.visitorId || ''}`;

  await fetch(wecomUrl, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      msgtype:"text",
      text:{content}
    })
  })
  res.status(200).json({code:0,msg:"ok"});
}