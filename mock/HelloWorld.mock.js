export default {
    ["GET /user"](req, res) {
        console.log(req.body, req.query, req.params);
        res.statue(200).json([
            { id: 1, name: "John" },
            { id: 2, name: "John" },
        ]);
    },
};
