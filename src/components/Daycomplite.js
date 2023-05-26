import { useGetImageQuery,useUpdateImageMutation,useGetUQuery,useDaycomplitedMutation } from '../services/imaagequery'

const Daycomplite=({userid})=> {

    // const { data, error, isLoading } = useGetImageQuery()
    // const [updatePost, { isUpdating }] = useUpdateImageMutation()
    const { data, error, isLoading } = useGetUQuery(userid)
    const [updatePost, { isUpdating }] = useDaycomplitedMutation()
  
    const mclick=(id,selectedday,dayn)=>{
     updatePost({id:id,selectedday:selectedday,dayn:dayn})
    }
  
    
    return (
    <>
    <div className='stitle'>
    complite the days:
    </div>
    
    {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>
          <div className='loading'>
            <img src='/Loading_2.gif' alt='loading' />
            </div>
            </>
        ) : data ? (
          <div className='imagewrapper'> 
            <div className='mww'  onClick={()=>{!data.day1 && mclick(data.userid,data.day1,1)}}>
           <img src={`${data.day1?`/1.png`:'/star.png' }`} alt="day1"/>
           </div>
           <div className='mww'  onClick={()=>{ !data.day2 && mclick(data.userid,data.day2,2)}}>
           <img src={`${data.day2?`/2.png`:'/star.png' }`} alt="day2" />
           </div>
           <div className='mww'  onClick={()=>{!data.day3 && mclick(data.userid,data.day3,3)}}>
           <img src={`${data.day3?`/3.png`:'/star.png' }`} alt="day3" />
           </div>
           <div className='mww'  onClick={()=>{!data.day4 && mclick(data.userid,data.day4,4)}}>
           <img src={`${data.day4?`/4.png`:'/star.png' }`} alt="day4"/>
           </div>
           <div className='mww'  onClick={()=>{!data.day5 && mclick(data.userid,data.day5,5)}}>
           <img src={`${data.day5?`/5.png`:'/star.png' }`} alt="day5"/>
           </div>
           <div className='mww'  onClick={()=>{!data.day6 && mclick(data.userid,data.day6,6)}}>
           <img src={`${data.day6?`/6.png`:'/star.png' }`} alt="day6" />
           </div>
           <div className='mww'  onClick={()=>{!data.day7 && mclick(data.userid,data.day7,7)}}>
           <img src={`${data.day7?`/7.png`:'/star.png' }`} alt="day7"/>
           </div>
          </div>
        ) : <><p>No data Available</p></>}
  
  
    </>
    );
  }
  
  export default Daycomplite;
  