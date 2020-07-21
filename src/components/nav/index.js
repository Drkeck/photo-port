import React from 'react';

function Nav() {
   const catagoties = [
        {
            name: "commercial",
            description:
             "Photos of grocery stores, food trucks, and other commercial projects"
        },
        { name: "portraits", description: "Portraits of people in my life"},
        { name: "food", description: "Delicious delicacies"},
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ];
    function catagorySelected(name) {
        console.log(`${name} Clicked`)
    }

    return (
        <header>
            <h2> 
                <a href="/">
                <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                        {catagoties.map((catagoties)=>(
                            <li className="mx-1"
                            key={catagoties.name}>
                                <span onClick={()=> catagorySelected(catagoties.name)}>
                                    {catagoties.name}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;