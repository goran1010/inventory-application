import modifyDeveloper from "../models/modifyDeveloper.js";

export default async function modifyDeveloperController(req, res) {
  const { developer } = req.params;
  const { name, based_in, employees } = req.body;
  await modifyDeveloper(name, based_in, employees, developer);
  res.redirect(`/${name}`);
}
