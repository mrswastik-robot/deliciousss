import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cusines() {
  const [cusine, setCusine] = useState([]);
  let params = useParams();

  const getCusine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=10116033881546f797d860b28f85ca63&number=9&cuisine=${name}`
    );

    const recipes = await data.json();
    console.log(recipes.results);
    setCusine(recipes.results);
  };

  useEffect(() => {
    getCusine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {cusine.map((eachCusine) => {
        return (
          <Card key={eachCusine.id}>
            <Link to={"/recipe/" + eachCusine.id}>
              <img src={eachCusine.image} alt="Error404" />
              <h4>{eachCusine.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
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

export default Cusines;
