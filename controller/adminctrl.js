import UserModel from '../models/user.js';

export const approveUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.status = 'approved';
      await user.save();
  
      res.status(200).json({ message: 'User approved successfully' });
    } catch (error) {
      console.error('Error approving user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  export const blockUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.status = 'blocked';
      await user.save();
  
      res.status(200).json({ message: 'User blocked successfully' });
    } catch (error) {
      console.error('Error blocking user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };