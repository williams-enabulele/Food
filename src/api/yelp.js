import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer bcOb-45GHVfDg4snPqTBkkInue7pdppm0_m38-E3erEVPSb8n_H_Ja1v79ottIh3CAG3m5_3rKfLa6b75nPH3c1QF2wrYHWV1qnP0lolwgIazzXs63kXWRETfQkqYnYx'
    }
});