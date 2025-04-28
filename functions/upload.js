export async function onRequest({ request }) {
  const { method } = request
  const formData = await request.formData()
  const imgFile = formData.get('file')
  // 创建 FormData 对象
  const body = new FormData()
  body.append('image', imgFile)
  return fetch(`https://api.imgur.com/3/upload?client_id=546c25a59c58ad7`, {
    method,
    headers: {
      ...request.headers,
      cookie:
        'postpagebeta=1; _ga=GA1.1.450373965.1745836775; is_emerald=0; bounceClientVisit5594v=N4IgNgDiBcIBYBcEQM4FIDMBBNAmAYnvgJYC2A5gK4BOAdAMYD2pRIANCNTCOyMSgH1yjASgCmKFMUYA7GADMAhmHEd+QiKIlTZC5apDjyMANoBdAL5A; IMGURUIDJAFO=014219fd84084d8fe21ae3c2f4524bf35b7c3a3e8ccc32f411d93f06833c824d; authautologin=1e4c2fa9825b93be6a44328db44484fa%7E91exNW3KzVMOn77a5NsFU9GEvezgrtsC; IMGURSESSION=f22c09716dc84597966c4e3adf48eb66; accesstoken=f8aadc1d1fcfa020ac1c78e269353da869fd1ec3; is_authed=1; user_id=190939207; _nc=1; postpagebetalogged=1; SESSIONDATA=%7B%22sessionCount%22%3A1%2C%22sessionTime%22%3A1745836851614%7D; frontpagebetav2=1; _ga_VNW0JK8TLK=GS1.1.1745836852.1.0.1745836854.0.0.0; pp=8154280721983523; ana_id=240e41e8-83a7-4470-821a-f09f6e164dbd; _ga_1HL8WM6LBS=GS1.1.1745836775.1.1.1745837708.0.0.0; _awl=2.1745837709.5-6758df94fff572f11a434d98fd463a61-6763652d617369612d6561737431-0',
      Authorization: 'Client-ID 546c25a59c58ad7'
    },
    body
  })
}
