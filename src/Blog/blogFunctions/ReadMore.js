import React, { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const ToggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
            onClick={ToggleReadMore}
            className="read-or-hide"
            style={{ color: "green" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
            
        </p>
    );
};

const Content = () => { 
    return ( 
        <div className="container">
            <ReadMore>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus consectetur odio repellat dolorem non, accusamus fugit illum quas hic!
            </ReadMore>
        </div>
    );
};

export default Content;