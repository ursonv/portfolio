
import React from 'react';
import style from "./PlayerExpansion.module.css";

const PlayerExpansion = ({ player }) => {
    return (
        <div className={style.expansionContainer}>
            <div className={style.expansionItem}>
                <div className={style.expansionLabel}>Description:</div>
                <div className={style.expansionValue}>
                    {player.description}
                </div>
            </div>
        </div>
    );
};

export default PlayerExpansion;
