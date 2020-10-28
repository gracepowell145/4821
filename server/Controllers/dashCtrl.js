// I need to build my dashboard functions here. that connect
// to my db and axios front end. I don't need bcrypt. 

module.exports = {
    dailySchedule: async(req,res) => {
        const {daily_schedule} = req.body,
            db=req.app.get('db');
            console.log(req.body)
        
    }
}