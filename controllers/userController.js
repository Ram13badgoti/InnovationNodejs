// userController.js
import User from '../models/User.js';

const updateUser = async (req, res) => {
  try {
    const { email, role } = req.user;
    const { userEmail } = req.params;
    const updatedFields = req.body;

    if (role === 'Admin' || email === userEmail) {
      const user = await User.findOneAndUpdate({ email: userEmail }, updatedFields, {
        new: true,
        runValidators: true,
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }


      res.json({ message: 'User details updated successfully.', user });
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email, role } = req.user;
    const { userEmail } = req.params;

    if (role === 'Admin' || email === userEmail) {
      const user = await User.findOneAndDelete({ email: userEmail });

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      res.json({ message: 'User account deleted successfully.' });
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { updateUser, deleteUser };
