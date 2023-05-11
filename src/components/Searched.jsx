import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async(name) => {

        const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=10116033881546f797d860b28f85ca63&number=9&query=${name}`
        );

        const recipes = await data.json();
        console.log(recipes.results);
        setSearchedRecipes(recipes.results);

    };

    useEffect(() => {
        getSearched(params.search)
    },[params.search]);



    return( <Grid>
        {searchedRecipes.map((eachCusine) => {
            return(
                <Card key={eachCusine.id}>
                    <Link to={'/recipe/' + eachCusine.id}>
                    <img src={eachCusine.image} alt="Error404" />
                    <h4>{eachCusine.title}</h4>
                    </Link>

                </Card>
            );
        })}
    </Grid>
  );
  
}


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;
const Card = styled.div`
img {
width: 100%;
border-radius: 2rem;
}
a {
text-decoration: none;
}
h4 {
text-align: center;
padding: 1rem;
}
`;

export default Searched;