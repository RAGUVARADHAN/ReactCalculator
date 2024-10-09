export default function Buttons({...props})
{

    return(
        <div className=''>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <button className="bg-blue-400" onClick={props.clear}>AC</button>
                <button className="bg-blue-400" onClick={props.deleteEle}>DE</button>
                <button className="bg-blue-400" onClick={props.handleClick} value=".">.</button>
                <button className="bg-blue-400" onClick={props.handleClick} value="/">/</button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <button className="bg-slate-300 rounded-lg" onClick={props.handleClick} value="7">7</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="8">8</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="9">9</button>
                <button className="bg-blue-400" onClick={props.handleClick} value="*">*</button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="4">4</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="5">5</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="6">6</button>
                <button className="bg-blue-400" onClick={props.handleClick} value="-">-</button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="1">1</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="2">2</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="3">3</button>
                <button className="bg-blue-400" onClick={props.handleClick} value="+">+</button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="00">00</button>
                <button className="bg-slate-300  rounded-lg" onClick={props.handleClick} value="0">0</button>
                <button className="bg-blue-400" onClick={props.calculate}>=</button>
            </div>
      </div>
    )
}