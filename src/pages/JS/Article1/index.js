import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function index() {
    return (
        <div>
         <ReactMarkdown 
            source = {
             `##### 这是文章标题\n\n **加粗用两层星号包围** \n\n`
            }
         />
        </div>
    )
}
