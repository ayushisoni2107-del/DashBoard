import { useState } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DiscountPage() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#f5f8fb] min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold">Discount</h2>

        <div className="flex gap-3 items-center">

          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search here..."
              className="pl-9 pr-4 py-2 border border-gray-100 rounded-lg focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Create Discount
          </button>

        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-100 mb-4 text-sm">
        <Tab active text="All" />
        <Tab text="Active" />
        <Tab text="Scheduled" />
        <Tab text="Expired" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="border-b border-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Sr.</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Method</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Combinations</th>
              <th className="p-4 text-left">Used</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="text-gray-700">

                <td className="p-4">1</td>

                <td className="p-4">
                  <p className="font-medium">SHIPFREE</p>
                  <p className="text-xs text-gray-500">
                    Free Shipping on all products
                  </p>
                </td>

                <td className="p-4">
                  {i === 4 ? (
                    <Status text="Expired" color="red" />
                  ) : i === 3 ? (
                    <Status text="Scheduled" color="blue" />
                  ) : (
                    <Status text="Active" color="green" />
                  )}
                </td>

                <td className="p-4">Code</td>

                <td className="p-4">
                  <p className="font-medium">Shipping Discount</p>
                  <p className="text-xs text-gray-500">Free shipping</p>
                </td>

                <td className="p-4">
                  <p>Product Discount</p>
                  <p className="text-xs text-gray-500">Shipping Free</p>
                </td>

                <td className="p-4">0</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg">

            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-[#f3f6f9] rounded-t-xl">
              <h3 className="font-semibold text-gray-700">
                Select Discount Type
              </h3>

              <button onClick={() => setOpenModal(false)}>
                <X className="text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="divide-y divide-gray-100">

              <ModalItem
                title="Amount off Products"
                subtitle="Product discount"
                onClick={() => navigate("/amountproductpage")}
              />

              <ModalItem
                title="Amount off Order"
                subtitle="Order discount"
                onClick={() => navigate("/amountorderpage")}
              />

              <ModalItem
                title="Buy X Get Y"
                subtitle="Product discount"
                onClick={() => navigate("/buyxgetypage")}
              />

              <ModalItem
                title="Free Shipping"
                subtitle="Product discount"
                onClick={() => navigate("/freeshippage")}
              />

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

/* Components */

function Tab({ text, active }) {
  return (
    <button
      className={`pb-3 font-medium ${active
        ? "text-orange-500 border-b-2 border-orange-500"
        : "text-gray-500"
        }`}
    >
      {text}
    </button>
  );
}

function Status({ text, color }) {

  const styles = {
    green: "bg-green-50 text-green-600",
    red: "bg-red-50 text-red-500",
    blue: "bg-blue-50 text-blue-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-md text-xs font-medium ${styles[color]}`}
    >
      {text}
    </span>
  );
}

function ModalItem({ title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer"
    >

      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <ChevronRight className="text-gray-400" />

    </div>
  );
}
