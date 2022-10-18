import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useSelector } from "react-redux";
import { filterSelector, usersFilter, usersSelector } from "../redux/selector";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

// {
//     "OrderID": 23,
//     "CustomerName": "Kalina Soppett",
//     "TotalAmount": 23,
//     "OrderItems": "Stainless Steel Cleaner Vision",
//     "Location": "Boyuibe",
//     "Status": "Cefdinir",
//     "StatusBgtus": "Advanced Hand Sanitizer",
//     "ProductImage": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy"
// }

export default function MyRadioGroup() {
  const [selected, setSelected] = useState(plans[0]);

  const usersOrder = useSelector(usersFilter);

  return (
    <div className="w-full px-4 py-16 z-0 mt-12">
      <div className="max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {usersOrder.map((plan: any) => (
              <RadioGroup.Option
                key={plan.OrderID}
                value={plan.OrderID}
                className={({ active, checked }) =>
                  `${
                    checked
                      ? "bg-indigo-500 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.CustomerName}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>
                              {plan.OrderItems}/{plan.Location}
                            </span>{" "}
                            <span aria-hidden="true">&middot;</span>{" "}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6 ml-4" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
