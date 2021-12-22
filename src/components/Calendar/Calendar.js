import React, {useState, useEffect} from 'react';
import  moment from 'moment';
import "./Calendar.css"

const Calendar = (props) =>
{
    const [today, setToday] = useState(moment());
    const [calendar, setCalendar] =useState([]);
    const startDate = today.clone().startOf("month").startOf('week');
    const endDate = today.clone().endOf("month").endOf('week');
    
    useEffect(()=>{
        const day = startDate.clone().subtract(1, 'day');
        const a = [];
        while (day.isBefore(endDate, 'day')){
            a.push(
                Array(7)
                .fill(0)
                .map(()=>day.add(1,'day').clone())
            );
        }
        setCalendar(a);
    }, [today])

    const isToday =(day) => 
    {
        return day.isSame(new Date(), 'day')
    }

    const isThisMonth = (day) =>{
        return day.isSame(today, 'month')
    }

    const applyStyles = (day) => {
        if(isToday(day)) return 'today';
        if(!isThisMonth(day)) return 'grey'
    }
    const currMonth = () => {
        return today.format('MMMM')
    }

    const currYear = () => {
        return today.format('YYYY')
    }

    
 
    return <div className = "calendar">
        <div className = 'header'>
            <div className='previus' 
            onClick = {()=>setToday(today.clone().subtract(1,'month'))}>
                {String.fromCharCode(171)}</div>
            <div className='current'>{currMonth()} {currYear()}</div>
            <div className='next'
            onClick = {()=> setToday(today.clone().add(1,'month'))}>
                {String.fromCharCode(187)}
            </div>
        </div>
        <div className = 'body'>
            {calendar.map(week=> (
            <div> {
                week.map(day=> (
                    <div className = 'day' onClick={()=>props.callmodal(day)}>
                    
                            <div className = {applyStyles(day)}>
                                {day.format('D')}
                            </div>
                    </div>
                )) }
                </div>
            ))}
            
            <div className = 'day-names'> {
                ['s','m','t','w','t','f','s'].map((name)=>(
                    <div className ='week'> {name}</div>
                ))
            }
            </div>
        </div>
    </div>
} 

export default Calendar;