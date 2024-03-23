
'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export default function CardUserTemplate() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=9")
        .then((res) => res.json())
        .then((data) => setData(data.results));
    }, []);
    console.log(data);
    return (
    <div className='flex flex-col h-full w-full p-24 bg-[#ececec]'>
        <div className="bg-[url('https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            w-full h-full object-cover bg-center bg-[#a8915f]/50 bg-blend-multiply mb-10
            ">
                <div className="flex flex-col justify-content max-h-full items-center py-8 gap-2 overflow-visible">
                    <h1 className="font-bold text-[#ececec] text-3xl max-sm:text-2xl text-center">MEET OUR TEAM</h1>
                    <p className="text-[#ececec] max-sm:text-sm text-center text-sm py-2 px-4 break-words">Get a glimpse into the personalities and expertise of the professionals who drive innovation and excellence at SKIN1004 Company</p>
                </div>
        </div>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4'>
          {data.map((user: any, idx) => (
    <Card key={idx} className="max-w-sm">
      <div className="flex flex-1 gap-4 items-center">
        <Image
          alt={`${user.name.first} photos`}
          height="96"
          src={user.picture.large}
          width="96"
          className="mb-3 shadow-lg"
        />
        <div className='flex flex-col h-full w-full overflow-auto'>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white break-words">{user.name.first} {user.name.last}</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400 break-words"><IoMdMail className='inline-flex mr-2' />{user.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 break-words"><FaPhone className='inline-flex mr-2' />{user.phone}</p>
        </div>
      </div>
    </Card>
          ))}
        </div>
        </div>
      );
          }