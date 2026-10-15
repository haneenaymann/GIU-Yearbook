/*
FILE: src/app/models/staff.model.ts
WHAT: Describes the data for one staff member.
WHY: Lets StaffService use the staff JSON data with type checking.
*/
export interface StaffMember {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  quote: string;
  photo: string;
  featured: boolean;
}