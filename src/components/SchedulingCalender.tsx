"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Globe, ArrowLeft } from "lucide-react";

const SchedulingCalender = () => {
  const [step, setStep] = useState<"date" | "time" | "details">("date");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 14));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState(() => {
    // Automatically detect user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = -new Date().getTimezoneOffset() / 60;
    const sign = offset >= 0 ? "+" : "";
    return `GMT${sign}${offset}:00 ${userTimezone}`;
  });
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  useEffect(() => {
    console.log("timezone", selectedTimezone);
  });

  // Utility functions
  const isWeekend = (day: number) => {
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dayOfWeek = checkDate.getDay(); // 0 = Sunday, 6 = Saturday
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  const handleNextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );

  const isPastDate = (day: number) => {
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const handleDateSelect = (day: number) => {
    if (!isPastDate(day)) {
      setSelectedDate(day);
      setSelectedTime(null);
      setStep("time");
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleBackStep = () => {
    if (step === "time") {
      setStep("date");
      setSelectedDate(null);
    } else if (step === "details") {
      setStep("time");
    }
  };

  const handleScheduleCall = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const selectedDateObj = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        selectedDate ?? undefined
      );
      const formattedDate = selectedDateObj.toLocaleDateString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const bookingData = {
        date: selectedDateObj,
        time: selectedTime,
        timezone: selectedTimezone,
        formattedDate,
        lead: { ...formData },
      };
      // console.log(bookingData);
      const response = await fetch("/api/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        alert(
          `Call scheduled for ${formattedDate} at ${selectedTime}! Confirmation email sent.`
        );
        setStep("date");
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          additionalInfo: "",
        });
      } else {
        throw new Error(result.error || "Failed to schedule call");
      }
    } catch (error) {
      console.error("[v0] Error scheduling call:", error);
      alert("Failed to schedule call. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Calendar setup
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const timeSlots = [
    "8:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const timezones = [
    "GMT-12:00 Pacific/Kwajalein",
    "GMT-11:00 Pacific/Midway",
    "GMT-11:00 Pacific/Pago_Pago",
    "GMT-10:00 Pacific/Honolulu",
    "GMT-9:30 Pacific/Marquesas",
    "GMT-9:00 America/Anchorage",
    "GMT-9:00 America/Juneau",
    "GMT-8:00 America/Los_Angeles",
    "GMT-8:00 America/Vancouver",
    "GMT-8:00 America/Tijuana",
    "GMT-7:00 America/Denver",
    "GMT-7:00 America/Phoenix",
    "GMT-7:00 America/Chihuahua",
    "GMT-6:00 America/Chicago",
    "GMT-6:00 America/Mexico_City",
    "GMT-6:00 America/Guatemala",
    "GMT-5:00 America/New_York",
    "GMT-5:00 America/Toronto",
    "GMT-5:00 America/Bogota",
    "GMT-5:00 America/Lima",
    "GMT-4:30 America/Caracas",
    "GMT-4:00 America/Santiago",
    "GMT-4:00 America/Halifax",
    "GMT-4:00 America/La_Paz",
    "GMT-3:30 America/St_Johns",
    "GMT-3:00 America/Sao_Paulo",
    "GMT-3:00 America/Argentina/Buenos_Aires",
    "GMT-3:00 America/Montevideo",
    "GMT-2:00 Atlantic/South_Georgia",
    "GMT-1:00 Atlantic/Azores",
    "GMT-1:00 Atlantic/Cape_Verde",
    "GMT+0:00 Europe/London",
    "GMT+0:00 Africa/Casablanca",
    "GMT+0:00 Atlantic/Reykjavik",
    "GMT+1:00 Europe/Berlin",
    "GMT+1:00 Europe/Paris",
    "GMT+1:00 Europe/Rome",
    "GMT+1:00 Europe/Madrid",
    "GMT+1:00 Africa/Lagos",
    "GMT+1:00 Europe/Amsterdam",
    "GMT+2:00 Europe/Helsinki",
    "GMT+2:00 Europe/Athens",
    "GMT+2:00 Africa/Cairo",
    "GMT+2:00 Africa/Johannesburg",
    "GMT+2:00 Asia/Jerusalem",
    "GMT+2:00 Europe/Istanbul",
    "GMT+3:00 Europe/Moscow",
    "GMT+3:00 Asia/Baghdad",
    "GMT+3:00 Africa/Nairobi",
    "GMT+3:00 Asia/Riyadh",
    "GMT+3:30 Asia/Tehran",
    "GMT+4:00 Asia/Dubai",
    "GMT+4:00 Asia/Baku",
    "GMT+4:00 Asia/Muscat",
    "GMT+4:30 Asia/Kabul",
    "GMT+5:00 Asia/Karachi",
    "GMT+5:00 Asia/Tashkent",
    "GMT+5:30 Asia/Kolkata",
    "GMT+5:30 Asia/Colombo",
    "GMT+5:45 Asia/Kathmandu",
    "GMT+6:00 Asia/Dhaka",
    "GMT+6:00 Asia/Almaty",
    "GMT+6:30 Asia/Yangon",
    "GMT+7:00 Asia/Bangkok",
    "GMT+7:00 Asia/Jakarta",
    "GMT+7:00 Asia/Ho_Chi_Minh",
    "GMT+7:00 Asia/Hanoi",
    "GMT+8:00 Asia/Singapore",
    "GMT+8:00 Asia/Hong_Kong",
    "GMT+8:00 Asia/Shanghai",
    "GMT+8:00 Asia/Taipei",
    "GMT+8:00 Asia/Manila",
    "GMT+8:00 Australia/Perth",
    "GMT+8:30 Asia/Pyongyang",
    "GMT+9:00 Asia/Tokyo",
    "GMT+9:00 Asia/Seoul",
    "GMT+9:30 Australia/Adelaide",
    "GMT+9:30 Australia/Darwin",
    "GMT+10:00 Australia/Sydney",
    "GMT+10:00 Australia/Melbourne",
    "GMT+10:00 Australia/Brisbane",
    "GMT+10:00 Pacific/Guam",
    "GMT+10:30 Australia/Lord_Howe",
    "GMT+11:00 Pacific/Guadalcanal",
    "GMT+11:00 Pacific/Noumea",
    "GMT+12:00 Pacific/Auckland",
    "GMT+12:00 Pacific/Fiji",
    "GMT+12:45 Pacific/Chatham",
    "GMT+13:00 Pacific/Tongatapu",
    "GMT+13:00 Pacific/Apia",
    "GMT+14:00 Pacific/Kiritimati",
  ];

  return (
    <div
      className="calenderContainer relative overflow-hidden"
      id="calendar-section"
    >
      {/* DATE SELECTION */}
      {step === "date" && (
        <div
          className="w-[372px] md:w-[561px] min-h-[457px] md:h-[731px] border-2 border-border rounded-lg px-6 backdrop-blur"
          style={{ backgroundColor: "#FFD70021" }}
        >
          <div className="w-full max-w-[372px] flex items-center justify-between m-3 md:m-15">
            <div className="flex flex-col gap-2 z-10">
              <h3 className="text-xl font-bold text-white">
                {currentDate.toLocaleString("default", { month: "long" })}
              </h3>
              <p className="text-sm text-gray-400">
                {currentDate.getFullYear()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-yellow-500/20 rounded transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-1 hover:bg-yellow-500/20 rounded transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="text-center text-[24px] font-medium text-white"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {days.map((day, idx) => {
              const isDisabled =
                day === null || isPastDate(day) || isWeekend(day);
              return (
                <button
                  key={idx}
                  onClick={() => day && handleDateSelect(day)}
                  className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                    isDisabled
                      ? "text-gray-600 cursor-not-allowed"
                      : day === selectedDate
                      ? "text-white font-bold"
                      : "text-gray-300 hover:bg-yellow-500/10 cursor-pointer"
                  }`}
                  style={
                    day === selectedDate ? { backgroundColor: "#FFD70021" } : {}
                  }
                  disabled={isDisabled}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="w-full flex items-center justify-start">
            <div className="flex items-center gap-4">
              <h2 className="text-white text-[14px] font-bold">
                Current Time zone
              </h2>
              <p className="text-white text-[10px] font-medium">
                {selectedTimezone}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TIME SELECTION */}
      {step === "time" && (
        <div className="max-w-2xl mx-auto bg-[#FFD70021] border-2 border-border rounded-lg p-6 backdrop-blur">
          <button
            onClick={handleBackStep}
            className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>

          <div className=" rounded-2xl p-8">
            <h2 className="text-white text-3xl font-bold text-center mb-2">
              {selectedDate !== null &&
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  selectedDate
                ).toLocaleDateString("default", { weekday: "long" })}
            </h2>
            <p className="text-purple-200 text-center mb-8">
              {selectedDate !== null &&
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  selectedDate
                ).toLocaleDateString("default", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </p>

            <div className="mb-8">
              <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" /> Time zone
              </label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#FFD70021] text-white border border-border focus:outline-none"
              >
                {timezones.map((tz) => (
                  <option key={tz} value={tz} className="bg-white text-black">
                    {tz}{" "}
                  </option>
                ))}
              </select>
            </div>

            <h3 className="text-white text-xl font-bold text-center mb-2">
              Choose Time Slot
            </h3>
            <p className="text-purple-200 text-center mb-6">
              Duration : 10 Mins
            </p>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`w-full py-4 px-6 rounded-lg border-2 font-semibold text-lg transition-all duration-200 ${
                    selectedTime === time
                      ? "bg-[#FFD70021] border-white text-white"
                      : "bg-[#FFD70021] border-border text-white hover:border-yellow-500"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DETAILS FORM */}
      {step === "details" && (
        <div className="max-w-2xl mx-auto  backdrop-blur">
          <button
            onClick={handleBackStep}
            className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>

          <div className="bg-[#FFD70021] border-2 border-border rounded-2xl p-8">
            <h2 className="text-white text-3xl font-bold mb-2">Discovery</h2>

            <form onSubmit={handleScheduleCall} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#FFD70021] text-white border border-purple-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#FFD70021] text-white border border-purple-500/50 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#FFD70021] text-white border border-purple-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#FFD70021] text-white border border-purple-500/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Additional Info
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalInfo: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#FFD70021] text-white border border-purple-500/50 focus:outline-none resize-none"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 rounded-lg transition-all duration-200"
              >
                {isLoading ? "Scheduling..." : "Schedule Meeting"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulingCalender;
