import Student from "../Models/Studentlist.js";

const getData2 = async(req, res)=>{
    try {
      // data.map(async (item)=>{
        // await Student.create({Name:item.name,Rollno:item.rollNo})
      // })
       const {selected} = req.body;
        const response = await Student.find({Rollno:{$in: selected}});
        res.status(200).json({
            response,
            success: true,
            message: "data fetched Successfully",
          });
    } catch (error) {
        console.log("ERROR: While fetching data", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
    }
}
export default getData2;