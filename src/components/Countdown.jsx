
import { useState, useEffect } from 'react';

const Countdown = () => {
    const targetDate = new Date('June 19, 2024 00:00:00').getTime();
    const [countdown, setCountdown] = useState(calculateCountdown());

    function calculateCountdown() {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center'>

            <div className='flex flex-row bg-yellow justify-center rounded-xl sm:w-[400px] xx:w-[350px] text-black py-2 px-2'>
                <div className='flex flex-col '>
                    <h1 className='sm:text-4xl xx:text-2xl font-bold py-1'>{`${countdown.days}`}</h1>
                    <h1 className='text-md font-semibold py-0.5 flex justify-center '>Days</h1>
                </div>

                <div className='flex justify-center sm:px-5 xx:px-3 text-center sm:mt-4 xx:mt-3 text-4xl'> :</div>

                <div className='flex flex-col '>
                    <h1 className='sm:text-4xl xx:text-2xl font-bold py-1 flex justify-center'>{`${countdown.hours}`}</h1>
                    <h1 className='text-md font-semibold py-0.5 flex justify-center text-center'>Hours</h1>
                </div>

                <div className='flex justify-center sm:px-5 xx:px-3 text-center sm:mt-4 xx:mt-3 text-4xl'> :</div>

                <div className='flex flex-col '>
                    <h1 className='sm:text-4xl xx:text-2xl font-bold py-1 flex justify-center'>{`${countdown.minutes}`}</h1>
                    <h1 className='text-md font-semibold py-0.5 flex justify-center text-center'>Minutes</h1>
                </div>

                <div className='flex justify-center sm:px-5 xx:px-3 text-center sm:mt-4 xx:mt-3 text-4xl'> :</div>

                <div className='flex flex-col '>
                    <h1 className='sm:text-4xl xx:text-2xl font-bold py-1 flex justify-center'>{`${countdown.seconds}`}</h1>
                    <h1 className='text-md font-semibold py-0.5 flex justify-center text-center'>Seconds</h1>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
