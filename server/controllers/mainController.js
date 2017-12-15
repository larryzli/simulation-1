module.exports = {
    getShelf: (req, res) => {
        const { id } = req.params;
        const shelfId = id[0];
        const binNum = id[1];
        req.app
            .get("db")
            .get_shelf_id([shelfId, binNum])
            .then(result => res.status(200).json(result))
            .catch(console.log);
    },

    getBin: (req, res) => {
        const { id } = req.params;
        const shelfId = id[0];
        const binNum = id[1];
        req.app
            .get("db")
            .get_bin_id([shelfId, binNum])
            .then(result => res.status(200).json(result))
            .catch(console.log);
    },

    updateBin: (req, res) => {
        const { id } = req.params;
        const shelfId = id[0];
        const binNum = id[1];
        const { name, price } = req.body;
        req.app
            .get("db")
            .update_bin([name, price, shelfId, binNum])
            .then(result => res.status(200).json(result))
            .catch(console.log);
    },

    deleteBin: (req, res) => {
        const { id } = req.params;
        const shelfId = id[0];
        const binNum = id[1];
        req.app
            .get("db")
            .delete_bin([shelfId, binNum])
            .then(result => res.status(200).json())
            .catch(console.log);
    },

    createBin: (req, res) => {
        const { id } = req.params;
        const shelfId = id[0];
        const binNum = id[1];
        const { name, price, imageurl } = req.body;
        req.app
            .get("db")
            .create_bin([name, price, imageurl, shelfId, binNum])
            .then(result => res.status(200).json(result))
            .catch(console.log);
    }
};
