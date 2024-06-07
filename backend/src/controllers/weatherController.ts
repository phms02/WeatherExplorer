//* Methods imports...
import { Request, Response } from "express";

//* Services imports...
import weatherService from "../services/weatherService";

const getWeatherByCountryCode = async (req: Request, res: Response): Promise<void> => {
  try {
    const countryCode = req.params.countryCode;
    const weatherData = await weatherService.getWeatherByCountryCode(countryCode);

    res.json(weatherData);
  } catch(err: unknown) {
    if(err instanceof Error)
      res.status(500).json({ error: err.message });
    else
      res.status(500).json({ error: "An unknown error occurred!" });
  }
};

export default { getWeatherByCountryCode };