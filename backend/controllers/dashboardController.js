export const dashboard = (req, res) => {
    const user = req.user;

    // Example logic: Send a welcome message along with the user details
    res.json({
        success: true,
        message: `Welcome to your dashboard, ${user.name}`,
        userDetails: user
    });
};
