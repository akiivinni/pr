import { useState } from "react";
import { useDispatch } from "react-redux";

const Forms = ()=>
{


    const buttonstyle = {

        backgroundColor: 'red',
        padding:'10px',
        margin:'20px',
        color:'white'


    }

    const buttonstyle2 = {

        backgroundColor: 'green',
        padding:'10px',
        margin:'20px',
        color:'white'


    }
    const [amount,setAmount]=useState("")
    const [name,setName]= useState("")
    let dispatch =  useDispatch();

    return(

        <>

        <h3>Forms</h3>

        <div className = "row">


            <div className="col-4">
                <input className="form-control"
                type = "number"
                placeholder="Enter amount"
                value={amount}
                onChange={(event)=>
                {
                    let data = event.target.value;
                    setAmount(data)
                }}
                />
            </div>

            <div className="col-4">
                <input className="form-control"
                type = "name"
                placeholder="Enter name"
                value={name}
                onChange={(event)=>
                {
                    let data = event.target.value;
                    setName(data)
                   
                }}
                />
            </div>


            <button className="btn-btn-primary col-1" 
           style={buttonstyle2}
            onClick={()=>{
                dispatch({type : "deposit",payload:amount})
                setAmount("")


                
            }}
            >
                Deposit
            </button>

            <button className="btn-btn-danger col-1"

            style={buttonstyle }
            onClick={()=>{
                dispatch({type : "withdraw",payload:amount})
                setAmount("")
                
            }}
            >
              withdraw
            </button>


            

        </div>


        </>
    )
}

export default Forms;