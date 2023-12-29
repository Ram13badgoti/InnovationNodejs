const isAdmin = (req, res, next) => {
    const userRole = req.user.role;
  
    if (userRole !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden. Admin access required.' });
    }
  
    next();
  };
  
export default isAdmin ;
  