import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHooby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList'

HomePage.propTypes = {
    
};


function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    
    const dispatch = useDispatch();
    const randomNumber = () => {
        return ( Math.trunc(Math.random() * 10000))
    }
    
    const handleAddHobbyClick = () => {
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `hobby ${newId}`
        };

        const action = addNewHobby(newHobby);
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHooby(hobby);
        dispatch(action);

    }

    return (
        <div className="home-page">
            <h1 className="title">Redux-hook</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            ></HobbyList>
        </div>
    );
}

export default HomePage;