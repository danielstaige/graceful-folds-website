

# Plan: Client Intake Form + Folder Application Modals

## Summary

Build two multi-step modal dialogs: a **"Get Started" client intake form** and an **"Apply to Be a Folder" application form**. Both open as popups, collect required info, and email submissions to you.

---

## 1. Get Started (Client Intake) Modal

**Location:** Contact page -- add a prominent "Get Started Today" button in the hero or contact options section.

**Flow:**
- **Step 1 (Prereqs screen):** Shows the list of requirements (heart to pray, enjoys laundry, extra-large washer/dryer, reliable transportation, smoke-free/pet-hair-free environment). User reads and clicks "Get Started" to proceed.
- **Step 2 (Form):** All fields required:
  - Name
  - Phone
  - Email
  - Address
  - Detergent preference: "We use Tide or Gain by default..." with a checkbox for Free & Clear
  - Family members: Names and sizes (text area, for sorting by size and praying by name)
  - Hanging preferences (text area)
  - Submit button
- **Step 3 (Confirmation popup):** "Thank you for scheduling with us! We're so glad you're here. Someone from our team will be in touch shortly to confirm your pickup day."

---

## 2. Apply to Be a Folder Modal

**Location:** The Fold page (replace current link to /contact) AND Contact page (add a second button).

**Flow:**
- **Step 1 (Application form):** All fields required:
  - Name
  - Phone
  - Email
  - Address
  - Availability: Day-of-week checkboxes (Sun-Sat)
  - Job Requirements narrative text (displayed, not editable) with the full faith-based requirements list
  - Checkbox: "Everything applies to me" (required to submit)
  - Submit Application button
- **Step 2 (Confirmation popup):** "Thank you for applying! We'll be in touch within 24-48 hours (Monday-Friday)."

---

## 3. Email Delivery

Since no database is connected, both forms will use a **Supabase Edge Function** to email submissions to your inbox. This requires:
- Setting up Lovable Cloud (if not already enabled)
- Creating a `send-form-submission` Edge Function that receives form data and emails it to your address
- We will need your email address to send submissions to

---

## Technical Details

### New files:
- `src/components/GetStartedModal.tsx` -- Multi-step dialog component for client intake
- `src/components/FolderApplicationModal.tsx` -- Multi-step dialog component for folder applications

### Modified files:
- `src/pages/Contact.tsx` -- Add "Get Started Today" and "Apply to Be a Folder" buttons that trigger modals
- `src/pages/TheFold.tsx` -- Change "Apply to Become a Folder" link to open the folder application modal instead of navigating to /contact

### Edge Function (for email):
- `supabase/functions/send-form-submission/index.ts` -- Receives form data + form type, sends formatted email to your inbox

Both modals will use the existing Dialog/Sheet UI components and match the site's gold/cream brand styling.

