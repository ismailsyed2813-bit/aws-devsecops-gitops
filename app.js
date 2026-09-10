const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("DevSecOps GitOps Application Running Successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "devsecops-gitops-app"
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});