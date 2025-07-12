import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IBusiness extends Document {
  user: Types.ObjectId;
  name: string;
  gstin: string;
  pan: string;
  address: string;
  businessType: string;
}

const businessSchema = new Schema<IBusiness>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    gstin: { type: String, required: true, unique: true },
    pan: { type: String, required: true },
    address: { type: String, required: true },
    businessType: { type: String, required: true }
  },
  { timestamps: true }
);

export const Business = mongoose.model<IBusiness>('Business', businessSchema);