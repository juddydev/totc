import React from 'react'
import { FaFileInvoice, FaUsers } from 'react-icons/fa'
import { FaRegCalendarDays } from 'react-icons/fa6'

const OverviewContainer = () => {
  return (
    <>
      <div className="container mt-[10rem]">
        <div className="flex justify-center items-center flex-col mb-[4rem]">
          <p className="text-[2.3rem] text-[#2F327D] font-bold mb-5">
           All-In-One  <span className="text-[#00CBB8]">Cloud Software.</span>
          </p>
          <p className="text-[1.5rem] text-[#696984] lg:w-[60rem] font-light text-center">
            TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-[3rem]">
            <div className="col-span-6 md:col-span-2 ">
                <div className="flex flex-col items-center justify-center p-6 shadow-2xl h-[27rem] mb-5">
                  <div className="relative p-5 bg-[#5B72EE] rounded-full -top-[6rem]">
                    <FaFileInvoice className="text-white" size={50} />
                  </div>
                  <p className="text-[1.9rem] text-[#2F327D] text-center font-bold mb-5">
                    Online Billing, Invoicing, & Contracts
                  </p>
                  <p className="text-[1.3rem] text-[#696984] font-light text-center">
                    Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                  </p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-2">
                <div className="flex flex-col items-center justify-center p-6 shadow-2xl h-[27rem] mb-5">
                  <div className="relative p-5 bg-[#00CBB8] rounded-full -top-[6rem]">
                    <FaRegCalendarDays className="text-white" size={50} />
                  </div>
                  <p className="text-[1.9rem] text-[#2F327D] text-center font-bold mb-5">
                    Easy Scheduling & Attendance Tracking
                  </p>
                  <p className="text-[1.3rem] text-[#696984] font-light text-center">
                    Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                  </p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-2">
                <div className="flex flex-col items-center justify-center p-6 shadow-2xl h-[27rem] mb-5">
                  <div className="relative p-5 bg-[#29B9E7] rounded-full -top-[8rem]">
                    <FaUsers className="text-white" size={50} />
                  </div>
                  <p className="text-[1.9rem] text-[#2F327D] text-center font-bold mb-5">
                    Customer Tracking
                  </p>
                  <p className="text-[1.3rem] text-[#696984] font-light text-center">
                    Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization 
                  </p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default OverviewContainer