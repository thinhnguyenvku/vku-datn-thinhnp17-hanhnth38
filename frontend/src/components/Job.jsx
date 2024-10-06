import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'> 2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtM_p47moTJpUTekYJpK9PNmxmEu3zs6BtBw&s" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>company name</h1>
                    <p className='text-sm text-gray-500'>VietNam</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>job title</h1>
                <p className='text-sm text-gray-600'>job description job description job description job description job description job description</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">part time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">12LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job