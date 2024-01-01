'use client'

export default function Counter(){
    function handleClick(event:any){
        console.log(event);
    }
    return <div>
        <button onClick={handleClick} >Click Me</button>
    </div>
}