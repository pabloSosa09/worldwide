const { Activity } = require ("../db");


const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season } = req.body;
    

    if (!name || !difficulty || !season ||!duration)
      throw Error("missing data to add activity");

    
    const newActivity = await Activity.create({
      name,
      difficulty,
      season,
      duration,
    });

    // await newActivity.addCountries(countryId);

    return res.status(200).json(newActivity);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = postActivity;