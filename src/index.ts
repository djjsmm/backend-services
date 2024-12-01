import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

let data = {
  humidity: "",
  temperature: "",
  co2Ppm: "",
  co2Pwm: "",
};

app.get("/getMicroControllerDeviceState", (request, response) => {
  response.status(200).send(data);
});

app.post("/postMicroControllerDeviceState", (request, response) => {
  const { humidity, temperature, co2Ppm, co2Pwm } = request.body;

  data = {
    humidity,
    temperature,
    co2Ppm,
    co2Pwm,
  };

  response.status(200).send("OK")
});

app.listen(5173, () => {
  console.log("Server is running on port 5173");
});

export default app;