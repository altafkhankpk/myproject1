
import './test.css'

function Card({abc}){

  return <div className="card1">
    <img style={{maxHeight:'150px'}} src={abc.mySrc} alt="" />
              <h1>{abc.name}</h1>
  </div>

}


export default () => {

  let ads = [
    {
      name: 'product 1',
      mySrc:'https://images.olx.com.pk/thumbnails/468455071-240x180.webp'
    },
    {
      name: 'product 2',
      mySrc:'https://images.olx.com.pk/thumbnails/468455071-240x180.webp'
    },
    {
      name: 'product 3',
      mySrc:'https://images.olx.com.pk/thumbnails/468455071-240x180.webp'
    },
    {
      name: 'product 4',
      mySrc:'https://images.olx.com.pk/thumbnails/468455071-240x180.webp'
    }
  ]

  return <div>

    <div className='flex'>
    {
      ads.map((ad) => {

        // return <Card {...ad}></Card>
        return <Card abc={ad}></Card>

      })
    }
    </div>


  </div>

}