import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES from '../../consts/Routes';
import Loading from '../../components/Loading/Loading';
import style from './Detail.module.css';
import Playercard from '../../components/Playercard/Playercard';
import useFetch from '../../hooks/useFetch';
import Errormessage from '../../components/Errormessage/Errormessage';

const Detail = () => {
    const { id } = useParams();
    const { data: playerData, isLoading, error } = useFetch("../darters.json");
    const [filteredResponse, setFilteredResponse] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (playerData) {
            const filteredPlayers = playerData.filter(player => player.id === parseInt(id))[0];
            if (filteredPlayers) setFilteredResponse(filteredPlayers);
            else navigate(ROUTES.notFound);
        }
    }, [playerData, id, navigate]);

    if (isLoading || !filteredResponse) {
        return <Loading />;
    } else if (error) {
        return <Errormessage error={error} />;
    } else {
        return (
            <Playercard
                id={filteredResponse.id}
                rank={filteredResponse.rank}
                name={filteredResponse.name}
                nationality={filteredResponse.nationality}
                age={filteredResponse.age}
                prize_money={filteredResponse.prize_money}
                img={filteredResponse.img}
                expansionData={filteredResponse}
            />
        );
    }
};

export default Detail;
