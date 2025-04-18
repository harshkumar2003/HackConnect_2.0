import userModel from "../models/userModel.js";

const userUpdate = async(req,res) =>
{
    try{
        const {bio,skills,github,linkedin,portfolio,hackathons} = req.body;
        const userId = req.user.id; // Get user ID from the JWT token (authMiddleware)

        // find user by userID
        const user = await userModel.findById(userId);
        if(!user)
        {
            return res.json({
                success : false,
                message: "user not found"
            });
        }
        if(bio)
        {
            user.bio = bio;
        }
        if(skills)
        {
            user.skills = skills;
        }
        if(github)
        {
            user.github = github;
        }
        if(linkedin)
        {
            user.linkedin = linkedin;
        }
        if(portfolio)
        {
            user.portfolio = portfolio;
        }
        if(hackathons)
        {
            
            const exist_hackacthons = user.hackathons.find(h=>h.name === hackathons.name);
            if(exist_hackacthons)
            {
                exist_hackacthons.role = hackathons.role;
                exist_hackacthons.year = hackathons.year;
            }
            else
            {
                user.hackathons.push(hackathons);
            }

        }


        const updatedUser = await user.save();
        res.json({
            success: true,
            message: "Profile updated successfully",
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                username: updatedUser.username,
                email: updatedUser.email,
                bio: updatedUser.bio,
                skills: updatedUser.skills,
                github: updatedUser.github,
                linkedin: updatedUser.linkedin,
                portfolio: updatedUser.portfolio,
                hackathons: updatedUser.hackathons,

            },
        });

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
export default userUpdate;