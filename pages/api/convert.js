import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.query.convertFrom);
    const options = {
      method: "GET",
      url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
      params: {
        from: `${req.query.convertFrom}`,
        to: `${req.query.convertTo}`,
        amount: `${req.query.amount}`,
      },
      headers: {
        "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
        "x-rapidapi-key": 'e49945ee52mshb68de312f5e3beep196d3ajsn52789b01dd60',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
