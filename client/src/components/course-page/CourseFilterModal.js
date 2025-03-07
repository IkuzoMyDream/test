// CourseFilterModal.js
import React from "react";

function CourseFilterModal({ show, onClose, filters, onFilterChange }) {
  return (
    <div
      className={`${
        show ? "fixed" : "hidden"
      } z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={`${
            show ? "fixed" : "hidden"
          } inset-0 transition-opacity`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`${
            show ? "inline-block" : "hidden"
          } align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  ตัวกรอง
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="Enrolled"
                      name="Enrolled"
                      className="mr-2"
                      checked={filters.Enrolled}
                      onChange={onFilterChange}
                    />
                    <label htmlFor="Enrolled">วิชาที่ลงทะเบียนแล้ว</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isnotEnrolled"
                      name="isnotEnrolled"
                      className="mr-2"
                      checked={filters.isnotEnrolled}
                      onChange={onFilterChange}
                    />
                    <label htmlFor="isnotEnrolled">วิชาที่ยังไม่ลงทะเบียน</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFilterModal;
