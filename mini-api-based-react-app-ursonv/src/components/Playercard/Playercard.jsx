
import React from 'react';
import style from './Playercard.module.css';
import ROUTES from '../../consts/Routes';
import { Link } from 'react-router-dom';
import PlayerExpansion from './playerExpansion/PlayerExpansion';

const Playercard = ({ id, rank, name, nationality, age, prize_money, description, img, expansionData = false }) => {

    return (
        <Link to={`${ROUTES.detail.to}${id}`} className={`${style.playerCard} ${expansionData ? style.expanded : ''}`}>
            <div className={style.playerCardContent}>
                <div className={style.playerCardTop}>
                    <div className={style.playerCardRank}>#{rank}</div>
                </div>
                <img src={img} alt={name} className={style.playerCardImage} />
                <div className={style.playerCardName}>{name}</div>
                <div className={style.playerCardDetails}>
                    <div className={style.playerCardDetail}>{nationality}</div>
                    <div className={style.playerCardDetail}>Age: {age}</div>
                </div>
                <div className={style.playerCardPrize}>Prize money: ${prize_money}</div>
                {expansionData ?
                    <PlayerExpansion player={expansionData} />
                    :
                    <div className={style.playerCardDescription}></div>
                }
            </div>
        </Link>
    );
};

export default Playercard;
