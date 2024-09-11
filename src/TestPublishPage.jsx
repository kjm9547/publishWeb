import { useState } from "react"

export const TestPublishPage = () => {
    const [count,setCount] = useState(0)
    return(
        <div>
            <header><h1 style={{color:"#4E41DB"}}>Click!</h1></header>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
                }}>
                
                <button 
                    onClick={()=>{setCount(count+1)}}
                    style={{
                        border:"1px solid #D9D9D9",
                        backgroundColor:"#4E41D8",
                        color:"white",
                        fontWeight:"bold"}}
                >+</button>
                <p style={{fontWeight:"bold",fontSize:40}}>{count}</p>
                <button 
                    onClick={()=>{setCount(count-1)}}
                    style={{
                        border:"1px solid #D9D9D9",
                        backgroundColor:"#4E41D8",
                        color:"white",fontWeight:"bold"}}
                    >-</button>
            </div>
        </div>
    )
}

