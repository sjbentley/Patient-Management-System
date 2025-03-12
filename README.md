### Patient Management System</h3>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

---

## 🤖 Introduction

A patient management application that allows patients to register, book, and manage appointments, while administrators can schedule, confirm, or cancel appointments. The system also features SMS notifications via Twilio, secure file storage using Appwrite, and performance monitoring with Sentry.

---

## ⚙️ Tech Stack

- **Next.js**
- **Appwrite**
- **TypeScript**
- **TailwindCSS**
- **ShadCN**
- **Twilio**

---

## 🔋 Features

✅ **Register as a Patient** – Users can sign up and create a personal profile as a patient.

✅ **Book a Appointment with a Doctor** – Patients can schedule appointments at their convenience.

✅ **Manage Appointments on Admin Side** – Administrators can efficiently view and handle all scheduled appointments.

✅ **Confirm/Schedule Appointment from Admin Side** – Admins can confirm/set appointment times.

✅ **Cancel Appointment from Admin Side** – Administrators can cancel any appointment as needed.

✅ **Send SMS on Appointment Confirmation** – Patients receive SMS notifications to confirm their appointment details.

✅ **Complete Responsiveness** – The application works seamlessly on all device types and screen sizes.

✅ **File Upload** – Users can securely upload and store files within the app using Appwrite storage services.

✅ **Manage and Track Application Performance** – The application uses **Sentry** to monitor performance and detect errors.

---

## 🤸 Quick Start

### **Prerequisites**

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### **Cloning the Repository**

```bash
git clone https://github.com/sjbentley/Patient-Management-System.git
cd Patient-Management-System
```

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

### **Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```plaintext
# APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Replace the placeholder values with your actual **Appwrite credentials**. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

### **Running the Project**

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the project.

---

## 🕸️ Snippets

Key snippets from the project will be added here.

## 🔗 Links

- [Project Demo](#) _(Coming Soon)_

## 🚀 More

For further questions or feature requests, open an issue in the repository. 🚀

## License

This project is licensed under the MIT License.
