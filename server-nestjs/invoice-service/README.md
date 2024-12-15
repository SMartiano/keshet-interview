# **Server README**

## **Overview**
This project provides a backend server built using **NestJS**. It supports managing invoices, filtering by status, and paginated data retrieval. The server is designed for extensibility, scalability, and efficient data handling.

---

## **Features**
- Invoice Management:
  - Retrieve invoices with pagination.
  - Filter invoices by status, date range, and invoice & Supplier Name.
- Built-in mock data for testing.
- RESTful API endpoints.

---

## **Technologies Used**
- **NestJS**: Framework for scalable server-side applications.
- **TypeScript**: For type-safe development.
- **RxJS**: For reactive programming.
- **Mock Data**: Simulated dataset for testing.

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
   cd server-nestjs/invoice-service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Running the Server**

### **Development**
To start the server in development mode:
```bash
npm run start:dev
```
The server will run on [http://localhost:3000](http://localhost:3000).



## **API Endpoints**

### **Base URL**
All endpoints are prefixed with:
```
http://localhost:3000
```

### **Endpoints**

#### **GET /invoices**
Retrieve a paginated list of invoices.

- **Query Parameters**:
  - `page`: Page number (default: `1`).
  - `pageSize`: Number of items per page (default: `20`).
  - `text`: Filter by invoice/supplier name.
  - `startDate`: Filter by start date (ISO format).
  - `endDate`: Filter by end date (ISO format).

- **Example Request**:
  ```
  GET http://localhost:3000/invoices?page=1&pageSize=20&textSearch=pplier%200
  ```

- **Example Response**:
  ```json
  [
    {
      "id": "1",
      "supplierName": "Acme Corp",
      "date": "2024-01-01",
      "amount": 150.5,
      "total": 200.0,
      "paid": 150.5,
      "status": "approved",
      "invoiceName": "Invoice 001",
      "pdfUrl": "url_link"
    }
  ]
  ```

---

## **Project Structure**
```plaintext
src/
├── invoices/
│   ├── invoices.controller.ts   # Handles HTTP requests
│   ├── invoices.service.ts      # Business logic for invoices
│   ├── invoices.module.ts       # Module configuration
│   ├── invoice.constants.ts     # Constants Params
│   ├── mock-invoices.ts         # Mock data for testing
├── app.module.ts                # Main application module
├── main.ts                      # Application entry point
```

---

## **Adding Mock Data**
Mock data is stored in `src/invoices/mock-invoices.ts`. To add or modify mock data:
1. Open the file:
   ```typescript
   export const MOCK_INVOICES: Invoice[] = [
     { id: '1', supplierName: 'Acme Corp', status: 'approved', ... }
   ];
   ```
2. Add your custom records following the `Invoice` structure.

---

