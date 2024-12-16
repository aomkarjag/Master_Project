const personSchema = require("../models/active_person");
const most_active_business_schema=require("../models/active_business");
// Controller function to get all active fields
const getAllPersons = async (req, res) => {
  try {
    const reqBody=req.body;
    // Fetch all persons from the database
    const persons = await personSchema.find().sort({_id:1}).limit(reqBody.limit);
    // Send the response with the list of persons
    res.status(200).json({
      success: true,
      count: persons.length,
      data: persons
    });
  } catch (err) {
    // Handle any errors
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

const getAllBusiness=async (req, res)=>{
  try {
    const limit=req.query.limit;
    // Fetch all companies from the database
    const companies = await most_active_business_schema.find().sort({_id:1}).limit(limit);
    // Send the response with the list of companies
    res.status(200).json({
      success: true,
      count: companies.length,
      data: companies
    });
  } catch (err) {
    // Handle any errors
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
}

module.exports = {
    getAllPersons,
    getAllBusiness
};
