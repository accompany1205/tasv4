# Tutors Backend Specifications

## Authentication
- **Google or Email Login:** Tutors can log in using a Google account or an email address. Account creation is reserved for administrators.
- **Account Activation:** Upon account setup by an admin, tutors receive an email to set a personal password for their TAS account.

## Security
- **Server-Side Firebase Calls:** Ensure all interactions with Firebase are handled server-side to prevent unauthorized access or manipulation of tutor information.

## Development Guidelines

### Local Development
- **Component and Function Implementation:** Implement all functions and components within the specified directory: `lib/components/tutors-backend/...`.

### Data Management
- **Use of Svelte Stores:** Utilize Svelte stores to manage state and reactivity efficiently. This minimizes direct calls to Firebase and ensures seamless UI updates without needing page refreshes.

### UI Reactivity and Notifications
- **Reactivity and User Feedback:** Ensure the UI is reactive and updates accordingly without page reloads. Notify users of changes or actions using toasts or similar notifications.
  
- **Consistent UI Template:** Utilize Flowbite for UI components to maintain a consistent look and feel.

## User Interface Tabs

### Leads Management
- **Lead Modification:** Tutors can edit all information related to leads.
- **Quick Access Controls:** Enable quick modification of lead "RESPONSE" and "STATUS" via dropdown menus, populated dynamically from the settings collection in Firebase.
- **Filtering and Sorting:** Include capabilities to filter and sort leads by various criteria (Response, Status, Name, Email, Number) without pagination.

### Invoicing (Future Consideration)
- **Invoice Generation:** Plan for integration with payment platforms like PayPal or Stripe for invoicing capabilities.
- **Invoice Management Interface:** Similar layout to leads, including a "Create Invoice" feature.

### Performance Statistics
- **Data Aggregation:** Display aggregated data on leads, invoices, sales, and tutor ratings. Implementation details to be defined later.

### Service Management
- **Media Integration:** Link service images to the Media tab for easy management.

### Media Library
- **Media Selection:** Adapt the media library interface to resemble the admin backend, with enhancements for selecting multiple items.
- **Bulk Media Selection:** Develop a component (`GetMedias.svelte`) for selecting multiple media items, improving upon the existing single-selection `GetMedia.svelte`.

### Tutor Profile
- **Profile Editing:** Allow tutors to update all personal information, except visibility settings.
- **Headshot Updates:** Utilize `GetMedia.svelte` for headshot selection.
- **Rate Modification Restrictions:** Limit rate changes to once every 24 hours.

### Settings and Preferences
- **User Preferences:** Include options for currency and time zone adjustments, language translation, and other settings as needed.