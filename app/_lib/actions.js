"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  deleteBooking,
  getBookings,
  updateGuest as updateDataGuest,
  updateBooking as updateDataBooking,
  createBooking as createDataBooking,
} from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    return { error: "Please provide a valid national ID" };

  const updateData = { nationalID, nationality, countryFlag };
  await updateDataGuest(session.user.guestId, updateData);

  revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    hasBreakfast: false,
    isPaid: false,
    status: "unconfirmed",
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  await createDataBooking(newBooking);
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestIds = guestBookings.map((booking) => booking.id);

  if (!guestIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  // building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // mutation
  await updateDataBooking(bookingId, updateData);

  // revalidation
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // redirecting
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);

  const guestIds = guestBookings.map((booking) => booking.id);

  if (!guestIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  await deleteBooking(bookingId);

  revalidatePath("/account/reservations");
}
