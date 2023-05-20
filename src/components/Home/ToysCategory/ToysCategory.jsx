import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from "./ToyCard.jsx";

const ToysCategory = () => {
    const [avengersToys, setAvengersToys] = useState([]);
    const [marvelToys, setMarvelToys] = useState([]);
    const [starWarsToys, setStarWarsToys] = useState([]);
    
    useEffect(() => {
        fetch('https://playland-treasures-server.vercel.app/toys')
            .then(response => response.json())
            .then(data => {
                const avengersToysData = data.filter(toy => toy.category === "Avengers");
                const marvelToysData = data.filter(toy => toy.category === "Marvel");
                const starWarsToysData = data.filter(toy => toy.category === "Star Wars");
                
                setAvengersToys(avengersToysData);
                setMarvelToys(marvelToysData);
                setStarWarsToys(starWarsToysData);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, []);
    
    const renderLimitedCards = (toys) => {
        const limitedToys = toys.slice(0, 3);
        return limitedToys.map(toy => <ToyCard key={toy._id} toy={toy} />);
    }
    
    return (
        <div className="text-center">
            <Tabs>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>Avengers</Tab>
                    <Tab>Star Wars</Tab>
                </TabList>
                
                <TabPanel>
                    <div className="flex mx-auto justify-center gap-10">
                        {renderLimitedCards(marvelToys)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex mx-auto justify-center gap-10">
                        {renderLimitedCards(avengersToys)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex mx-auto justify-center gap-10">
                        {renderLimitedCards(starWarsToys)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToysCategory;