"use client";
import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { revalidatePath } from "next/cache";

function UpdateProfileForm({ children, guest }) {
  const [form, setForm] = useState();
  const [error, setError] = useState(null);

  const { fullName, email, countryFlag, nationalID, nationality } = guest;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await updateGuest(formData);
    if (result?.error) setError(result?.error);
    else window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name="fullName"
          defaultValue={fullName}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingText="Updating...">Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
