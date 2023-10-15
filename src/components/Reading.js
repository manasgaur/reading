import React from 'react'
import data from './data.json'
export default function Reading() {
   
    // const data= JSON.stringify(jsondata)
    // console.log(jsondata)
    // data.map((value)=>{console.log("value",value)})
  return (
    <div >
        
        {data.map((value,index)=>
        
        { return <div >
            <h4 style={{width:"90vw",margin:"3vh auto 3vh",backgroundColor:"rgba(255,255,255,1)",width:"fit-content",padding:"1%"}}>Presentation Date : {value.date} </h4>
            <div className='main'>
                
            <img style={{width:"50px",margin:"0 90%"}} src="https://static.vecteezy.com/system/resources/previews/019/615/282/original/women-read-book-png.png" alt="" />
              
            <h1>Name : {value.Name}</h1>
            <h2>Topic : {value.Topic}</h2>
           <p>Presentation Link :  <a href={value.Presentation_link} target="_blank">{value.Presentation_link}</a></p>
            <br/>
           <p> Youtube Vide Link : <a href={value.Youtube_video_link} target="_blank">{value.Youtube_video_link}</a></p>
            <hr/>
            </div>
            </div>
            
         
        }
        )
        
        }

        
    </div>
  )
}
