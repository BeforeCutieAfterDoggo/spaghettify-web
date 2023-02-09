import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { TwitterShareButton, TwitterIcon } from "react-share";
import { CopyBlock, dracula } from "react-code-blocks";

const GradientBackground = () => {

    return (
        <div
            className="relative"
        >
            <img className="absolute inset-0 h-screen w-screen object-cover " src="/bg3.png" alt="" />

            <img className=" relative w-60 ml-8 md:w-40 md:p-2 md:ml-4 " src="/logo.png"></img>

            <div className=" relative  font-extrabold inset-0 m-auto text-lg md:text-xl lg:text-4xl xl:text-4xl mx-14 md:mx-40 lg:mx-60 justify-start flex">
                My code is too&nbsp;
                <div className='font-extrabold text-lg md:text-xl lg:text-4xl xl:text-4xl '>
                    <Typewriter

                        options={{
                            strings: ['Clear 🥲', 'Concise 🤔', 'Well-Documented 😴'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <h1 className="relative text-black text-6xl font-bold  m-auto mx-14  md:mx-40 lg:mx-60 md:text-8xl ">Meet Spaghettify</h1>
            <p className="relative text-black mx-14 m-auto mt-10 md:mx-40 lg:mx-60 md:text-3xl ">A Visual Studio Code extension to make your code spaghetti. 🍝</p>
            <div className="relative flex flex-col md:flex-row ml-14 md:mx-40 lg:mx-60 lg:mx-60 mt-10 font-extrabold text-black tracking-wide ">
                <div className='w-1/3 mr-4 mt-8 '>
                    WHAT&apos;S IT FOR?
                    <p className='text-2xl font-normal mt-4 mr-8'>Making code worse with AI</p>
                </div>
                <div className='md:w-1/3 mr-24 md:mr-2 flex flex-col mt-8'>
                    STAGE
                    <button className='p-2 mt-4 border font-mono tracking-widest md:mr-16 border-white rounded-lg bg-gradient-to-r from-[#B994FF] to-[#7CE6A0]  border-2 border-black '><p className='text-black'>W̵̨̨̤̫̮̥͓͕̑̇ŏ̷̦̞͖̈̆̅̇͐̊̕ř̴̩̮̯͕͚̭k̵̥̫̅̎͂ͅš̸̺̯͓͉͂ ̷̣͉͕̀̀̄̔̌͛̄̕C̷̡̟͈͈̣͕͓͎͉̮̓̃̅̅͘ỏ̸̢̮͉̹̹̻̘̰̘̖̾́̄̍̉͊́̽̏m̷̪̞̈́̉̊p̷̜̤̻̤̲̆̀̈́̄͌̅̈́̅͑͜ḻ̶̗̖̞̼̠̎̔́̾̒͋̈̐̚͜ę̴̤̦̼̭̣̼̣̾ţ̸̲̹̯̺͇̦̥͓̃͒͒̂͒͑̒ē̴̢̮̻̗̘̜͎̭̈́̚͝l̸̨̠͓͎͂̉͆͌͌̄̾̿y̵̢̧̼͓̝̭̠̖̔̀̌̑͐͆͘ͅ</p></button>
                </div>
                <div className='w-1/3 mr-4 mt-8 '>
                    WHO MADE IT?
                    <div className='flex'>
                        <img className='rounded-full w-10 mt-4' src="/jmill.jpeg"></img>
                        <a href='https://twitter.com/jmilldotdev'>
                            <p className='mt-6 ml-2 font-normal'>@jmilldotdev</p>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex flex-col mx-14 md:mx-40 lg:mx-60 mt-10 font-extrabold text-black ">
                SHARE
                <TwitterShareButton url={"localhost:3000"}>
                    <img className='w-8' src="/twitter.png" />
                </TwitterShareButton>
            </div>
            <div className="mx-14 md:mx-40 lg:mx-60 md:mt-28 lg:mt-32 ">
                <p className='my-8 text-xl'>Coding is not a very visceral activity. You sit in front of a screen, type some stuff, and then you have some stuff on a screen. What if we could make it more delicious, like shoveling down a massive plate of spaghetti. </p>

                <p className='my-8 text-xl'>Meet <a className='underline text-purple-500 font-bold' target="_blank" rel="noreferrer" href='https://marketplace.visualstudio.com/items?itemName=BCAD.spaghettify'>Spaghettify</a>, a Visual Studio Code extension that turns your not-so-tasty code into spaghetti. Mama Mia! 🤌</p>

                <p className='text-4xl md:text-6xl font-bold'> # What can Spaghettify do?</p>
                <p className='mt-8 text-xl'>Spaghettify comes with several ways to make your code a lot more flavorful. (and...maybe a bit less healthy) </p>
                <img className='rounded-3xl mt-8' src='/demo.png'></img>
                <p className='mt-8 text-xl'>For example, here&apos;s some Python code which finds neighbors in a 2D array:</p>
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

                <p className='mt-8 tracking-wide text-4xl md:text-6xl  font-bold'># Spaghetti Time </p>
                <p className='my-16 tracking-wide text-4xl'># Introduce a Bug</p>
                <p className='my-8 text-xl'>Throw in a subtle change that will break the code, leaving your coworkers scratching their heads for hours. Add a stray +1, extra iteration, or nested list with ease! Can you spot the bug? 🐛</p>

                <CopyBlock
                    text={`def neighbors(arr, x, y, n):
    result = []
    row_start = max(0, x-n)
    row_end = min(len(arr)-1, x+n)
    col_start = max(0, y-n)
    col_end = min(len(arr[0])-1, y+n-1)
    for i in range(row_start, row_end+1):
        for j in range(col_start, col_end):
            result.append((i, j))
    return result
                `}
                    language={"python"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                />

                <p className='my-16 tracking-wide text-4xl'># Obscure Code</p>
                <p className='my-8 text-xl'>Was the code too readable? Too elegant? Could your coworkers understand what it did with a passing glance? Well not anymore!</p>

                <CopyBlock
                    text={`def neighbors(arr,x,y,n): r=[] ; rS=max(0,x-n); rE=min(len(arr)-1,x+n); cS=max(0,y-n); cE=min(len(arr[0])-1,y+n); [r.append((i,j)) for i in range(rS,rE+1) for j in range(cS,cE+1)]; return r
                `}
                    language={"python"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                />
                <p className='my-16 tracking-wide text-4xl'># Add Irrelevant Comments</p>
                <p className='my-8 text-xl'>Do you ever look at code and think, &quot;This sorting function sure could use an existential questioning about why it&apos;s there&quot;. Now it&apos;s easy!</p>

                <CopyBlock
                    text={`# Definition of neighbor-finding function
# 🤔 what a weird thing. Wonder why they need this.
def neighbors(arr, x, y, n): # 👋 Hello!
    result = [] # initialized result
    row_start = max(0, x-n) # setting row start
    row_end = min(len(arr)-1, x+n) # setting row end
    col_start = max(0, y-n) # setting col start
    col_end = min(len(arr[0])-1, y+n) # setting col end
    # Now iterating to find matches 🤔??
    for i in range(row_start, row_end+1): # Duh!! 😒
        for j in range(col_start, col_end+1): # Still going
            result.append((i, j)) # Coo doodly doo! :)
    return result # Returning the result

# 🤷‍♂️ So much logic 😱
                    `}
                    language={"python"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                />
                <p className='my-16 tracking-wide text-4xl'># Document with Emoji</p>
                <p className='my-8 text-xl'>While we&apos;re ✍️ writing comments, how 👏 about documenting the 👏 code 😤 entirely with 🐺 emoji? 🎭🙋</p>

                <CopyBlock
                    text={`"""
🌐🕵️‍♂️🔍👀📍👨‍👩‍👧‍👦
"""
def neighbors(arr, x, y, n):
    """
    📊🎯🎖️
    """
    result = []  # 🔍
    row_start = max(0, x-n)
    row_end = min(len(arr)-1, x+n)
    col_start = max(0, y-n)  # 💯
    col_end = min(len(arr[0])-1, y+n)
    for i in range(row_start, row_end+1):  # 🔃
        for j in range(col_start, col_end+1):
            result.append((i, j))  # 🤝
    return result  # 🛩️
                    `}
                    language={"python"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                />
                <p className='my-16 tracking-wide text-4xl'># Overly Descriptive Names</p>
                <p className='my-8 text-xl'>Make your code just a little bit more explicit about what it does. (We see you, Objective-C developers.)</p>

                <CopyBlock
                    text={`def neighboring_locationFinder_routine(matrix_of_cells, x_index_coordinate, y_index_coordinate, adjacency_boundaries_bracket):
    list_of_neighbor_locs = []
    vertical_axis_start_index = max(0, x_index_coordinate-adjacency_boundaries_bracket)
    vertical_axis_end_index = min(len(matrix_of_cells)-1, x_index_coordinate+adjacency_boundaries_bracket)
    horizontal_axis_start_index = max(0, y_index_coordinate-adjacency_boundaries_bracket)
    horizontal_axis_end_index = min(len(matrix_of_cells[0])-1, y_index_coordinate+adjacency_boundaries_bracket)
    for horizontal_index in range(vertical_axis_start_index, vertical_axis_end_index+1):
        for vertical_index in range(horizontal_axis_start_index, horizontal_axis_end_index+1):
            list_of_neighbor_locs.append((horizontal_index, vertical_index))
    return list_of_neighbor_locs

                    `}
                    language={"python"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                />
                <p className='my-16 tracking-wide text-4xl'># Random Whitespace</p>
                <p className='my-8 text-xl'>Win the space race by adding random, inconsistent spaces all throughout your formerly symmertrical code. </p>

                <CopyBlock
                    text={`def  neighbors  (arr ,x,  y  ,  n): result =[];  row_start=  max  (  0  , x-n  );   row_end  =min(len(arr)-1 ,    x + n );col_start  =  max  (0,  y  -  n);  col_end  =min  ( len  (arr[  0  ]) -1  , y  +n );  for  i  in  range  (  row_start , row_end  +1 ):   for   j   in  range  ( col_start   , col_end  +  1):result.append(  (i  ,  j  )  )   ;return result  ;
                    `}
                    language={"python"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                />
                <p className='my-16 tracking-wide text-4xl'># Fancy Docstring</p>
                <p className='my-8 text-xl'>Document your code automatically using any character or style. Rap lyrics? Dirty limerick? Fast talkin&apos; 1930&apos;s gangster? A pirate on acid? Whatever you need, Spaghettify heeds.</p>

                <CopyBlock
                    text={`"""
Returns a list full of points
From given matrix, they anoints
Up to n away
Each row and column they sway
'Til each neighbor is accounted for joint
"""

def neighbors(arr, x, y, n):
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
                <div className='flex flex-row justify-center'>
                    <a target="_blank" rel="noreferrer" href='https://www.bcad.one/'>
                    <img className='mt-8 h-16' src="/bcad1.png" />
                    </a>
                </div>
                <p className='mt-4 mb-8 text-xl text-center'>Produced By BCAD Studio</p>


            </div>

        </div>


    );
};

export default GradientBackground;
