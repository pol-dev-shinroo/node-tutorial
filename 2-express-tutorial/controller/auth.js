const auth = (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  const { name } = req.body;
  if (name === "") {
    return res.status(400).send("please provide username");
  }
  res.status(200).send(`welcome ${name}`);
};

module.exports = { auth };
