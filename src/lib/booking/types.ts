/** Future server-side boundary. No registrations or payments are collected yet. */
export type RegistrationRequest = {
  tripSlug: string;
  departureDate: string;
  travelers: number;
  contact: { name: string; email: string };
};
export type RegistrationStatus = 'pending' | 'confirmed' | 'cancelled';
export type PaymentStatus = 'unpaid' | 'pending' | 'paid' | 'refunded';
