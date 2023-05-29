import axios from "axios";
import {React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { makeStyles } from "@material-ui/core";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

     setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin()
  }, []);

  const useStyles = makeStyles(() => ({}));

  const classes = useStyles();

  return (
    <div className={classes.container}>


    </div>
  )
  
};

export default CoinPage
