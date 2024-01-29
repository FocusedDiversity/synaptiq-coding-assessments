"use client";

import { useRef, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { CalendarDaysIcon, CheckIcon } from "@heroicons/react/16/solid";

const DATES = [
  "No Date",
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days",
  "Last Month",
];

const kebabCase = (str: string) =>
  str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");

const DateList = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(DATES[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <button
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex gap-2"
        data-testid="date-button"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        <CalendarDaysIcon
          className="-ml-0.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        {selectedDate}
      </button>
      <Transition
        show={isPopoverOpen}
        enter="transition-[opacity,transform] duration-150"
        enterFrom="opacity-0 scale-95 -translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition-[opacity,transform] duration-150"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-2"
      >
        <div className="rounded-md border p-2 mt-2">
          {DATES.map((date) => (
            <div
              key={date}
              className={clsx(
                selectedDate === date && "bg-gray-300",
                "px-1.5 py-1 rounded-md cursor-pointer flex justify-between items-center"
              )}
              data-testid={`date-item-${kebabCase(date)}`}
              onClick={() => {
                setSelectedDate(date);
                setIsPopoverOpen(false);
              }}
            >
              {date}
              {selectedDate === date && (
                <CheckIcon className="ml-2 h-5 w-5 text-gray-900" />
              )}
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default DateList;
