import User from '../models/User.js';

const viewAllUsers = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied.' });
    }

    const users = await User.find();

    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const modifyUserDetails = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied.' });
    }
    const { userEmail } = req.params;
    const updatedFields = req.body;
    const user = await User.findOneAndUpdate({ email: userEmail }, updatedFields, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ message: 'User details updated successfully.', user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUserDetails = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied.' });
    }
    const { userEmail } = req.params;
   
    const user = await User.findOneAndDelete({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ message: 'User account deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { viewAllUsers, modifyUserDetails, deleteUserDetails };
