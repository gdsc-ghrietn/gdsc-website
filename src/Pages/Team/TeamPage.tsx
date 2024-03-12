import{ useEffect } from 'react'


const TeamPage = () => {
    useEffect(() => {
        console.log('TeamPage')
    }
    , [])
    return (
        <div className='h-screen bg-blue-500 w-full'>
            TeamPage    
        </div>
    )
}

export default TeamPage;