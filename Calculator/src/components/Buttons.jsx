export default function Buttons({...props})
{

    return(
        <div className=''>
        <div>
          <button className='operator' onClick={props.clear}>AC</button>
          <button className='operator' onClick={props.deleteEle}>DE</button>
          <button className='operator' onClick={props.handleClick} value=".">.</button>
          <button className='operator' onClick={props.handleClick} value="/">/</button>
        </div>
        <div>
          <button className='operator' onClick={props.handleClick} value="7">7</button>
          <button className='operator' onClick={props.handleClick} value="8">8</button>
          <button className='operator' onClick={props.handleClick} value="9">9</button>
          <button className='operator' onClick={props.handleClick} value="*">*</button>
        </div>
        <div>
          <button className='operator' onClick={props.handleClick} value="4">4</button>
          <button className='operator' onClick={props.handleClick} value="5">5</button>
          <button className='operator' onClick={props.handleClick} value="6">6</button>
          <button className='operator' onClick={props.handleClick} value="-">-</button>
        </div>
        <div>
          <button className='operator' onClick={props.handleClick} value="1">1</button>
          <button className='operator' onClick={props.handleClick} value="2">2</button>
          <button className='operator' onClick={props.handleClick} value="3">3</button>
          <button className='operator' onClick={props.handleClick} value="+">+</button>
        </div>
        <div>
          <button className='operator' onClick={props.handleClick} value="00">00</button>
          <button className='operator' onClick={props.handleClick} value="0">0</button>
          <button className='operator' onClick={props.calculate}>=</button>
        </div>
      </div>
    )
}