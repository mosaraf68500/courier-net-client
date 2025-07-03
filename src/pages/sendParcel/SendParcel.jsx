import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SendParcel = () => {
  const [parcelType, setParcelType] = useState("Document");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const watchWeight = watch("weight");

  const calculateCost = (type, center, weight) => {
    const base = type === "Document" ? 50 : 80;
    const weightCost = type === "Non-Document" ? parseInt(weight || 0) * 10 : 0;
    const centerFee = center === "Remote" ? 30 : 20;
    return base + weightCost + centerFee;
  };

  const onSubmit = (data) => {
    const cost = calculateCost(parcelType, data.receiverCenter, data.weight);
    console.log(cost)

    toast((t) => (
      <span className="flex flex-col gap-2">
        <span>Delivery Cost: {cost}৳</span>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const parcel = {
                ...data,
                type: parcelType,
                cost,
                creation_date: new Date().toISOString(),
              };
              console.log("Parcel saved: ", parcel);
              toast.dismiss(t.id);
              toast.success("Parcel added!");
              reset(); 
            }}
            className="bg-green-500 px-3 py-1 text-white rounded"
          >
            Confirm
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-red-500 px-3 py-1 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </span>
    ));
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg my-10">
        <h1 className="text-3xl font-bold mb-4">Add Parcel</h1>
        <p className="mb-6 font-medium">Enter your parcel details</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Parcel Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Parcel Info</h2>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Document"
                  checked={parcelType === "Document"}
                  onChange={() => setParcelType("Document")}
                />
                Document
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Non-Document"
                  checked={parcelType === "Non-Document"}
                  onChange={() => setParcelType("Non-Document")}
                />
                Non-Document
              </label>
            </div>

            <input
              type="text"
              placeholder="Parcel Title"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />

            {parcelType === "Non-Document" && (
              <input
                type="number"
                placeholder="Weight (kg)"
                {...register("weight")}
                className="input input-bordered w-full"
              />
            )}
          </div>

          {/* Sender & Receiver Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sender Details */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Sender Details</h2>
              <input
                type="text"
                defaultValue="Md. Mosaraf Hossen"
                readOnly
                className="input input-bordered w-full mb-3"
                {...register("senderName")}
              />
              <input
                type="text"
                placeholder="Sender Contact"
                {...register("senderContact", { required: true })}
                className="input input-bordered w-full mb-3"
              />
              <select
                {...register("senderRegion", { required: true })}
                className="input input-bordered w-full mb-3"
              >
                <option value="">Select Region</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Barisal">Barisal</option>
              </select>
              <select
                {...register("senderCenter", { required: true })}
                className="input input-bordered w-full mb-3"
              >
                <option value="">Select Service Center</option>
                <option value="Main">Main</option>
                <option value="Remote">Remote</option>
              </select>
              <textarea
                placeholder="Sender Address"
                {...register("senderAddress", { required: true })}
                className="textarea textarea-bordered w-full mb-3"
              />
              <textarea
                placeholder="Pickup Instruction"
                {...register("pickupInstruction", { required: true })}
                className="textarea textarea-bordered w-full"
              />
            </div>

            {/* Receiver Details */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Receiver Details</h2>
              <input
                type="text"
                placeholder="Receiver Name"
                {...register("receiverName", { required: true })}
                className="input input-bordered w-full mb-3"
              />
              <input
                type="text"
                placeholder="Receiver Contact"
                {...register("receiverContact", { required: true })}
                className="input input-bordered w-full mb-3"
              />
              <select
                {...register("receiverRegion", { required: true })}
                className="input input-bordered w-full mb-3"
              >
                <option value="">Select Region</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Barisal">Barisal</option>
              </select>
              <select
                {...register("receiverCenter", { required: true })}
                className="input input-bordered w-full mb-3"
              >
                <option value="">Select Service Center</option>
                <option value="Main">Main</option>
                <option value="Remote">Remote</option>
              </select>
              <textarea
                placeholder="Receiver Address"
                {...register("receiverAddress", { required: true })}
                className="textarea textarea-bordered w-full mb-3"
              />
              <textarea
                placeholder="Delivery Instruction"
                {...register("deliveryInstruction", { required: true })}
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 px-6 py-2 text-white rounded"
          >
            Submit Parcel
          </button>

          
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
