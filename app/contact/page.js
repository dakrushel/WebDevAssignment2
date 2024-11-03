import React from 'react'
import Image from 'next/image';
import threeEyed from '/assets/images/threeEyed.jpg'; 
import AmusedCersei from '/assets/images/AmusedCersei.jpg';
import JL from '/assets/images/JL.jpg';
import Tyty from '/assets/images/Tyty.jpg';


const Page = () => {
    return (
        <div className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>

            <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center">
                    <h3 className="text-4xl font-semibold">Dean</h3>
                    <h4>Mr.Lannister</h4>
                    <Image 
                        src={Tyty} 
                        alt="Three Eyed Dean" 
                        className="w-40 h-40 transition-transform duration-300 transform hover:scale-110 rounded-full mt-2" 
                        width={160} 
                        height={160} 
                    />
                </div>
                
                <div className="flex justify-center space-x-6">
                    <div className="text-center p-8">
                        <h3 className="text-4xl font-semibold">Principal</h3>
                        <h4>Mrs.Lannister</h4>
                        <Image 
                            src={AmusedCersei} 
                            alt="Cersei Lannister" 
                            className="w-40 h-40 transition-transform duration-300 transform hover:scale-110 rounded-full mt-2" 
                            width={160} 
                            height={160} 
                        />
                    </div>

                    <div className="text-center p-8">
                        <h3 className="text-4xl font-semibold">Vice Principal</h3>
                        <h4>Mr.Lannister</h4>
                        <Image 
                            src={JL} 
                            alt="Jaime Lannister" 
                            className="w-40 h-40 transition-transform duration-300 transform hover:scale-110 rounded-full mt-2" 
                            width={160} 
                            height={160} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;