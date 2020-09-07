import * as bodyParser from "body-parser";
import * as express from "express";
import axios from 'axios';



class Comics {

    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get comic
        this.express.get("/comics/:comicNumber", (req, res, next) => {
           const comicNumber = Number(req.params.comicNumber)
            const url = `https://xkcd.com/${comicNumber}/info.0.json`;
            axios({
                method: 'get',
                url,
            })
                .then(function (response) {
                    res.json(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }
}

export default new Comics().express;