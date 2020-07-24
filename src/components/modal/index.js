import React from 'react'

function Modal({ onClose, currentPhoto }) {
    const { name, category, description, index } = currentPhoto

    return(
        <>
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="Current catagory" />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    close this modal
                </button>
            </div>
        </div>
        </>//jsx
    );
}

export default Modal;