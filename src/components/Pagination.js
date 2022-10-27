import React from "react";

const Pagination = (props) =>{
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}> <div className="arrow">◀</div> </button>
            <div className="pagination-text">{page} de {totalPages}</div>
            <button onClick={onRightClick}> <div className="arrow">▶</div> </button>
        </div>
    )
}
export default Pagination