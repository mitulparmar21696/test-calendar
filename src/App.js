
import React ,{useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


function App() {

  const [month,setMonth] = useState(new Date())

  const handleMouseEvent=(pDown)=>{
    debugger
    if(pDown === 'up'){
      let date = moment(month).add(1,'months').calendar()
      date = new Date(date);
      let year = date.getFullYear()
      let monthD = date.getMonth()
      setMonth(new Date(year,monthD))
    }else{
      let date = moment(month).subtract(1,'months').calendar()
      date = new Date(date);
      let year = date.getFullYear()
      let monthD = date.getMonth()
      setMonth(new Date(year,monthD))
    }
  }
  return (
    <div className="App">
              <ReactScrollWheelHandler
              timeout={200}
          upHandler={()=>handleMouseEvent('down')}
          downHandler={()=>handleMouseEvent('up')}
        >
      <DayPicker month={month} />
      </ReactScrollWheelHandler>;
    </div>
  );
}

export default App;
