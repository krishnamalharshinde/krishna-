import express, { Request, Response } from 'express';
import { Business } from '../models/Business';
import { protect, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Create business
router.post('/', protect, async (req: AuthRequest, res: Response) => {
  const { name, gstin, pan, address, businessType } = req.body;

  try {
    const business = await Business.create({
      user: req.user!._id,
      name,
      gstin,
      pan,
      address,
      businessType
    });
    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get businesses
router.get('/', protect, async (req: AuthRequest, res: Response) => {
  try {
    const businesses = await Business.find({ user: req.user!._id });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;