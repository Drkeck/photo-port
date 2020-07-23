import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

    const {
        catagoties = [],
        setCurrentCategory,
        currentCatagory,
        contactSelected,
        setContactSelected

    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCatagory.name)
    }, [currentCatagory])

    return (
        <header className="flex-row px-1">
            <h2> 
                <a data-testid="link" href="/">
                <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={()=> setContactSelected(true)}>Contact</span>
                    </li>
                        {catagoties.map((catagory)=>(
                            <li   className={`mx-1 ${
                                currentCatagory.name === catagory.name && !contactSelected && `navActive`
                                }`}
                              key={catagory.name}>
                                <span onClick={()=> {
                                    setCurrentCategory(catagory)
                                    setContactSelected(false)
                                }}>
                                    {capitalizeFirstLetter(catagory.name)}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;