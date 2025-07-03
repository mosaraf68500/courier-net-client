import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useLoaderData } from "react-router";

// import useAxiosSecure from "../../hooks/useAxiosSecure";
import AuthContexHook from "../../Hooks/AuthContexHook";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

// Generate tracking ID function
const generateTrackingID = () => {
    const date = new Date();
    const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
    const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `PCL-${datePart}-${rand}`;
};

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { user } = AuthContexHook();
    console.log(user)
    
    const axiosSecure = UseAxiosSecure()

    const serviceCenters = useLoaderData();
    // Extract unique regions
    const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
    // Get districts by region
    const getDistrictsByRegion = (region) =>
        serviceCenters.filter((w) => w.region === region).map((w) => w.district);

    const parcelType = watch("type");
    const senderRegion = watch("sender_region");
    const receiverRegion = watch("receiver_region");

    const onSubmit = (data) => {
        const weight = parseFloat(data.weight) || 0;
        const isSameDistrict = data.sender_center === data.receiver_center;

        let baseCost = 0;
        let extraCost = 0;
        let breakdown = "";

        if (data.type === "document") {
            baseCost = isSameDistrict ? 60 : 80;
            breakdown = `Document delivery ${isSameDistrict ? "within" : "outside"} the district.`;
        } else {
            if (weight <= 3) {
                baseCost = isSameDistrict ? 110 : 150;
                breakdown = `Non-document up to 3kg ${isSameDistrict ? "within" : "outside"} the district.`;
            } else {
                const extraKg = weight - 3;
                const perKgCharge = extraKg * 40;
                const districtExtra = isSameDistrict ? 0 : 40;
                baseCost = isSameDistrict ? 110 : 150;
                extraCost = perKgCharge + districtExtra;

                breakdown = `
        Non-document over 3kg ${isSameDistrict ? "within" : "outside"} the district.<br/>
        Extra charge: ৳40 x ${extraKg.toFixed(1)}kg = ৳${perKgCharge}<br/>
        ${districtExtra ? "+ ৳40 extra for outside district delivery" : ""}
      `;
            }
        }

        const totalCost = baseCost + extraCost;

        Swal.fire({
            title: "Delivery Cost Breakdown",
            icon: "info",
            html: `
      <div class="text-left text-base space-y-2">
        <p><strong>Parcel Type:</strong> ${data.type}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Delivery Zone:</strong> ${isSameDistrict ? "Within Same District" : "Outside District"}</p>
        <hr class="my-2"/>
        <p><strong>Base Cost:</strong> ৳${baseCost}</p>
        ${extraCost > 0 ? `<p><strong>Extra Charges:</strong> ৳${extraCost}</p>` : ""}
        <div class="text-gray-500 text-sm">${breakdown}</div>
        <hr class="my-2"/>
        <p class="text-xl font-bold text-green-600">Total Cost: ৳${totalCost}</p>
      </div>
    `,
            showDenyButton: true,
            confirmButtonText: "💳 Proceed to Payment",
            denyButtonText: "✏️ Continue Editing",
            confirmButtonColor: "#16a34a",
            denyButtonColor: "#d3d3d3",
            customClass: {
                popup: "rounded-xl shadow-md px-6 py-6",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const parcelData = {
                    ...data,
                    cost: totalCost,
                    created_by: user?.email,
                    payment_status: 'unpaid',
                    delivery_status: 'not_collected',
                    creation_date: new Date().toISOString(),
                    tracking_id: generateTrackingID(),
                };

                console.log("Ready for payment:", parcelData);

                axiosSecure.post('/parcels', parcelData)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            // TODO: redirect to a payment page 
                            Swal.fire({
                                title: "Redirecting...",
                                text: "Proceeding to payment gateway.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                    })

            }
        });
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow my-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800">Add Parcel</h2>
                <p className="text-lg font-medium">Enter your parcel details</p>

                {/* Parcel Type Selection */}
                <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="document"
                            {...register("type", { required: true })}
                            className="radio radio-success"
                        />
                        Document
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="non-document"
                            {...register("type", { required: true })}
                            className="radio radio-success"
                        />
                        Not-Document
                    </label>
                </div>

                {/* Parcel Name */}
                <input
                    {...register("title", { required: true })}
                    className="input input-bordered w-full"
                    placeholder="Parcel Name"
                />

                {/* Weight */}
                <input
                    type="number"
                    step="0.1"
                    {...register("weight")}
                    disabled={parcelType !== "non-document"}
                    className={`input input-bordered w-full ${parcelType !== "non-document" ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                    placeholder="Weight (kg)"
                />

                {/* Sender & Receiver Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Sender Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-xl">Sender Details</h3>
                        <input {...register("sender_name", { required: true })} className="input input-bordered w-full" placeholder="Name" />
                        <input {...register("sender_contact", { required: true })} className="input input-bordered w-full" placeholder="Contact" />
                        {/* <input {...register("sender_email")} className="input input-bordered w-full" placeholder="Email" /> */}
                        <select {...register("sender_region", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Region</option>
                            {uniqueRegions.map((region) => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                        <select {...register("sender_center", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Wire House</option>
                            {getDistrictsByRegion(senderRegion).map((district) => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                        <textarea {...register("pickup_instruction", { required: true })} className="textarea textarea-bordered w-full" placeholder="Pickup Instruction" />
                    </div>

                    {/* Receiver Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-xl">Receiver Details</h3>
                        <input {...register("receiver_name", { required: true })} className="input input-bordered w-full" placeholder="Name" />
                        <input {...register("receiver_contact", { required: true })} className="input input-bordered w-full" placeholder="Contact" />
                        {/* <input {...register("receiver_email")} className="input input-bordered w-full" placeholder="Email" /> */}
                        <select {...register("receiver_region", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Region</option>
                            {uniqueRegions.map((region) => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                        <select {...register("receiver_center", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Wire House</option>
                            {getDistrictsByRegion(receiverRegion).map((district) => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                        <textarea {...register("delivery_instruction", { required: true })} className="textarea textarea-bordered w-full" placeholder="Delivery Instruction" />
                    </div>
                </div>

                

                {/* Submit Button */}
                <button className="btn bg-lime-400 hover:bg-lime-500 text-black w-full">Continue</button>
            </form>
        </div>
    );
};

export default SendParcel;
