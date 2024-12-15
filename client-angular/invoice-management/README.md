# **Client README**

## **Overview**
This project provides a frontend client for managing and displaying invoice data. It features filters, infinite scrolling for large datasets, and a user-friendly interface for interacting with invoices.

---

## **Features**
- Display invoice data with:
  - Search functionality by invoice name and supplier name.
  - Date range filtering.
  - Dynamic status counters.
- Infinite scrolling for seamless navigation through large datasets.
- Display PDF for individual invoices.

---

## **Technologies Used**
- **Angular**: Framework for building dynamic web applications.
- **RxJS**: For reactive programming.
- **Angular Material**: For UI components and styling.

---

## **Getting Started**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/SMartiano/keshet-interview.git
   ```
2. Navigate to the project directory:
   ```bash
   cd client-angular/invoice-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Running the Client**

### **Development**
To start the client in development mode:
```bash
npm start
```
The client will run on [http://localhost:4200](http://localhost:4200).

---

## **Project Structure**
```plaintext
src/
├── app/
│   ├── core/              # Core modules and services
│   ├── features/          # Feature modules
│   │   ├── invoices/      # Invoices feature
│   │   │   ├── components/  # Invoice-related components
│   │   │   ├── services/    # Services for invoices
│   │   │   ├── models/      # Invoice-related models
│   │   │   ├── invoices.module.ts # Module for invoices
│   │   │   ├── invoices-routing.module.ts # Routing for invoices
│   ├── shared/            # Shared components and pipes
│   │   ├── components/display-pdf    # Component to display PDFs
│   │   ├── pipes/safeUrl         # Pipe to safely display URLs
│   ├── app.module.ts      # Main application module
│   ├── app-routing.module.ts # Main routing module
├── env/                   # Environment-specific configurations
├── assets/images          # Static images and assets
├── styles/styles.scss     # Global styles
```

---

## **Key Decisions**

### **1. Infinite Scroll Instead of Pagination**
Since the requirements did not specify the total number of records, and the example did not include a paginator, the project uses infinite scroll. This approach ensures:
- Smooth user experience for navigating large datasets.
- Efficient data loading by fetching only the required data as the user scrolls.

### **2. Links for PDF Management**
The task did not specify whether to store PDFs in a database or on the server. As a result, the implementation uses links to PDFs:
- Keeps the client lightweight and focused.
- Simplifies file management while maintaining accessibility.

---

## **How to Use**
1. **Filters**:
   - Search by invoice name or supplier name.
   - Select a date range to narrow results.
2. **Infinite Scrolling**:
   - Scroll down the table to load more invoices automatically.
3. **PDF Links**:
   - Click on the invoice link to view or download the PDF.
---
