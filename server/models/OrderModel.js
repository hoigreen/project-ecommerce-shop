const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

// Định nghĩa Schema cho object trong mảng
const listProductSchema = new mongoose.Schema({
  imageLink: {
    type: String,
    default: '',
    required: true,
  },
  productName: {
    type: String,
    default: '',
    required: true,
  },
  option: {
    type: String,
    default: '',
    required: true,
  },
  color: {
    type: String,
    default: '',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  voted: {
    type: Boolean,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    owner: { type: schema.Types.ObjectId, ref: 'Customer' },
    fullname: {
      type: String,
      default: '',
      required: true,
    },
    email: {
      type: String,
      default: '',
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: '',
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '0',
      required: true,
    },
    giftcodeApply: {
      type: String,
      default: '0',
      required: true,
    },
    status: {
      type: String,
      default: '',
      required: true,
    },
    lists: [listProductSchema],
  },
  {
    timestamps: true,
  },
);

OrderSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

const OrderModel =
  mongoose.models.OrderModel || mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
