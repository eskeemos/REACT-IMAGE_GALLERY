import React, { useState } from 'react';

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                <button className="bg-blue-800 border-blue-800 flex-shrink-0 text-sm border-4 py-1 px-2 rounded text-white font-bold" type="submit">Search</button>
            </div>
        </form>
		</div>
    )
}

export default ImageSearch
