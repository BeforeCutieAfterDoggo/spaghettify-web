import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { TwitterShareButton, TwitterIcon } from "react-share";
import { CopyBlock, dracula } from "react-code-blocks";

const GradientBackground = () => {
    const [background, setBackground] = useState(0);

    const handleClick = () => {
        setBackground((background + 1) % 3);
    };

    const gradientMap = [
        'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#29F894] via-fuchsia-600 to-white',
        'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFCE22] via-[#8143E6] to-[#FF6B00]',
        'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900',
    ];


    return (
        <div
            className={`min-h-screen ${gradientMap[background]}`}
            onClick={handleClick}
        >

            <img className=" w-60 p-10 md:w-40 md:p-6 " src="/logo.png"></img>

            <div className=" font-extrabold inset-0 m-auto text-4xl  mx-14 md:mx-60 justify-start flex">
                My code is too&nbsp;
                <div className='font-extrabold text-4xl '>
                    <Typewriter

                        options={{
                            strings: ['Clear 🥲', 'Concise 🤔', 'Well-Documented 💯'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <h1 className="text-black text-6xl font-bold  m-auto mx-14  md:mx-60 md:text-8xl ">Meet Spaghettify</h1>
            <p className="text-black text-6xl m-auto mt-10 md:mx-60 md:text-3xl ">A Visual Studio Code extension to make your code more awful with the power of Artificial Intelligence. 🍝</p>
            <div className="flex mx-60 mt-10 font-extrabold text-black tracking-wide ">
                <div className='w-1/3 mr-4'>
                    WHAT'S IT FOR?
                    <p className='text-2xl font-normal mt-4'>Making code worse with machine learning</p>
                </div>
                <div className='w-1/3 mr-4 flex flex-col'>
                    STAGE
                    <button className='p-2 mt-4 border font-mono tracking-widest mr-16 border-white rounded-lg bg-gradient-to-r from-[#B994FF] to-[#7CE6A0]  border-2 border-black '><p className='text-black'>WORK COMPLETELY</p></button>
                </div>
                <div className='w-1/3 mr-4 '>
                    WHO MADE IT?
                    <div className='flex'>
                        <img className='rounded-full w-10 mt-4' src="/jmill.jpeg"></img>
                        <a href='https://twitter.com/jmilldotdev'>
                            <p className='mt-6 ml-2 font-normal'>@jmilldotdev</p>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex flex-col mx-60 mt-10 font-extrabold text-black ">
                SHARE
                <TwitterShareButton url={"localhost:3000"}>
                    <img className='w-8' src="/twitter.png" />
                </TwitterShareButton>
            </div>
            <div className="mx-60 mt-10 ">
                <p className='text-6xl font-bold'> # What can Spaghettify do?</p>
                <p className='mt-8 text-xl'>We’ve populated the toolbox with a few brushes that we find hilarious. Here's a beautiful code that finds all neighbors within radius n in a 2D array:</p>
                <div className='mt-8'>
                    <CopyBlock
                        text={`def neighbors(arr, x, y, n):
    result = []
    row_start = max(0, x-n)
    row_end = min(len(arr)-1, x+n)
    col_start = max(0, y-n)
    col_end = min(len(arr[0])-1, y+n)
    for i in range(row_start, row_end+1):
        for j in range(col_start, col_end+1):
            result.append((i, j))
    return result
                `}
                        language={"python"}
                        showLineNumbers={true}
                        wrapLines
                        theme={dracula}
                    />
                </div>

                <p className='mt-8 tracking-wide text-4xl font-bold'>Now Let's </p>
                <p className='mt-8 tracking-wide text-4xl'># Introduce Bug</p>


                <p className='mt-8 tracking-wide text-4xl'># Add Silly Comments</p>
                <p className='mt-8 tracking-wide text-4xl'># Document with Emoji</p>
                <p className='mt-8 tracking-wide text-4xl'># Overly Descriptive Names</p>
                <p className='mt-8 tracking-wide text-4xl'># Random Whitespace</p>
                <p className='mt-8 tracking-wide text-4xl'># Fancy Docstring</p>

            </div>

        </div>


    );
};

export default GradientBackground;
