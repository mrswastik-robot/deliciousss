import React from 'react';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
// import Category from '../components/Category';
import {motion} from 'framer-motion';


const Home = () => {
  return (
    <motion.div

    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    
    >
        {/* <Category/>      ise home se hatana pada kyunki jab pages me routes ka use kr rhe to usme route k andar home bhi aara to jabbhi kisi nye page pr jaoge to agar navbar home k andar hi hua to navbar to har nye page pr hatt jayega , to phir category ko import kr liya app.js me   */}
        <Popular/>
        <Veggie/>
    </motion.div>
  )
}

export default Home;