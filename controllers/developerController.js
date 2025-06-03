import getDeveloper from "../models/getDeveloper.js";

export default async function developerController(req, res) {
  const developerName = req.params.developer;
  console.log(developerName);
  const developerDetails = await getDeveloper(developerName);

  res.render("developer", { developerDetails, developerName });
}
