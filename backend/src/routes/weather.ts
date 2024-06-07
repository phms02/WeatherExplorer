//* Dependencies imports...
import express from "express";

//* Controllers imports...
import weatherController from "../controllers/weatherController";

const router = express.Router();
router.get("/:countryCode", weatherController.getWeatherByCountryCode);

export default router;