import { useEffect, useState } from "react"

export const TestPublishPage = () => {
    const [count,setCount] = useState(0)
    const [ftSize, setFtSize] = useState(40)
    useEffect(()=>{
        if(count % 5 == 0) setFtSize(ftSize+10)
    },[count])
    return(
        <div>
            <header onClick={()=>{setCount(0)}}
            ><h1 style={{color:"#4E41DB"}}>Click.....!</h1></header>
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
                <p style={{fontWeight:"bold",fontSize:ftSize}}>{count}</p>
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

