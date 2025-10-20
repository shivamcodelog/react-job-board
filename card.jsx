import { Bookmark } from 'lucide-react'
const card = (props) => {
  console.log(props.company)
  return (
    <div className="box">
            <div className="nav">
              <div className="circle1">
                <div className="circle2"><img src={props.link} alt="" />
                </div></div>
              <button className='btn2'>Save <Bookmark size={19} color="#5d5c5cff" strokeWidth={1.5} /></button>
            </div>
            <div className="company">{props.company}<span>{props.date}</span></div>
            <p>{props.post}</p>
            <div className="p">
              <div className='b one'>{props.tag1}</div>
              <div className='b two'>{props.tag2}</div>
            </div>
              <div id='one'>
              <div className="sal">{props.pay}<span>{props.place}</span></div>
    
              <button className='btn1'>Apply now</button>
            </div>
    
          </div>

  )
}

export default card
