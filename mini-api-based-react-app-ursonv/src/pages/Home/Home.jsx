import style from "./Home.module.css";
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading.jsx';
import Playercard from "../../components/Playercard/Playercard.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import Errormessage from "../../components/Errormessage/Errormessage.jsx";
import Noresults from "../../components/No results/NoResults.jsx";

function Home() {

    const {
        isLoading,
        data,
        error
    } = useFetch('./darters.json');


    const [filteredData, setFilteredData] = useState([]);


    const [formData, setFormData] = useState({
        name: '',
        age: ''
    });

    const handleChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const filter = () => {
        let dataCopy = structuredClone(data);
        dataCopy = dataCopy.filter(dataItem => (
            dataItem.name.toLowerCase().includes(formData.name.toLocaleLowerCase())) &&
            (!isNaN(parseInt(formData.age)) ? dataItem.age <= parseInt(formData.age) : true))
        setFilteredData(dataCopy);
    };


    useEffect(() => {
        if (data) filter();
    }, [formData]);

    useEffect(() => {
        if (!isLoading && !error) setFilteredData(data);
    }, [isLoading]);


    if (isLoading) return (<Loading />);
    else if (error) return <Errormessage error={error} />;
    else return (
        <article className={style.app}>

            <div className={style.filter}>
                <label className={style.filter__label} htmlFor="name">
                    Name darter: <input id='name' name='name' type={'text'} value={formData.name} onChange={handleChange} />
                </label>
                <label className={style.filter__label} htmlFor="age">
                    Age darter: <input min={0} max={100} id='age' name='age' type={'number'} value={formData.age} onChange={handleChange} />
                </label>
            </div>

            <section className={style.card__wrapper}>
                {
                    filteredData.length !== 0 ?
                        filteredData.map((player) => {
                            return (<Playercard key={`player_${player.id}`} id={player.id} rank={player.rank} name={player.name} nationality={player.nationality} age={player.age} prize_money={player.prize_money} description={player.description} img={player.img}/>)
                        })
                        :
                        <Noresults />
                }

            </section>
        </article>
    );
}

export default Home;
