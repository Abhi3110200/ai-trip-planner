import React from "react"   
export const SelectTravelesList = [
    {
        id:1,
        title:'Just Me',
        icon:'✈️',
        people:'1',
        desc:'A sole traveles in exploration'
    },
    {
        id:2,
        title:'A Couple',
        icon:'💑',
        people:'2',
        desc:'Two traveles in tandem'
    },
    {
        id:3,
        title:'A Family',
        icon:'👨',
        people:'3 to 5 people',
        desc:'A group of fun loving adv'
    },
    {
        id:4,
        title:'Friends',
        icon:'👬',
        people:'3 to 5 people',
        desc:'A bunch of thrill-seekes'
    }
]

function GroupSize({onSelectOption}:any) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1 items-center">
            {SelectTravelesList.map((item,index)=>(
                <div key={index} onClick={()=>onSelectOption(item.title+" "+item.people)} className='p-3 border rounded-2xl bg-white cursor-pointer hover:bg-primary hover:text-white transition-all'>
                    <h2>{item.icon}</h2>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default GroupSize