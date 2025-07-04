import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import AuthContexHook from '../../Hooks/AuthContexHook';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Eye, Trash2, CreditCard } from 'lucide-react'; // Optional icons

const MyParcels = () => {
  const { user } = AuthContexHook();
  const axiosSecure = UseAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    }
  });

  const handleView = (id) => {
    console.log("View parcel", id);
  };

  const handlePay = (id) => {
    console.log("Proceed to payment for", id);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/parcels/${id}`);
        if (res.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Parcel has been deleted.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          refetch();
        }
      } catch (err) {
        Swal.fire("Error", err.message || "Failed to delete parcel", "error");
      }
    }
  };

  const formatDate = (iso) => {
    return new Date(iso).toLocaleString();
  };

  return (
    <div className="overflow-x-auto p-4 rounded-xl shadow-md border border-gray-200 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
        📦 My Parcels
      </h2>

      <table className="table w-full text-sm table-zebra">
        <thead className="bg-blue-50 text-gray-800 font-semibold text-base">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.length > 0 ? (
            parcels.map((parcel, index) => (
              <tr key={parcel._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td className="max-w-[180px] truncate">{parcel.title}</td>
                <td className="capitalize">{parcel.type}</td>
                <td>{formatDate(parcel.creation_date)}</td>
                <td>৳{parcel.cost}</td>
                <td>
                  <span
                    className={`badge px-3 py-1 rounded-full text-xs font-medium ${parcel.payment_status === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {parcel.payment_status}
                  </span>
                </td>
                <td className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleView(parcel._id)}
                    className="btn btn-xs border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition"
                  >
                    <Eye size={14} className="mr-1" /> View
                  </button>

                  {parcel.payment_status === "unpaid" && (
                    <button
                      onClick={() => handlePay(parcel._id)}
                      className="btn btn-xs bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:opacity-90 transition"
                    >
                      <CreditCard size={14} className="mr-1" /> Pay
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-xs bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    <Trash2 size={14} className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                <div className="text-center py-8 text-gray-500">
                  No parcels found.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;
