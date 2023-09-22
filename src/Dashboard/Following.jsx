import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import FollowingTableRow from '../Components/DashComponents/FollowingTableRow';

const Following = () => {
    const followings = [
        {
            recruiterId: "1",
            recruiterName: "Adroit",
            recruiterImage: "https://media.licdn.com/dms/image/C4D0BAQHrtYNljdjm9w/company-logo_100_100/0/1670441499328?e=1700092800&v=beta&t=0KzCPxcN0RYlHpKQkPgTEkoDLQWPpDXoUCBJc1V2Llk",
            recruiterCategory: "Graphics & Design",
            recruiterLocation: "Moscow, Russia"
        },
        {
            recruiterId: "2",
            recruiterName: "Extend",
            recruiterImage: "https://media.licdn.com/dms/image/C4E0BAQEON_wWCCtPmA/company-logo_100_100/0/1629838391794?e=1700092800&v=beta&t=FqvUWhOvsmmKhANQW69W6fT-KzWh-E_b4mtWUeDTZkM",
            recruiterCategory: "Video & Animation",
            recruiterLocation: "New york, USA"
        },
        {
            recruiterId: "3",
            recruiterName: "Charlie",
            recruiterImage: "https://media.licdn.com/dms/image/D560BAQHurzRis9UPKQ/company-logo_100_100/0/1681965367146?e=1700092800&v=beta&t=fv93tJtrK5mfRoi8zbedUYxwyCta70YCaHdHn7Hfyvc",
            recruiterCategory: "Music & Audio",
            recruiterLocation: "Beijing, China"
        },
    ]
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Followings' />

            {/* posted jobs table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-center">Category</th>
                            <th className="px-3 py-3 font-medium text-center">Location</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {followings.map((following) => (
                            <FollowingTableRow key={following._id} following={following} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Following;